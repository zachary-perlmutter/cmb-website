import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { FaBolt, FaLaptop, FaMobile } from "react-icons/fa";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      title: "Automation Systems",
      description:
        "Streamline your operations with custom automation solutions.",
      icon: <FaBolt className="text-4xl" />,
      link: "/services/automation",
      gradient: "from-red-400 to-orange-400",
    },
    {
      title: "Web Applications",
      description:
        "Build powerful web applications that scale with your business.",
      icon: <FaLaptop className="text-4xl" />,
      link: "/services/web-apps",
      gradient: "from-orange-400 to-yellow-400",
    },
    {
      title: "Mobile Apps",
      description: "Create native mobile experiences for iOS and Android.",
      icon: <FaMobile className="text-4xl" />,
      link: "/services/mobile-apps",
      gradient: "from-yellow-400 to-green-400",
    },
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
              Choose the service that best fits your business needs. We'll help
              you scale faster than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-3xl mb-6 flex items-center justify-center text-3xl`}
                >
                  {service.icon}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>

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
      <Footer />
    </div>
  );
};

export default Services;
