function BookCard({ book }) {
  //function to show the authors of the book
  const getAuthors = (authors) => {
    if (!authors || authors.length === 0) return "Unknown";
    return authors.map((a) => a.name).join(", ");
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-md transition">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{book.title}</h3>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium text-gray-700">Year:</span>{" "}
        {book.first_publish_year || "Unknown"}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-700">Authors:</span>{" "}
        {getAuthors(book.authors)}
      </p>
    </div>
  );
}

export default BookCard;
