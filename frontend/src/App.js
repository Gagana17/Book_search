import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { BookDetail } from "./pages/BookDetail/BookDetail";
import AboutPage from "./pages/About/About";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
