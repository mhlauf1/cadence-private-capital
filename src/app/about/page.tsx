import React from "react";
import AnimatedHero from "@/components/AnimatedHero";

import AboutUs from "@/sections/about/AboutUs";

const AboutPage = () => {
  return (
    <main>
      <div>
        <AnimatedHero
          title="About Cadence"
          bgImage="/about-bg.png"
          description="Cadence Private Capital invests in lower middle market companies on behalf of our anchor investors and other partners"
        />
      </div>
      <AboutUs />
    </main>
  );
};

export default AboutPage;
