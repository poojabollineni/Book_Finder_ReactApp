import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import RecentSearches from "./components/RecentSearches";
import FeaturedBooks from "./components/FeaturedBooks";
import FavouritesPopup from "./components/FavouritesPopup";

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);

  const fetchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 20));

      setRecentSearches((prev) => {
        const updated = [query, ...prev.filter((item) => item !== query)];
        return updated.slice(0, 6);
      });
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  const clearBooks = () => setBooks([]);

  const toggleFavourite = (book) => {
    setFavourites((prev) => {
      const exists = prev.find((b) => b.key === book.key);
      if (exists) {
        return prev.filter((b) => b.key !== book.key);
      } else {
        return [...prev, book];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold cursor-pointer">📚 Book Finder</h1>
        <button
          onClick={() => setShowFavourites(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Favourites ⭐
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <SearchBar
          onSearch={fetchBooks}
          onClear={clearBooks}
          onShowFav={() => setShowFavourites(true)}
        />

        <RecentSearches searches={recentSearches} onSearch={fetchBooks} />
        <FeaturedBooks onSearch={fetchBooks} />

        {loading ? (
          <p className="text-center mt-6 animate-pulse text-lg">
            Loading results...
          </p>
        ) : (
          <BookList
            books={books}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-center text-gray-400">
        © by Pooja Chowdary
      </footer>

      {/* Favourites Popup */}
      {showFavourites && (
        <FavouritesPopup
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          onClose={() => setShowFavourites(false)}
        />
      )}
    </div>
  );
}
