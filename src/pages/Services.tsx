
import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Automation Systems",
      description: "Save hours per week with AI + no-code automations.",
      features: ["Workflow automation", "CRM integration", "AI-powered tasks", "Custom triggers"],
      icon: "⚡",
      link: "/services/automation",
      gradient: "from-red-400 to-orange-400"
    },
    {
      title: "Web App Development",
      description: "Custom internal tools, dashboards, portals.",
      features: ["React/Next.js apps", "Real-time dashboards", "User portals", "Admin panels"],
      icon: "💻",
      link: "/services/web-apps",
      gradient: "from-orange-400 to-yellow-400"
    },
    {
      title: "Mobile App Development",
      description: "Launch MVPs in weeks, not months.",
      features: ["Cross-platform apps", "MVP development", "User-friendly design", "Fast deployment"],
      icon: "📱",
      link: "/services/mobile-apps",
      gradient: "from-yellow-400 to-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Not sure what you need? 
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Start here.
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the service that best fits your business needs. We'll help you scale faster than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-3xl mb-6 flex items-center justify-center text-3xl`}>
                  {service.icon}
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className="block text-center bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
