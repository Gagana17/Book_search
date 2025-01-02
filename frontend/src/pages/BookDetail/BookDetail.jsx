import React from "react";
import { useParams } from "react-router-dom";
import { useBookDetails } from "../../hooks/useBookDetails";
import { Card } from "../../components/common/Card/Card";
import {
  Book,
  Calendar,
  Building2,
  BookOpen,
  BookCopy,
  Loader2,
} from "lucide-react";

export const BookDetail = () => {
  const { id } = useParams();
  const { book, loading } = useBookDetails(id);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <Book className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Book Not Found
          </h2>
          <p className="text-gray-600">
            The book you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Card className="overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Book Cover Section */}
          <div className="w-full lg:w-1/3 p-6 lg:p-8 flex justify-center lg:border-r lg:border-gray-100">
            <div className="relative w-full max-w-md">
              <img
                src={book.thumbnail || "/api/placeholder/400/600"}
                alt={book.title}
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              {book.categories?.length > 0 && (
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {book.categories[0]}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Book Details Section */}
          <div className="w-full lg:w-2/3 p-6 lg:p-8">
            <div className="space-y-6">
              {/* Title and Author */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h1>
                <p className="text-xl text-gray-600">
                  by {book.authors?.join(", ") || "Unknown Author"}
                </p>
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {book.description || "No description available."}
                </p>
              </div>

              {/* Book Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <DetailItem
                  icon={<Calendar className="w-5 h-5 text-blue-500" />}
                  label="Publication Date"
                  value={book.publishedDate || "Unknown"}
                />
                <DetailItem
                  icon={<Building2 className="w-5 h-5 text-blue-500" />}
                  label="Publisher"
                  value={book.publisher || "Unknown"}
                />
                <DetailItem
                  icon={<BookOpen className="w-5 h-5 text-blue-500" />}
                  label="Page Count"
                  value={book.pageCount ? `${book.pageCount} pages` : "Unknown"}
                />
                <DetailItem
                  icon={<BookCopy className="w-5 h-5 text-blue-500" />}
                  label="Categories"
                  value={book.categories?.join(", ") || "Uncategorized"}
                />
              </div>

              {/* Additional Info */}
              {book.previewLink && (
                <div className="pt-6 border-t border-gray-100">
                  <a
                    href={book.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Preview Book
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <p className="mt-1 text-base text-gray-900">{value}</p>
    </div>
  </div>
);
