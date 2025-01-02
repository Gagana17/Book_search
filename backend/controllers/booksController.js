import * as googleBooksService from "../services/googleBooksService.js";

export const searchBooks = async (req, res, next) => {
  try {
    const { query, page, limit } = req.query;
    const results = await googleBooksService.searchBooks(query, page, limit);

    const formattedResults = {
      books:
        results.items?.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || [],
          description: item.volumeInfo.description,
          thumbnail: item.volumeInfo.imageLinks?.thumbnail,
          publishedDate: item.volumeInfo.publishedDate,
          pageCount: item.volumeInfo.pageCount,
          categories: item.volumeInfo.categories || [],
          averageRating: item.volumeInfo.averageRating,
          ratingsCount: item.volumeInfo.ratingsCount,
        })) || [],
      totalItems: results.totalItems || 0,
      page: page,
      limit: limit,
      totalPages: Math.ceil((results.totalItems || 0) / limit),
    };

    res.json(formattedResults);
  } catch (error) {
    next(error);
  }
};

export const getBookDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await googleBooksService.getBookById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const formattedBook = {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || [],
      description: book.volumeInfo.description,
      thumbnail: book.volumeInfo.imageLinks?.thumbnail,
      publishedDate: book.volumeInfo.publishedDate,
      pageCount: book.volumeInfo.pageCount,
      categories: book.volumeInfo.categories || [],
      averageRating: book.volumeInfo.averageRating,
      ratingsCount: book.volumeInfo.ratingsCount,
      language: book.volumeInfo.language,
      previewLink: book.volumeInfo.previewLink,
      publisher: book.volumeInfo.publisher,
    };

    res.json(formattedBook);
  } catch (error) {
    next(error);
  }
};
