import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <p className="mb-6 text-gray-700">
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>
        <p className="mb-4 text-gray-700">
          Code Meets Bagel ("we", "us", or "our") is committed to protecting
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>
            Personal identification information (Name, email address, phone
            number, etc.)
          </li>
          <li>Usage data (pages visited, time spent, browser type, etc.)</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>To provide and maintain our services</li>
          <li>To improve our website and offerings</li>
          <li>To communicate with you</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Sharing Your Information
        </h2>
        <p className="mb-4 text-gray-700">
          We do not sell, trade, or rent your personal information to others. We
          may share information with service providers who assist us in
          operating our website and conducting our business, as long as those
          parties agree to keep this information confidential.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Your Rights
        </h2>
        <p className="mb-4 text-gray-700">
          You have the right to access, update, or delete your personal
          information. To exercise these rights, please contact us at
          hello@codemeetsbagel.com.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Contact Us
        </h2>
        <p className="mb-4 text-gray-700">
          If you have any questions about this Privacy Policy, please contact us
          at hello@codemeetsbagel.com.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
