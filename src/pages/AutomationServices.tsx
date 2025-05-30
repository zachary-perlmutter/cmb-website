import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaTools,
  FaChartBar,
  FaRobot,
  FaSearch,
  FaWrench,
  FaRocket,
} from "react-icons/fa";
import Footer from "../components/Footer";

const AutomationServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              You're still doing it
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                manually?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stop wasting hours on repetitive tasks. We'll build custom
              automations that work while you sleep.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Common Automations We Build
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Customer Onboarding
                    </h3>
                    <p className="text-gray-600">
                      Automated welcome sequences, document collection, and
                      account setup
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Follow-up Systems
                    </h3>
                    <p className="text-gray-600">
                      Smart email sequences, SMS reminders, and lead nurturing
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Task Routing
                    </h3>
                    <p className="text-gray-600">
                      Intelligent assignment of leads, tickets, and projects to
                      team members
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      CRM Sync
                    </h3>
                    <p className="text-gray-600">
                      Keep all your systems in perfect sync without manual data
                      entry
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tools We Use
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200 flex flex-col items-center justify-center">
                  <img
                    src="/images/zapier-logo.png"
                    alt="Zapier Logo"
                    className="h-10 mb-2 object-contain"
                  />
                  <span className="font-semibold text-gray-700">Zapier</span>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200 flex flex-col items-center justify-center">
                  <img
                    src="/images/make-logo.png"
                    alt="Make Logo"
                    className="h-10 mb-2 object-contain"
                  />
                  <span className="font-semibold text-gray-700">Make</span>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200 flex flex-col items-center justify-center">
                  <img
                    src="/images/airtable-logo.png"
                    alt="Airtable Logo"
                    className="h-10 mb-2 object-contain"
                  />
                  <span className="font-semibold text-gray-700">Airtable</span>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200 flex flex-col items-center justify-center">
                  <img
                    src="/images/chatgpt-logo.png"
                    alt="ChatGPT Logo"
                    className="h-10 mb-2 object-contain"
                  />
                  <span className="font-semibold text-gray-700">ChatGPT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Quick Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-orange-500 flex justify-center">
                  <FaSearch />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Discovery
                </h3>
                <p className="text-gray-600">
                  We analyze your current processes and identify automation
                  opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-orange-500 flex justify-center">
                  <FaWrench />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Development
                </h3>
                <p className="text-gray-600">
                  We build and test your automation solution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-orange-500 flex justify-center">
                  <FaRocket />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Deployment
                </h3>
                <p className="text-gray-600">
                  We launch your automation and provide ongoing support.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/audit"
              className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Free Automation Audit
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AutomationServices;
