import { Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const reveal = (
  direction: "up" | "down" | "left" | "right" = "up",
  distance = 60
): Variants => {
  const hidden = {
    opacity: 0,
    x:
      direction === "left"
        ? -distance
        : direction === "right"
        ? distance
        : 0,
    y:
      direction === "up"
        ? distance
        : direction === "down"
        ? -distance
        : 0,
  };

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE,
      },
    },
  };
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};