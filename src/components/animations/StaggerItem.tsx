"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { reveal } from "@/lib/animations";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function StaggerItem({
  children,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      variants={reveal("up", 40)}
    >
      {children}
    </motion.div>
  );
}