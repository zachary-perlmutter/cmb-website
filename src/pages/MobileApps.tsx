
import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const MobileApps = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Build beautiful mobile apps
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                without the $40K price tag.
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use cutting-edge tools like Roke, Lovable, and Supabase to deliver stunning mobile apps in record time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mobile App Advantage</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cross-Platform</h3>
                    <p className="text-gray-600">One codebase, works on both iOS and Android perfectly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Accelerated Development</h3>
                    <p className="text-gray-600">We use Roke and GPT to build features 10x faster than traditional methods</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Beautiful Design</h3>
                    <p className="text-gray-600">Modern, intuitive interfaces that users love to interact with</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Deployment</h3>
                    <p className="text-gray-600">From concept to app store in weeks, not months</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Use Cases</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Referral Apps</h4>
                  <p className="text-gray-600 text-sm">Gamified referral systems that drive growth</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Portals</h4>
                  <p className="text-gray-600 text-sm">Mobile-first customer service and account management</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Appointment Apps</h4>
                  <p className="text-gray-600 text-sm">Booking, scheduling, and calendar integration</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Productivity Tools</h4>
                  <p className="text-gray-600 text-sm">Custom workflow and task management apps</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-green-400 rounded-3xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Mobile App?</h2>
            <p className="text-xl opacity-90 mb-8">Get a custom quote and timeline for your mobile app project.</p>
          </div>

          <div className="text-center">
            <Link
              to="/book"
              className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Your MVP Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApps;
