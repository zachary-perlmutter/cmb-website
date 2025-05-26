import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { FaUserTie, FaBolt, FaGem, FaBullseye } from "react-icons/fa";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet the team behind
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Code Meets Bagel
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about helping entrepreneurs scale through smart
              automation and rapid app development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 mb-8">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src="/images/zach-profile-pic.png"
                    alt="Zach Ross profile"
                    className="w-24 h-24 object-cover rounded-3xl shadow-lg border-4 border-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Zach Ross
                </h3>
                <p className="text-orange-600 text-center font-semibold mb-4">
                  Founder & CEO
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From Aerospace to Entrepreneurship
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  After years in aerospace and cybersecurity, Zach discovered
                  his true passion: helping founders scale their businesses
                  through smart technology solutions.
                </p>
                <p>
                  Frustrated by watching brilliant entrepreneurs get bogged down
                  in manual processes and expensive development cycles, he
                  founded Code Meets Bagel with a simple mission: make powerful
                  tech accessible to every business owner.
                </p>
                <p>
                  Today, Zach combines his technical expertise with
                  entrepreneurial insight to deliver automation systems and
                  custom apps that actually move the needle for growing
                  businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <span className="text-white text-4xl">
                <FaUserTie className="text-4xl" />
              </span>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Seasoned professionals with years of experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <span className="text-white text-3xl">
                <FaBolt className="text-4xl" />
              </span>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround without compromising quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <span className="text-white text-3xl">
                <FaGem className="text-4xl" />
              </span>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                Enterprise-grade solutions for your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <span className="text-white text-3xl">
                <FaBullseye className="text-4xl" />
              </span>
              <h3 className="text-xl font-semibold mb-2">Focused Approach</h3>
              <p className="text-gray-600">
                Dedicated to your success and growth.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-12 text-center text-white mb-16 mt-16">
            <h2 className="text-3xl font-bold mb-6">Always Shipping</h2>
            <p className="text-xl opacity-90 mb-8">
              We believe in momentum. Every week, we're launching new features,
              optimizing systems, and helping our clients achieve their goals
              faster.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Want to work together?
            </h2>
            <Link
              to="/book"
              className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Let's Build Something Amazing
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
