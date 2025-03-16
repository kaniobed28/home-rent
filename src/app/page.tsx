import React from "react";
import AppBarComponent from "./components/AppBarComponent";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import CallToAction from "./components/CallToAction";

const Home = () => {
  return (
    <div>
      <AppBarComponent />
      <HeroSection />
      <HighlightsSection />
      <CallToAction />
      
    </div>
  );
};

export default Home;
