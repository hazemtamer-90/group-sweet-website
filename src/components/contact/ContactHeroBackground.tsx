"use client";

import { motion } from "framer-motion";

export default function ContactHeroBackground() {
  return (
    <>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06] pattern-bg" />

      {/* Gold Glow */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-[#C9942A]/20 blur-3xl"
      />
      
      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-28 bottom-0 h-[380px] w-[380px] rounded-full bg-[#670047]/20 blur-3xl"
      />
        
      {/* Circle 1 */}
      <motion.div
        animate={{
          rotate: 360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute left-[12%] top-[18%] h-20 w-20 rounded-full border border-[#C9942A]/20"
      />
      
      {/* Circle 2 */}
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: {
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute left-[8%] bottom-[12%] h-28 w-28 rounded-full border border-[#C9942A]/15"
      />
      
      {/* Circle 3 */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] bottom-[18%] h-10 w-10 rounded-full border border-[#D4B896]/20"
      />

      {/* Square */}
      <motion.div
        animate={{
          rotate: -360,
          x: [0, 25, 0],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
          x: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute right-[15%] top-[28%] h-14 w-14 rounded-xl border border-[#D4B896]/15"
      />

      {/* Small Square */}
      <motion.div
        animate={{
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[24%] top-[10%] h-8 w-8 rounded-xl border border-[#670047]/20"
      />

      {/* Diamond */}
      <motion.div
        animate={{
          rotate: [45, 405],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[28%] bottom-[12%] h-8 w-8 border border-[#C9942A]/20"
      />

      {/* Gold Dot */}
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[70%] top-[20%] h-3 w-3 rounded-full bg-[#C9942A]"
      />

      {/* Purple Dot */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [1, 0.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-[28%] bottom-[22%] h-4 w-4 rounded-full bg-[#670047]"
      />

      {/* Gold Dot 2 */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-[38%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#C9942A]"
      />

      {/* Purple Dot 2 */}
      <motion.div
        animate={{
          x: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-[48%] bottom-[18%] h-3 w-3 rounded-full bg-[#670047]"
      />

      {/* Tiny Gold Dot */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute right-[18%] top-[42%] h-2 w-2 rounded-full bg-[#D8A62B]"
      />
    </>
  );
}
