"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Image } from "@nextui-org/react";

type AnimatedHeroProps = {
  title: string;
  bgImage: string;
  description: string;
};

const AnimatedHero = ({ title, bgImage, description }: AnimatedHeroProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-screen h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          classNames={{
            wrapper: "w-[100vw] rounded-none h-full",
            img: "object-cover rounded-none  w-[100vw] h-full",
          }}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-between px-4 md:px-20 py-16 z-20 text-white">
        <div></div>
        <div
          className={`flex flex-col items-center gap-6 md:gap-12 transition-opacity duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
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
          <h2 className="text-4xl md:text-5xl text-center tracking-tight font-semibold">
            {title}
          </h2>
        </div>
        <div className="w-full">
          <div className="w-full pb-4 flex justify-between items-center">
            <div className="flex lg:flex-[5]">
              <p
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity duration-1000 ${
                  mounted ? "opacity-100" : "opacity-0"
                }`}
              >
                {description}
              </p>
            </div>
            <div
              className={`lg:flex-[3] hidden md:flex justify-end transition-all duration-[1200ms] ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "1.75s" }}
            >
              <IoIosArrowRoundDown size={42} />
            </div>
          </div>
          <div
            className={`w-full h-[1px] bg-white origin-left transition-transform duration-[1700ms] ease ${
              mounted ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: ".5s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero;
