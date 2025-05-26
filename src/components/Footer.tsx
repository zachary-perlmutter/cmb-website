import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/automation"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-apps"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Web Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile-apps"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/audit"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Free Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Logo */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Built by Code Meets Bagel
              </h3>
              <p className="text-gray-600">Making technology work for you.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/code-meets-bagel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://instagram.com/codemeetsbagel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://x.com/zachh_ross"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@codemeetsbagel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="https://www.tiktok.com/@zachh.ross"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <FaTiktok className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/codemeetsbagel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Code Meets Bagel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
