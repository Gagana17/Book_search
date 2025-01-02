import React from "react";
import { Book, Users, Globe, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-light mb-6 text-gray-900">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're passionate about connecting readers with their perfect books,
            making literature accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <ValueCard
              icon={<Book className="text-indigo-500" size={28} />}
              title="Curated Collection"
              description="Thoughtfully selected books spanning genres from classic literature to contemporary bestsellers."
            />
            <ValueCard
              icon={<Users className="text-indigo-500" size={28} />}
              title="Reader Community"
              description="Join discussions, share recommendations, and connect with fellow book enthusiasts."
            />
            <ValueCard
              icon={<Globe className="text-indigo-500" size={28} />}
              title="Global Access"
              description="Breaking down barriers to make reading accessible across borders and cultures."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-8 text-gray-900">
            Get in Touch
          </h2>
          <div className="inline-flex items-center gap-3 text-indigo-500 hover:text-indigo-600 transition-colors">
            <Mail size={20} />
            <a href="mailto:contact@booksearch.com" className="text-lg">
              contact@booksearch.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2025 Book Search. All rights reserved.
      </footer>
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-indigo-50 rounded-lg">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default AboutPage;
