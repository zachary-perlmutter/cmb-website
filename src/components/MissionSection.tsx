import React from "react";
import {
  FaBullseye,
  FaMagic,
  FaStar,
  FaHeart,
  FaRocket,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const MissionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <FaBullseye className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with technology that works for them, not
              against them.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <FaMagic className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              A future where software builds itself — and founders spend more
              time growing, not grinding.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-green-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <FaStar className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Our Values</h3>
            <div className="text-gray-600 space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <FaHeart className="text-orange-400" />
                <p>Simplicity over complexity</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <FaRocket className="text-orange-400" />
                <p>Move fast, build smart</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <FaShieldAlt className="text-orange-400" />
                <p>Trust and transparency</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <FaUsers className="text-orange-400" />
                <p>People over process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
