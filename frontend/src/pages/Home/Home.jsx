import React from "react";
import { SearchBar } from "../../components/books/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Library, Search, Star } from "lucide-react";

export const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between h-screen">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-white pt-24 lg:pt-0">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Discover Your Next
                <span className="block text-yellow-300 mt-2">
                  Literary Journey
                </span>
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-xl">
                Immerse yourself in our vast collection of books. From timeless
                classics to contemporary masterpieces, find your perfect read
                today.
              </p>

              {/* Search Bar Section */}
              <div className="max-w-2xl backdrop-blur-sm bg-white/10 p-2 rounded-2xl">
                <SearchBar onSearch={handleSearch} />
              </div>

              {/* Stats Section */}
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl">
                {[
                  { value: "1M+", label: "Books Available" },
                  { value: "500K+", label: "Active Readers" },
                  { value: "50K+", label: "Featured Authors" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-4"
                  >
                    <div className="text-3xl font-bold text-yellow-300">
                      {stat.value}
                    </div>
                    <div className="text-sm mt-1 opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Book Stack */}
            <div className="hidden lg:flex w-1/2 justify-center items-center">
              <div className="relative w-96 h-96">
                {/* Decorative Books */}
                <div className="absolute w-72 h-96 bg-white/90 rounded-lg shadow-2xl transform rotate-12 -right-4 top-4">
                  <img
                    src="/assets/books/book-1.jpg"
                    alt="Decorative Book 1"
                    className="w-full h-full object-cover rounded-lg opacity-50"
                  />
                </div>
                <div className="absolute w-72 h-96 bg-white/90 rounded-lg shadow-2xl transform -rotate-12 -left-4 top-4">
                  <img
                    src="/assets/books/book-2.jpg"
                    alt="Decorative Book 2"
                    className="w-full h-full object-cover rounded-lg opacity-50"
                  />
                </div>
                <div className="relative w-72 h-96 bg-white rounded-lg shadow-2xl z-10">
                  <img
                    src="/assets/books/featured-book.jpg"
                    alt="Featured Book Cover"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-transparent to-black/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Extensive Library",
                description:
                  "Access millions of carefully curated books across all genres and languages",
                icon: <Library className="w-8 h-8" />,
              },
              {
                title: "Advanced Search",
                description:
                  "Find your next read with our powerful, intelligent search capabilities",
                icon: <Search className="w-8 h-8" />,
              },
              {
                title: "Personalized Experience",
                description:
                  "Get tailored recommendations based on your reading preferences",
                icon: <Star className="w-8 h-8" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-white mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                  {feature.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
