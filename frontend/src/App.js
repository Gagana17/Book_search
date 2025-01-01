import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const searchBooks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/books?q=${query}`
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  return (
    <div>
      <h1>Book Search App</h1>
      <input
        type="text"
        placeholder="Search for books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchBooks}>Search</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
