import React from "react";
import AnimatedHero from "@/components/AnimatedHero";

const Hero = () => {
  return (
    <div className="relative">
      <AnimatedHero
        title="About Cadence"
        bgImage="/minneapolis-1.jpg"
        description="Cadence Private Capital invests in lower middle market companies on behalf of our anchor investors and other partners"
      />
    </div>
  );
};

export default Hero;
