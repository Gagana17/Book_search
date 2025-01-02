import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">{children}</div>
    </main>
    <Footer />
  </div>
);
