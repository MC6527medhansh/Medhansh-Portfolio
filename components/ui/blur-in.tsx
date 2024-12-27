"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, className, variant, duration = 1 }: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1,    // Trigger animation when 10% of the element is visible
  });

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
        className,
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
