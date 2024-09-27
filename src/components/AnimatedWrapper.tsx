"use client";
import React, { useEffect, useRef, useState } from "react";

type AnimatedWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animationType?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right";
  threshold?: number;
};

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
  duration = 700,
  className = "",
  animationType = "fade-up",
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    switch (animationType) {
      case "fade-up":
        return "translate-y-4";
      case "fade-in":
        return "";
      case "slide-in-left":
        return "-translate-x-full";
      case "slide-in-right":
        return "translate-x-full";
      default:
        return "translate-y-4";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all ease-out`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : undefined,
      }}
    >
      <div className={!isVisible ? getAnimationClasses() : undefined}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedWrapper;
