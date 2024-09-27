import React from "react";
import StaticHero from "@/components/StaticHero";
import TeamMembers from "@/sections/team/TeamMembers";

const TeamPage = () => {
  return (
    <main className="relative">
      <StaticHero bgImage="/team-bg-min.png" title="Meet Cadence" />
      <TeamMembers />
    </main>
  );
};

export default TeamPage;
