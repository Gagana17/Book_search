import express from "express";
import * as booksController from "../controllers/booksController.js";
import { validateSearchQuery } from "../middleware/validate.js";
import { cacheMiddleware } from "../utils/cache.js";

const router = express.Router();

router.get(
  "/search",
  validateSearchQuery,
  cacheMiddleware(300), // Cache for 5 minutes
  booksController.searchBooks
);

router.get(
  "/:id",
  cacheMiddleware(600), // Cache for 10 minutes
  booksController.getBookDetails
);

export default router;
