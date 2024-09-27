import React from "react";
import AnimatedHero from "@/components/AnimatedHero";

const Hero = () => {
  return (
    <div className="relative">
      <AnimatedHero
        title="Cadence Investment Criteria"
        bgImage="/investment-bg.jpg"
        description="Cadence provides flexible capital to founders and management teams who lead profitable businesses"
      />
    </div>
  );
};

export default Hero;
