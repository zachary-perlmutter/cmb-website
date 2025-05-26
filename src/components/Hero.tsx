
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Automate it.
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Build it.
            </span>
            <br />
            Scale it.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We help business owners automate operations and launch custom apps—fast.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/audit"
              className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Free Audit
            </Link>
            <Link
              to="/book"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Wasting time on repeat tasks?</h3>
                <p className="text-gray-600">→ Automate it.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Need a portal or internal tool?</h3>
                <p className="text-gray-600">→ Build it.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-green-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Want to launch an MVP app fast?</h3>
                <p className="text-gray-600">→ We got you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
