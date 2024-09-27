import React from "react";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { Image } from "@nextui-org/react";

const Hero = () => {
  return (
    <div className="h-[70vh] py-16 relative text-white w-full">
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
      <div className="absolute inset-0 -z-20">
        <Image
          src="/companies-bg-min.png"
          alt="Team Page Image"
          classNames={{
            wrapper: "w-[100vw] rounded-none  h-full",
            img: "object-cover rounded-none  w-[100vw] h-full",
          }}
        />
      </div>

      <div className="h-full px-4 md:px-20 flex flex-col items-center justify-center">
        <AnimatedWrapper>
          <div className="flex flex-col items-center gap-6 md:gap-12">
            <div className="h-[100px] md:h-[150px] w-[100px] md:w-[150px]">
              <Image
                src="/white-c-logo.png"
                alt="Host Image"
                classNames={{
                  wrapper: "w-full h-full",
                  img: "object-contain w-full h-full",
                }}
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Cadence Investments
            </h2>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Hero;
