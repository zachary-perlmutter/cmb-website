import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 bg-white text-orange-500 font-bold px-4 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      >
        Skip to main content
      </a>
      <nav
        role="navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/new-cmb-logo-black.png"
                alt="Code Meets Bagel Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold text-gray-900">
                Code Meets Bagel
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/services"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/book"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
