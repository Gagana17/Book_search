import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import booksRoutes from "./routes/booksRoutes.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(compression()); // Compress responses
app.use(morgan("dev")); // Logging
app.use(cors());
app.use(express.json());

// Rate limiting
app.use("/api/", apiLimiter);

// Routes
app.use("/api/books", booksRoutes);

// Error handling
app.use(errorHandler);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
