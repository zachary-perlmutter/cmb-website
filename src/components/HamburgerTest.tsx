import React, { useState } from "react";

const HamburgerTest = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Hamburger Button (visible on mobile) */}
      <button
        className="fixed top-6 right-6 z-50 p-3 rounded bg-white shadow-md md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
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

      {/* Slide-out Menu (mobile only) */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-200 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ pointerEvents: open ? "auto" : "none" }}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold text-gray-900 hover:text-orange-500"
          >
            Home
          </a>
          <a
            href="/services"
            className="text-2xl font-semibold text-gray-900 hover:text-orange-500"
          >
            Services
          </a>
          <a
            href="/about"
            className="text-2xl font-semibold text-gray-900 hover:text-orange-500"
          >
            About
          </a>
          <a
            href="/book"
            className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-2xl text-center hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Book a Call
          </a>
        </div>
      </div>

      <div className="mt-24 text-gray-500 text-center md:hidden">
        <p>
          Resize to mobile or view on a mobile device to test the hamburger
          menu.
        </p>
      </div>
    </div>
  );
};

export default HamburgerTest;
