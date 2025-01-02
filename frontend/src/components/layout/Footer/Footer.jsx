import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">About Book Search</h3>
          <p className="text-gray-400 text-sm">
            Your ultimate destination for discovering and exploring books across
            all genres.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Search Books
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">
            Have questions? Reach out to us for assistance with your book search
            journey.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Book Search. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
