"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay,
}: LetterPullupProps) {
  const letters = words.split("");
  const ref = React.createRef<HTMLDivElement>();
  const isInView = useInView(ref, { once: false }); // Set once to false to trigger animation every time

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay? delay : 0.07), // By default, delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div ref={ref} className="flex">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isInView? "animate" : "initial"} // Trigger animation when in view
          custom={i}
          className={cn(
            "",
            className,
          )}
        >
          {letter === " "? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}