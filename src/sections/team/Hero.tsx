import React from "react";
import Image from "next/image";
import AnimatedWrapper from "@/components/AnimatedWrapper";

const Hero = () => {
  return (
    <div className="h-[65vh] py-16 relative text-white w-full">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/50 -z-10"></div>
      <Image
        src="/team-bg-min.png"
        alt="Team Page Image"
        fill
        className="-z-20"
        objectFit="cover"
      />
      <div className="h-full px-4 md:px-20 flex flex-col items-center justify-center">
        <AnimatedWrapper>
          <div className="flex flex-col items-center gap-6 md:gap-12">
            <div className="h-[100px] md:h-[150px] w-[100px] md:w-[150px]">
              <Image
                src="/white-c-logo.png"
                alt="Host Image"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold">Meet Cadence</h2>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Hero;
