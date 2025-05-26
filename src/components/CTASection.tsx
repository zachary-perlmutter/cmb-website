
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-400 to-yellow-400">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Want to find your #1 automation opportunity?
        </h2>
        <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
          Take our 60-second audit and discover where you can save hours every week.
        </p>
        
        <Link
          to="/audit"
          className="inline-block bg-white text-orange-500 px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Take the 60-Second Audit
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
