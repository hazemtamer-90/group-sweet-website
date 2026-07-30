"use client";

import { motion } from "framer-motion";
import { Candy } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFoundHero() {
  const t = useTranslations("notFound");

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-[40px] border border-[#E8DCCB] bg-white px-8 py-16 shadow-[0_25px_80px_rgba(0,0,0,.08)] md:px-16 md:py-20"
    >
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#C9942A]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#670047]/10 blur-[140px]" />

      <div className="relative z-10 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#E8DCCB] bg-[#FFF8F0] px-5 py-2 text-sm font-medium text-[#670047]">
          <Candy size={16} className="text-[#C9942A]" />
          {t("badge")}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <span className="bg-gradient-to-b from-[#670047] to-[#A02C63] bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
            4
          </span>

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#C9942A] to-[#E6B64B] shadow-xl md:h-32 md:w-32">
            <Candy className="h-14 w-14 text-white md:h-16 md:w-16" />
          </div>

          <span className="bg-gradient-to-b from-[#C9942A] to-[#F0B93E] bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
            4
          </span>
        </div>

        <h1 className="mt-10 text-4xl font-extrabold leading-tight text-[#2B2118] md:text-5xl">
          {t("title")}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B5C4F]">
          {t("description")}
        </p>

        <p className="mt-2 text-[#8B7A6A]">{t("description2")}</p>
      </div>
    </motion.section>
  );
}
