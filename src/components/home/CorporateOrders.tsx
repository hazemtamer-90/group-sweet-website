"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

import {
  Building2,
  Package,
  Users,
  Star,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const images = [
  "/images/products/semsmya.png",
  "/images/products/foul.png",
  "/images/products/malban.png",
  "/images/products/homsya.png",
];

const icons = [Package, Users, Building2, Star];

export default function CorporateOrders() {
  const t = useTranslations("corporate");
  const locale = useLocale();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-[#2C1A0E] py-20 lg:py-24">
      {/* Background */}
      <div className="pattern-bg absolute inset-0 opacity-5" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#C9942A]/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#670047]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <div>
            <Reveal direction="right" duration={0.7}>
              <div className="mb-4 inline-flex items-center gap-2 text-sm text-[#C9942A]">
                <Building2 size={16} />

                <span>{t("sectionLabel")}</span>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1} duration={0.75}>
              <h2 className="mb-5 text-4xl font-bold leading-tight text-white">
                {t("heading")}

                <br />

                <span className="text-[#E8C472]">{t("headingAccent")}</span>
              </h2>
            </Reveal>

            <Reveal direction="right" delay={0.2} duration={0.75}>
              <p className="mb-8 max-w-xl leading-8 text-[#D4B896]">
                {t("body")}
              </p>
            </Reveal>

            {/* Benefits */}
            <Stagger delay={0.1} className="mb-8 grid grid-cols-2 gap-4">
              {t.raw("benefits").map((benefit: string, index: number) => {
                const Icon = icons[index];

                return (
                  <StaggerItem key={benefit}>
                    <div className="group flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9942A]/30 hover:bg-white/10">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9942A]/20 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={18} className="text-[#C9942A]" />
                      </div>

                      <span className="text-sm text-[#E8D7BF]">{benefit}</span>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            {/* Buttons */}
            <Reveal direction="up" delay={0.25}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#C9942A] px-8 py-4 font-semibold text-[#2C1A0E] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  prefetch
                >
                  {t("ctaQuote")}

                  <ArrowIcon size={17} />
                </Link>

                <Link
                  href="https://wa.me/201000000000"
                  target="_blank"
                  className="flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20b558] hover:shadow-xl"
                  prefetch
                >
                  {t("ctaWhatsapp")}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Images */}
          <Reveal
            direction="left"
            delay={0.15}
            duration={0.9}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* First column */}
                <div className="space-y-4">
                  <div className="group relative h-52 overflow-hidden rounded-3xl">
                    <Image
                      src={images[0]}
                      alt="Semsmya"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="group relative h-36 overflow-hidden rounded-3xl">
                    <Image
                      src={images[1]}
                      alt="Foul"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Second column */}
                <div className="mt-10 space-y-4">
                  <div className="group relative h-36 overflow-hidden rounded-3xl">
                    <Image
                      src={images[2]}
                      alt="Malban"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="group relative h-52 overflow-hidden rounded-3xl">
                    <Image
                      src={images[3]}
                      alt="Homsya"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-5 right-6 rounded-3xl bg-[#C9942A] px-6 py-4 text-white shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                <div className="text-3xl font-bold">{t("badge.value")}</div>

                <div className="text-sm opacity-90">{t("badge.label")}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
