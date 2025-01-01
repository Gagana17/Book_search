const axios = require("axios");

const getBooks = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${q}`
    );
    res.json(response.data.items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

module.exports = { getBooks };
