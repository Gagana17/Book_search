import axios from "axios";
import { createError } from "../utils/errors.js";

const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

export const searchBooks = async (query, page = 1, limit = 10) => {
  try {
    const startIndex = (page - 1) * limit;
    const response = await axios.get(GOOGLE_BOOKS_API_URL, {
      params: {
        q: query,
        key: API_KEY,
        startIndex,
        maxResults: limit,
      },
    });

    return response.data;
  } catch (error) {
    throw createError("Failed to fetch books from Google Books API", 503);
  }
};

export const getBookById = async (bookId) => {
  try {
    const response = await axios.get(`${GOOGLE_BOOKS_API_URL}/${bookId}`, {
      params: { key: API_KEY },
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw createError("Book not found", 404);
    }
    throw createError("Failed to fetch book details", 503);
  }
};
