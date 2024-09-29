"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[95vh] md:h-[100vh] relative w-full overflow-hidden">
      <video
        src="/cpc-lake.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 -z-20 w-full h-full object-cover"
      />
      <motion.div
        className="flex py-24 px-8 md:px-20 justify-between h-full flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.2 }}
      >
        <div>
          <h2 className="text-3xl md:text-5xl leading-[120%] font-medium text-white mb-2">
            Private Equity Partners for
          </h2>
          <h2 className="text-3xl md:text-5xl leading-[120%] font-medium text-white">
            the Lower Middle Market
          </h2>
        </div>
        <div className="h-[300px] w-[250px] md:w-[300px]">
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
