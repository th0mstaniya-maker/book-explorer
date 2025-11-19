import { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import BookList from "./components/BookList";

function App() {
  const [bookCategory, setBookCategory] = useState("");
  const [fetchedBooks, setFetchedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  // Function to fetch books from API openlibrary
  const fetchBooks = async () => {
    //show nothing if there was nothing written to the search bar
    if (!bookCategory) return; 

    setIsLoading(true);
    setFetchError("");
    setFetchedBooks([]);

    try {
      const response = await axios.get(
        `https://openlibrary.org/subjects/${bookCategory}.json`
      );
      setFetchedBooks(response.data.works || []);
    } catch (err) {
      setFetchError("Something went wrong.");
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-10 drop-shadow-lg">
        📚 My Book Explorer
      </h1>
      <SearchForm
        category={bookCategory}
        setCategory={setBookCategory}
        fetchBooks={fetchBooks}
      />
      {isLoading && (
        <p className="text-blue-600 text-center mt-6 text-lg animate-pulse">
          Please wait...Loading books!
        </p>
      )}

      {fetchError && (
        <p className="text-red-600 text-center mt-6 text-lg font-semibold">
          {fetchError}
        </p>
      )}
      {!isLoading && !fetchError && <BookList books={fetchedBooks} />}
    </div>
  );
}

export default App;
