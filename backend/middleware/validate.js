export const validateSearchQuery = (req, res, next) => {
  const { query, page, limit } = req.query;

  if (!query || query.trim().length === 0) {
    return res.status(400).json({ message: "Search query is required" });
  }

  // Convert and validate page and limit
  req.query.page = parseInt(page) || 1;
  req.query.limit = parseInt(limit) || 10;

  if (req.query.page < 1) req.query.page = 1;
  if (req.query.limit < 1 || req.query.limit > 40) req.query.limit = 10;

  next();
};
