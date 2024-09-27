import React from "react";
import AnimatedHero from "@/components/AnimatedHero";

import InvestmentStrategy from "@/sections/investment-criteria/InvestmentStrategy";

const InvestmentCriteriaPage = () => {
  return (
    <main className="relavtive">
      <AnimatedHero
        title="Cadence Investment Criteria"
        bgImage="/investment-bg.jpg"
        description="Cadence provides flexible capital to founders and management teams who lead profitable businesses"
      />
      <InvestmentStrategy />
    </main>
  );
};

export default InvestmentCriteriaPage;
