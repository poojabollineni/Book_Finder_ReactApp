import { useState } from "react";

export default function SearchBar({ onSearch, onClear, onShowFav }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-3 mb-8"
    >
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-3 border rounded-lg w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Search
      </button>
      <button
        type="button"
        onClick={() => {
          setQuery("");
          onClear();
        }}
        className="px-5 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700"
      >
        Clear
      </button>
      <button
        type="button"
        onClick={onShowFav}
        className="px-5 py-3 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700"
      >
        ⭐ Fav
      </button>
    </form>
  );
}
