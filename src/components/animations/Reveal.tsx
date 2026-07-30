"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { reveal, scaleIn } from "@/lib/animations";

type Props = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  scale?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  direction = "up",
  distance = 60,
  delay = 0,
  duration = 0.7,
  once = true,
  scale = false,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      variants={scale ? scaleIn : reveal(direction, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        delay,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
}
