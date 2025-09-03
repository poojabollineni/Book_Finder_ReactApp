export default function FavouritesPopup({ favourites, toggleFavourite, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      {/* Popup box */}
      <div className="relative bg-gray-900 text-white rounded-xl p-6 w-11/12 max-w-3xl max-h-[80vh] overflow-y-auto shadow-lg z-10">
        <h2 className="text-2xl font-bold mb-4">⭐ Your Favourites</h2>
        {favourites.length === 0 ? (
          <p className="text-gray-400">No favourite books yet!</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {favourites.map((book, idx) => (
              <div key={idx} className="bg-gray-800 p-3 rounded-lg">
                {book.cover_i ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-700 flex items-center justify-center mb-2 rounded-md">
                    <span className="text-gray-400">No Cover</span>
                  </div>
                )}
                <h3 className="font-semibold text-sm">{book.title}</h3>
                <button
                  onClick={() => toggleFavourite(book)}
                  className="mt-2 px-2 py-1 bg-red-600 rounded hover:bg-red-700 text-xs"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg block mx-auto"
        >
          ✖ Close
        </button>
      </div>
    </div>
  );
}
