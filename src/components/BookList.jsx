export default function BookList({ books, favourites, toggleFavourite }) {
  if (!books.length) {
    return (
      <p className="text-center text-gray-400 mt-10">
        Start exploring books by searching above 📚
      </p>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
      {books.map((book, index) => {
        const isFav = favourites.some((fav) => fav.key === book.key);
        return (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className="w-full h-60 object-cover rounded-md mb-3"
              />
            ) : (
              <div className="w-full h-60 bg-gray-700 flex items-center justify-center mb-3 rounded-md">
                <span className="text-gray-400">No Cover</span>
              </div>
            )}
            <h2 className="font-bold text-lg">{book.title}</h2>
            <p className="text-sm text-gray-300">
              {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
            </p>
            <p className="text-xs text-gray-500">
              First published: {book.first_publish_year || "N/A"}
            </p>
            <button
              onClick={() => toggleFavourite(book)}
              className={`mt-3 px-3 py-1 rounded ${
                isFav
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              {isFav ? "❤️ Remove Fav" : "🤍 Add Fav"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
