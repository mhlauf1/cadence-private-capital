import React from "react";
import AnimatedHero from "@/components/AnimatedHero";
import AreasOfFocus from "@/sections/areas-of-focus/AreasOfFocus";

const AreasOfFocusPage = () => {
  return (
    <main>
      <AnimatedHero
        title="Cadence Areas of Focus"
        bgImage="/minneapolis-2-min.png"
        description="Cadence targets opportunities in growing industries with attractive tailwinds"
      />
      <AreasOfFocus />
    </main>
  );
};

export default AreasOfFocusPage;
