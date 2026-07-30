"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer } from "@/lib/animations";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function StaggerContainer({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
