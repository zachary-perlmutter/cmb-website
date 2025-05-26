import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import MissionSection from "../components/MissionSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="main-content" role="main">
        <Hero />
        <ServicesPreview />
        <MissionSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
