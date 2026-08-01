"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import Reveal from "@/components/motion/Reveal";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="overflow-hidden bg-[#FAF5E9] pb-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal direction="up" duration={0.85}>
          <div className="group relative overflow-hidden rounded-3xl border border-[#E7D7AE] bg-[#EFE4C8] px-6 py-14 text-center transition-all duration-700 hover:shadow-[0_20px_60px_rgba(44,26,14,0.10)]">
            {/* Background Pattern */}
            <div className="pattern-bg absolute inset-0 opacity-10" />

            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#C9942A]/10 blur-3xl transition-transform duration-1000 group-hover:scale-125" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-[#670047]/10 blur-3xl transition-transform duration-1000 group-hover:scale-125" />

            <div className="relative z-10">
              {/* Heading */}
              <Reveal direction="down" delay={0.1} duration={0.65}>
                <h2 className="mb-4 text-4xl font-bold text-[#2C1A0E] sm:text-5xl">
                  {t("heading")}
                </h2>
              </Reveal>

              {/* Description */}
              <Reveal direction="up" delay={0.2} duration={0.65}>
                <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-[#7A5C3A] sm:text-lg">
                  {t("body")}
                </p>
              </Reveal>

              {/* Button */}
              <Reveal direction="up" delay={0.3} duration={0.65}>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-[#C9942A] px-10 py-4 text-lg font-semibold text-[#2C1A0E] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#d8a52b] hover:shadow-xl"
                  prefetch
                >
                  {t("button")}
                </Link>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
