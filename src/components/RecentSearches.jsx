export default function RecentSearches({ searches, onSearch }) {
  if (!searches.length) return null;

  return (
    <div className="max-w-4xl mx-auto mb-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Recently Searched
      </h2>
      <div className="flex flex-wrap gap-3">
        {searches.map((search, idx) => (
          <button
            key={idx}
            onClick={() => onSearch(search)}
            className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow hover:bg-blue-100"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
}
