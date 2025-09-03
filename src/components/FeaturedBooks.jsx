const featured = [
  "Harry Potter",
  "Lord of the Rings",
  "Pride and Prejudice",
  "The Great Gatsby",
  "To Kill a Mockingbird",
  "1984",
  "Moby Dick",
  "The Hobbit",
];

export default function FeaturedBooks({ onSearch }) {
  return (
    <div className="max-w-6xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        📖 Popular Books
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {featured.map((title, idx) => (
          <div
            key={idx}
            onClick={() => onSearch(title)}
            className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg p-4 text-center hover:bg-blue-50 transition"
          >
            <p className="font-semibold text-gray-800">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
