import React from "react";
import { Link } from "react-router-dom";
import { FaRegSadTear } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        <div className="flex flex-col items-center">
          <span className="text-7xl md:text-9xl font-extrabold text-orange-400 mb-4">
            404
          </span>
          <img
            src="/images/new-cmb-logo-black.png"
            alt="Code Meets Bagel Logo"
            className="h-24 w-24 md:h-32 md:w-32 mb-6 rounded-full shadow-lg object-contain"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! This page got lost in the bagel shop.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            The page you're looking for doesn't exist or has been moved. But
            don't worry, you can always head back to the homepage and grab a
            fresh start!
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
