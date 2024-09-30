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
        <div className="h-[225px] md:h-[300px] w-[225px] md:w-[300px]">
          <Image
            src="/cpc-white-logo.png"
            alt="Cadence Partners Logo"
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
