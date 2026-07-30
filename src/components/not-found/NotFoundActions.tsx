"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Home, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFoundActions() {
  const t = useTranslations("notFound");
  const locale = useLocale();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      <Link
        href={`/${locale}`}
        className="flex items-center gap-2 rounded-full bg-[#670047] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#520038] hover:shadow-xl"
      >
        <Home size={20} />
        {t("home")}
      </Link>

      <Link
        href={`/${locale}/products`}
        className="flex items-center gap-2 rounded-full border-2 border-[#C9942A] bg-white px-8 py-4 font-semibold text-[#C9942A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9942A] hover:text-white"
      >
        <ShoppingBag size={20} />
        {t("products")}
      </Link>

      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 rounded-full border border-[#DDD] bg-white px-8 py-4 font-semibold text-[#555] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F8F8]"
      >
        <ArrowIcon size={20} />
        {t("back")}
      </button>
    </motion.div>
  );
}
