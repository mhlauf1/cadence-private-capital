"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";

type AnimatedHeroProps = {
  title: string;
  bgImage: string;
  description: string;
  teampage?: boolean;
};

const AnimatedHero = ({
  title,
  bgImage,
  description,
  teampage,
}: AnimatedHeroProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`${
        teampage ? "h-[65vh]" : "h-[90vh]"
      } py-16 text-white w-full relative overflow-hidden`}
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/40 -z-10"></div>
      <Image
        src={bgImage}
        alt={title}
        fill
        className="-z-20"
        objectFit="cover"
      />
      <div className="h-full w-full px-4 md:px-20 flex flex-col items-center justify-between mt-auto">
        <div></div>
        <div
          className={`flex flex-col  items-center gap-6 md:gap-12 transition-opacity duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
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
          <h2 className="text-4xl md:text-5xl text-center font-semibold">
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
            className={`w-full h-[1px] bg-white origin-left  transition-transform duration-[1700ms] ease ${
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
