import React from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaLaptop, FaMobile, FaArrowRight } from "react-icons/fa";

const ServicesPreview = () => {
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Superpower
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Not sure what you need? We'll help you find the perfect solution to
            scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange-200 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 flex items-center justify-center text-2xl`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                  <Link
                    to={service.link}
                    className="group inline-flex items-center text-orange-500 hover:text-orange-600"
                  >
                    Learn more
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
