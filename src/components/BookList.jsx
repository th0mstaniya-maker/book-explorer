import BookCard from "./BookCard";

function BookList({ books }) {
  // Showing message if there were no books of what was written
  if (books.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-10 text-lg">
        No books found. Maybe try a different book.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default BookList;
