"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[95vh] md:h-[100vh] relative w-full overflow-hidden">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/30 -z-10"></div>
      <Image
        src="/home-bg-main.png"
        alt="Cadence Private Capital home page"
        fill
        className="-z-20"
        objectFit="cover"
      />
      <motion.div
        className="flex pb-36 pt-24 md:pb-24 md:pt-24 px-4 md:px-20 md:justify-between h-full items-center md:items-start flex-col-reverse md:flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="mt-[12vh] md:mt-0">
          <h1
            style={{ lineHeight: "120%" }}
            className="text-2xl md:text-4xl lg:text-5xl w-full md:w-[60%] font-medium text-white mb-2"
          >
            Private Equity Partners for the Lower Middle Market
          </h1>
        </div>
        <div className="w-[175px] relative h-[175px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
          <Image
            src="/cpc-white-logo.png"
            alt="Cadence Partners Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 250px"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
