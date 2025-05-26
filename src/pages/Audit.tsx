
import React from 'react';
import Navigation from '../components/Navigation';

const Audit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-yellow-50">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find your #1
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                automation opportunity
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Take our 60-second audit and discover where you can save hours every week.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🔍</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Automation Audit</h2>
              <p className="text-gray-600">Answer a few quick questions to get your personalized automation roadmap.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  1. What's your biggest time waster right now?
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="radio" name="timeWaster" className="mr-3 text-orange-500" />
                    <span>Manual data entry and admin tasks</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="timeWaster" className="mr-3 text-orange-500" />
                    <span>Follow-up emails and client communication</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="timeWaster" className="mr-3 text-orange-500" />
                    <span>Scheduling and calendar management</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="timeWaster" className="mr-3 text-orange-500" />
                    <span>Lead routing and assignment</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="timeWaster" className="mr-3 text-orange-500" />
                    <span>Reporting and analytics</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  2. How many hours per week do you spend on repetitive tasks?
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="radio" name="hours" className="mr-3 text-orange-500" />
                    <span>5-10 hours</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="hours" className="mr-3 text-orange-500" />
                    <span>10-20 hours</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="hours" className="mr-3 text-orange-500" />
                    <span>20+ hours</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  3. What tools do you currently use?
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                  placeholder="e.g., Gmail, Google Sheets, CRM, etc."
                ></textarea>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  4. Your contact information
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-xl text-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get My Free Automation Roadmap
              </button>
            </form>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                We'll send you a personalized automation plan within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Audit;
