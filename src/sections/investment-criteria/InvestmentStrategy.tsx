import React from "react";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import AnimatedWrapper from "@/components/AnimatedWrapper";

const Item = ({ text, delay }: { text: string; delay?: number }) => (
  <AnimatedWrapper delay={delay}>
    <div className="flex flex-row items-center gap-2">
      <IoIosCheckmark size={36} color="#666666" />
      <p className="text-neutral-700 lg:w-[18ch] text-lg">{text}</p>
    </div>
  </AnimatedWrapper>
);

const InvestmentStrategy = () => {
  return (
    <section className="px-4 md:px-20 max-w-screen-2xl mx-auto pb-20 pt-24  lg:pb-28 lg:pt-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-12">
        <div>
          <AnimatedWrapper delay={200}>
            <span className="uppercase text-sm tracking-wide text-neutral-500">
              Investment Criteria
            </span>
          </AnimatedWrapper>
          <AnimatedWrapper delay={300}>
            <h2 className="mt-4 text-neutral-700 text-2xl sm:text-3xl  md:text-4xl tracking-tight">
              Our Investment Strategy
            </h2>
          </AnimatedWrapper>

          <div className="flex flex-col sm:flex-row mt-8 md:mt-12 gap-6 md:gap-8">
            <div className="flex flex-col gap-6 sm:gap-12">
              <Item delay={400} text="Profitable Businesses" />
              <Item
                delay={400}
                text="Lower Middle Market ($1M - $6M in EBITDA)"
              />
              <Item delay={400} text="Strong Management Teams" />
            </div>
            <div className="flex flex-col gap-6 sm:gap-12">
              <Item delay={400} text="United States Based" />
              <Item delay={400} text="Understandable Business Models" />
              <Item delay={400} text="Opportunity for Add-On Acquisitions" />
            </div>
          </div>
        </div>
        <AnimatedWrapper delay={300}>
          <div className="h-auto flex flex-1 w-auto">
            <Image
              src="/minneapolis-3.png"
              alt="Minneapolis"
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
            />
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default InvestmentStrategy;
