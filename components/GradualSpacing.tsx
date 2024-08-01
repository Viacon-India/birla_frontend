"use client";

import React from "react";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 3,
  delayMultiple = 0.06,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const ref = React.createRef<HTMLDivElement>();
  const isInView = useInView(ref, { once: false }); // Set once to false to trigger animation every time

  return (
    <div ref={ref} className="flex flex-wrap">
      {isInView && (
        <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.h1
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={framerProps}
              transition={{ duration, delay: i * delayMultiple }}
              className={cn("drop-shadow-sm ", className)}
              
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.h1>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}