"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface SplashScreenProps {
  show: boolean;
}

export default function SplashScreen({ show }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAF5E9]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
            },
          }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{
                y: 120,
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/images/logo/logo.png"
                alt="Group Sweet"
                width={250}
                height={140}
                priority
                className="h-auto w-auto object-contain"
              />
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.6,
              }}
              className="mt-6 text-lg tracking-[0.35em] text-[#C9942A]"
            >
              Since 1927
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 90 }}
              transition={{
                delay: 0.9,
                duration: 0.5,
              }}
              className="mt-3 h-[2px] rounded-full bg-[#C9942A]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
