"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type StaticHeroProps = {
  title: string;
  bgImage: string;
};

const StaticHero = ({ title, bgImage }: StaticHeroProps) => {
  return (
    <div className="h-[65vh] py-16 relative text-white w-full">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/50 -z-10"></div>
      <Image
        src={bgImage}
        alt={title}
        fill
        className="-z-20"
        objectFit="cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.2 }}
        className="h-full px-4 md:px-20 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col w-full items-center gap-6 md:gap-12">
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
      </motion.div>
    </div>
  );
};

export default StaticHero;
