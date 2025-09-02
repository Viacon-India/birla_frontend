"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 0.07,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const ref = React.createRef<HTMLDivElement>();
  const isInView = useInView(ref, { once: false }); // Set once to false to trigger animation every time

  const typingVariant = {
    initial: { opacity: 0 },
    animate: (i: any) => ({
      opacity: 1,
      transition: {
        delay: i * duration, // Delay each character's animation by duration seconds
      },
    }),
  };

  return (
    <div ref={ref} className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={typingVariant}
          initial="initial"
          animate={isInView ? "animate" : "initial"} // Trigger animation when in view
          custom={i}
          className={cn(
            "lowercase",
            className,
          )}
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.span>
      ))}
    </div>
  );
}