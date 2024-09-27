"use client";
import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import AnimatedWrapper from "@/components/AnimatedWrapper";
type MemberProps = {
  imageUrl: string;
  name: string;
  bio: string;
};

const Member = ({ imageUrl, name, bio }: MemberProps) => (
  <div className="max-w-lg md:max-w-xl flex-shrink-0">
    <Image
      height={1000}
      width={800}
      src={imageUrl}
      alt={name}
      className="w-full h-auto  rounded-md"
    />
    <h3 className="text-3xl font-semibold mt-6 mb-2">{name}</h3>
    <p className=" text-neutral-500 mb-2">Partner</p>

    {/* Accordion for bio */}
    <Accordion>
      <AccordionItem key={name} aria-label={name} title="View Bio">
        {/* Bio content */}
        <p className="leading-[170%]">{bio}</p>
      </AccordionItem>
    </Accordion>
  </div>
);

const TeamMembers = () => {
  return (
    <section className="px-6 md:px-28 py-20 md:py-28">
      <div className="flex flex-col gap-24 md:flex-row justify-center items-start">
        <div className="flex-1 w-full md:max-w-xl">
          <Member
            imageUrl="/peter-img.png"
            name="Peter Mark"
            bio="Peter has diversified experience across the investment life-cycle - including M&A, integration, and operations leadership gained in a variety of roles at Vista Outdoor. He maintains strong expertise in analyzing, executing, and operating investments, with an emphasis on post-acquisition operations and scaling. A Minneapolis native, Peter now lives in St. Louis Park, Minnesota. Peter graduated from the University of Notre Dame (B.A. Economics, Mandarin) where he was a walk-on to the Varsity hockey team."
          />
        </div>
        <div className="flex-1 w-full md:max-w-xl">
          <Member
            imageUrl="/jack-img.png"
            name="Jack Brady"
            bio="Jack has a strong M&A background gained through his experience in private equity at Stone Arch Capital and investment banking at Harris Williams. He possesses a skillset for sourcing and analyzing new investment opportunities, leading due diligence efforts on prospective investments, and working with portfolio companies on strategic initiatives and add-on acquisitions. A St. Paul, Minnesota native, Jack now lives in the North Loop of Minneapolis. Jack graduated from the University of Minnesota (B.S.B. in Finance)."
          />
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-2xl md:text-3xl font-semibold">
          See CPC&apos;s{" "}
          <Link
            href="/advisory-board"
            className="underline text-2xl md:text-3xl text-neutral-500"
          >
            Advisory Board
          </Link>{" "}
          for its deep bench of strategic advisors.
        </p>
      </div>
    </section>
  );
};

export default TeamMembers;
