
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import MissionSection from '../components/MissionSection';
import CTASection from '../components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesPreview />
      <MissionSection />
      <CTASection />
    </div>
  );
};

export default Index;
