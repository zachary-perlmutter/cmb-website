
import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const WebApps = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              You don't need a dev team.
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                You need a solution.
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get custom web applications built with modern tech stack. MVP in 4 weeks, not 4 months.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Web Apps?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pre-built Components</h3>
                    <p className="text-gray-600">We use battle-tested components to ship faster without sacrificing quality</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">MVP in 4 Weeks</h3>
                    <p className="text-gray-600">Get your minimum viable product live and generating value in record time</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">💎</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Stack</h3>
                    <p className="text-gray-600">Built with React, Firebase, Supabase, and other cutting-edge technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
                    <p className="text-gray-600">Built to grow with your business, from startup to enterprise</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Web Apps We Build</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Portals</h4>
                  <p className="text-gray-600 text-sm">Self-service dashboards for your customers</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Internal Dashboards</h4>
                  <p className="text-gray-600 text-sm">Real-time analytics and team management</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Booking Systems</h4>
                  <p className="text-gray-600 text-sm">Appointment scheduling and calendar management</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">E-commerce Platforms</h4>
                  <p className="text-gray-600 text-sm">Custom online stores and marketplaces</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Web App?</h2>
            <p className="text-xl opacity-90 mb-8">Let's discuss your project and create something amazing together.</p>
          </div>

          <div className="text-center">
            <Link
              to="/book"
              className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book a Web App Consult
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebApps;
