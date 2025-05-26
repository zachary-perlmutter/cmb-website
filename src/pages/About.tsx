
import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

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
              We're passionate about helping entrepreneurs scale through smart automation and rapid app development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Zach Ross</h3>
                <p className="text-orange-600 text-center font-semibold mb-4">Founder & Lead Developer</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">From Aerospace to Entrepreneurship</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  After years in aerospace and cybersecurity, Zach discovered his true passion: helping founders 
                  scale their businesses through smart technology solutions.
                </p>
                <p>
                  Frustrated by watching brilliant entrepreneurs get bogged down in manual processes and 
                  expensive development cycles, he founded Code Meets Bagel with a simple mission: 
                  make powerful tech accessible to every business owner.
                </p>
                <p>
                  Today, Zach combines his technical expertise with entrepreneurial insight to deliver 
                  automation systems and custom apps that actually move the needle for growing businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                We ship MVPs in weeks, not months. Speed is a competitive advantage, and we help you win.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Honest</h3>
              <p className="text-gray-600 leading-relaxed">
                No tech jargon, no hidden fees. We tell you exactly what you need and deliver exactly that.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-green-400 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Obsessed with Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Every line of code, every automation, every design choice is crafted with care and precision.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">Always Shipping</h2>
            <p className="text-xl opacity-90 mb-8">
              We believe in momentum. Every week, we're launching new features, optimizing systems, 
              and helping our clients achieve their goals faster.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to work together?</h2>
            <Link
              to="/book"
              className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Let's Build Something Amazing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
