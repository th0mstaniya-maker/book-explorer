function SearchForm({ category, setCategory, fetchBooks }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
    >
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-3 w-full sm:w-80 focus:ring-2 focus:ring-blue-400 outline-none"
        placeholder="Enter category (e.g., science, fiction, maths)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
