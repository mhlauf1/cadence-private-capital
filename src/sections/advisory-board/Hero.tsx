import React from "react";
import AnimatedHero from "@/components/AnimatedHero";

const Hero = () => {
  return (
    <div className="relative">
      <AnimatedHero
        title="CPC Advisory Board"
        bgImage="/advisory-bg-min.png"
        description="CPC's advisors bring a wealth of knowledge and experience to its strategies and investments"
      />
    </div>
  );
};

export default Hero;
