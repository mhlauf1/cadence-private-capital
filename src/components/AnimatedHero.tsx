"use client";
import React from "react";
import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

type AnimatedHeroProps = {
  title: string;
  bgImage: string;
  description: string;
};

const AnimatedHero = ({ title, bgImage, description }: AnimatedHeroProps) => {
  return (
    <div className="h-[90vh] py-16 text-white w-full relative overflow-hidden">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/40 -z-10"></div>
      <Image
        src={bgImage}
        alt={title}
        fill
        className="-z-20"
        objectFit="cover"
      />
      {/* <AnimatePresence> */}
      <motion.div
        className="h-full w-full px-4 md:px-20 flex flex-col items-center justify-between mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div></div>
        <motion.div
          className="flex flex-col items-center gap-6 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
            {title}
          </h2>
        </motion.div>
        <div className="w-full">
          <div className="w-full pb-4 flex justify-between items-center">
            <motion.div
              className="flex lg:flex-[5]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl">{description}</p>
            </motion.div>
            <motion.div
              className="lg:flex-[3] hidden md:flex justify-end"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.75 }}
            >
              <IoIosArrowRoundDown size={42} />
            </motion.div>
          </div>
          <motion.div
            className="w-full h-[1px] bg-white origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.7, delay: 0.5 }}
          ></motion.div>
        </div>
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
};

export default AnimatedHero;
