import React from "react";
import { useBookSearch } from "../../hooks/useBookSearch";
import { SearchBar } from "../../components/books/SearchBar/SearchBar";
import { BookList } from "../../components/books/BookList/BookList";
import { Button } from "../../components/common/Button/Button";
import { Book, ChevronLeft, ChevronRight } from "lucide-react";

export const SearchResults = () => {
  const { books, loading, search, page, totalPages, setPage } = useBookSearch();

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto">
            <SearchBar onSearch={search} />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Results Header */}
        {books.length > 0 && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Search Results
            </h2>
            <span className="text-sm text-gray-600">
              Showing {Math.min(20, books.length)} results
            </span>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin">
              <Book className="w-8 h-8 text-blue-500" />
            </div>
            <p className="mt-4 text-gray-600">Searching for books...</p>
          </div>
        )}

        {/* No Results State */}
        {!loading && books.length === 0 && (
          <div className="text-center py-12">
            <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No books found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or explore different categories
            </p>
          </div>
        )}

        {/* Books Grid */}
        <BookList books={books} loading={loading} />

        {/* Pagination */}
        {books.length > 0 && (
          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  Showing page <span className="font-medium">{page}</span> of{" "}
                  <span className="font-medium">{totalPages}</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <div className="flex items-center">
                  {/* Page Numbers */}
                  <div className="hidden md:flex space-x-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <button
                          key={i}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-3 py-1 rounded-md text-sm ${
                            page === pageNum
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    {totalPages > 5 && (
                      <span className="text-gray-400">...</span>
                    )}
                  </div>
                </div>
                <Button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
