import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchBooks } from "../services/api";

export const useBookSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const query = searchParams.get("q") || "";

  const search = async (newQuery) => {
    setSearchParams({ q: newQuery });
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      setLoading(true);
      try {
        const data = await searchBooks(query, page);
        setBooks(data.books);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query, page]);

  return { books, loading, search, page, setPage, totalPages };
};
