"use client";
import React, { useEffect, useRef } from "react";

type AnimatedWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animationType?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right";
  autoPlay?: boolean;
};

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
  duration = 700,
  className = "",
  animationType = "fade-up",
  autoPlay = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-in");
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: autoPlay ? 0.1 : 0,
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
  }, [delay]);

  const getAnimationClasses = () => {
    switch (animationType) {
      case "fade-up":
        return "opacity-0 translate-y-4";
      case "fade-in":
        return "opacity-0";
      case "slide-in-left":
        return "opacity-0 -translate-x-4";
      case "slide-in-right":
        return "opacity-0 translate-x-4";
      default:
        return "opacity-0 translate-y-4";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClasses()} transition-all ease-out`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
