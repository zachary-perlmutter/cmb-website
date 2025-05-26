import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>
        <p className="mb-6 text-gray-700">
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>
        <p className="mb-4 text-gray-700">
          Welcome to Code Meets Bagel! These Terms of Service ("Terms") govern
          your use of our website and services. By accessing or using our site,
          you agree to these Terms.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Use of Our Services
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>You must be at least 18 years old to use our services.</li>
          <li>
            You agree not to use our site for any unlawful or prohibited
            activities.
          </li>
          <li>
            We reserve the right to modify or discontinue our services at any
            time.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Intellectual Property
        </h2>
        <p className="mb-4 text-gray-700">
          All content, trademarks, and data on this site are the property of
          Code Meets Bagel or its licensors. You may not use, reproduce, or
          distribute any content without our written permission.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-700">
          Code Meets Bagel is not liable for any damages arising from your use
          of our site or services. Our site is provided "as is" without
          warranties of any kind.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Changes to These Terms
        </h2>
        <p className="mb-4 text-gray-700">
          We may update these Terms from time to time. Changes will be posted on
          this page with an updated effective date.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Contact Us
        </h2>
        <p className="mb-4 text-gray-700">
          If you have any questions about these Terms, please contact us at
          hello@codemeetsbagel.com.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
