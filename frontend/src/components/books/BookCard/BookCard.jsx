import React from "react";
import { Card } from "../../common/Card/Card";
import { Link } from "react-router-dom";

export const BookCard = ({ book }) => (
  <Card className="h-full transition-transform hover:scale-105">
    <Link to={`/book/${book.id}`}>
      <div className="h-48 overflow-hidden bg-gray-200">
        <img
          src={book.thumbnail || "/api/placeholder/240/360"}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {book.authors?.join(", ") || "Unknown Author"}
        </p>
        <p className="text-gray-500 text-sm line-clamp-3 flex-1">
          {book.description || "No description available"}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {book.publishedDate?.split("-")[0] || "Unknown date"}
          </span>
          {book.averageRating && (
            <span className="text-sm text-yellow-500">
              ★ {book.averageRating.toFixed(1)}
            </span>
          )}
        </div>
      </div>
    </Link>
  </Card>
);
