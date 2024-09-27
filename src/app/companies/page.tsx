import React from "react";
import StaticHero from "@/components/StaticHero";
import Company from "@/sections/companies/Company";

const CompaniesPage = () => {
  return (
    <main>
      <StaticHero bgImage="/companies-bg-min.png" title="Cadence Investments" />
      <Company />
    </main>
  );
};

export default CompaniesPage;
