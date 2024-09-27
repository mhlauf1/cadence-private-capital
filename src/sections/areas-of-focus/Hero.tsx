import React from "react";
import AnimatedHero from "@/components/AnimatedHero";

const Hero = () => {
  return (
    <div className="relative">
      <AnimatedHero
        title="Cadence Areas of Focus"
        bgImage="/minneapolis-2.jpg"
        description="Cadence targets opportunities in growing industries with attractive tailwinds"
      />
    </div>
  );
};

export default Hero;
