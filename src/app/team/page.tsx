import React from "react";
import StaticHero from "@/components/StaticHero";
import TeamMembers from "@/sections/team/TeamMembers";

const TeamPage = () => {
  return (
    <main className="relative">
      <StaticHero bgImage="/team-bg-min.webp" title="Meet Cadence" />
      <TeamMembers />
    </main>
  );
};

export default TeamPage;
