"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function AppPreloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("group-sweet-splash");

    if (!hasSeenSplash) {
      setVisible(true);

      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        sessionStorage.setItem("group-sweet-splash", "true");
        setVisible(false);
      }, 2600);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#FAF5E9]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              <Image
                src="/images/logo/logo.png"
                alt="Group Sweet"
                width={180}
                height={180}
                priority
                unoptimized
              />
            </motion.div>

            <motion.p
              className="mt-5 text-sm font-medium tracking-[0.45em] text-[#670047]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
            >
              SINCE 1927
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
