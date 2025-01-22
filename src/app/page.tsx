import React from "react";
import AppBarComponent from "./components/AppBarComponent";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import CallToAction from "./components/CallToAction";
import FooterComponent from "./components/FooterComponent";

const Home = () => {
  return (
    <div>
      <AppBarComponent />
      <HeroSection />
      <HighlightsSection />
      <CallToAction />
      <FooterComponent />
    </div>
  );
};

export default Home;
