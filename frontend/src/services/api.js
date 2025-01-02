import { API_BASE_URL } from "../constants/config";

export const searchBooks = async (query, page = 1) => {
  const response = await fetch(
    `${API_BASE_URL}/books/search?query=${encodeURIComponent(
      query
    )}&page=${page}&limit=10`
  );
  if (!response.ok) throw new Error("Failed to fetch books");
  return response.json();
};

export const getBookById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/books/${id}`);
  if (!response.ok) throw new Error("Failed to fetch book details");
  return response.json();
};
