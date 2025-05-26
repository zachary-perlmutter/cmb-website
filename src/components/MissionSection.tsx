
import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Mission</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To help entrepreneurs unlock their potential through automation and high-speed custom software.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-3xl">🔮</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A future where software builds itself — and founders spend more time growing, not grinding.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-green-400 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-3xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
            <div className="text-gray-600 leading-relaxed space-y-2">
              <p>• Simplicity over complexity</p>
              <p>• Move fast, build smart</p>
              <p>• Trust and transparency</p>
              <p>• People over process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
