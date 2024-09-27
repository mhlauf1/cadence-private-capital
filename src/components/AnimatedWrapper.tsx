"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type AnimatedWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animationType?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right";
};

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  animationType = "fade-up",
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: animationType === "fade-up" ? 20 : 0,
      x:
        animationType === "slide-in-left"
          ? -20
          : animationType === "slide-in-right"
          ? 20
          : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay / 1000, // Convert ms to seconds
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
