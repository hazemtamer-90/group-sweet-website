"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="bg-[#FAF5E9] pb-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-[#E7D7AE] bg-[#EFE4C8] px-6 py-14 text-center">
          <div className="absolute inset-0 opacity-10 pattern-bg" />

          <div className="relative z-10">
            <h2 className="mb-4 text-5xl font-bold text-[#2C1A0E]">
              {t("heading")}
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#7A5C3A]">
              {t("body")}
            </p>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-[#C9942A] px-10 py-4 text-lg font-semibold text-[#2C1A0E] transition hover:scale-105 hover:bg-[#d8a52b]"
              prefetch
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
