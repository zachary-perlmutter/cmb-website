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
                src="/images/new-cmb-logo-black.png"
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

            {/* Hamburger for Mobile */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {mobileMenuOpen ? (
                // Close (X) icon
                <svg
                  className="h-7 w-7 text-gray-900"
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
                // Hamburger icon
                <svg
                  className="h-7 w-7 text-gray-900"
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
        {/* Mobile Menu Drawer (Full Screen, Improved) */}
        <div
          className={`fixed inset-0 z-50 w-full h-full bg-white flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-200 ease-in-out md:hidden`}
          role="dialog"
          aria-modal="true"
          style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
        >
          {/* Close (X) icon in top right */}
          <button
            className="absolute top-6 right-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 z-10"
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
          <div className="flex-1 flex flex-col justify-center items-center overflow-y-auto px-6 py-16 space-y-8">
            <Link
              to="/services"
              className="text-gray-900 text-2xl font-semibold hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-900 text-2xl font-semibold hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 text-2xl font-semibold hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
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
      </nav>
    </>
  );
};

export default Navigation;
