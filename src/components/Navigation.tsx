import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                src="/images/cmb-logo-trans-gradient.png"
                alt="Code Meets Bagel Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold text-gray-900">
                Code Meets Bagel
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
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
                to="/book"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Book a Call
              </Link>
            </div>

            {/* Hamburger for Mobile */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen((o) => !o)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-8 w-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Drawer - moved outside nav for full viewport coverage */}
      <div
        className={`fixed inset-0 z-40 bg-white overflow-y-auto transition-transform duration-200 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
        role="dialog"
        aria-modal="true"
      >
        {/* X button inside drawer, always visible */}
        <button
          className="absolute top-6 right-6 z-50 p-2 rounded bg-white shadow-md"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-900 hover:text-orange-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-2xl font-semibold text-gray-900 hover:text-orange-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-2xl font-semibold text-gray-900 hover:text-orange-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/book"
            className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-2xl text-center hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
