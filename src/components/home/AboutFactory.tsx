"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CheckCircle2, Factory, Leaf, Award } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const images = [
  "/images/products/malban.png",
  "/images/products/semsmya.png",
  "/images/products/foul.png",
  "/images/products/homsya.png",
];

const badgeIcons = [Leaf, CheckCircle2, Award];
const badgeColors = ["#4A6741", "#670047", "#C9942A"];

export default function AboutFactory() {
  const t = useTranslations("about");

  return (
    <section className="overflow-hidden bg-[#FAF5E9] py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        {/* Images */}
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <Reveal direction="right" duration={0.75}>
                <div className="group relative h-56 overflow-hidden rounded-3xl">
                  <Image
                    src={images[0]}
                    alt="Malban"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.15} duration={0.75}>
                <div className="group relative h-40 overflow-hidden rounded-3xl">
                  <Image
                    src={images[1]}
                    alt="Semsmya"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Column */}
            <div className="mt-8 space-y-4">
              <Reveal direction="down" delay={0.1} duration={0.75}>
                <div className="group relative h-40 overflow-hidden rounded-3xl">
                  <Image
                    src={images[2]}
                    alt="Foul"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.25} duration={0.75}>
                <div className="group relative h-56 overflow-hidden rounded-3xl">
                  <Image
                    src={images[3]}
                    alt="Homsya"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Experience Badge */}
          <Reveal
            direction="down"
            delay={0.4}
            duration={0.65}
            className="absolute right-4 top-4 z-20"
          >
            <div className="rounded-3xl border border-[rgba(139,90,43,0.15)] bg-white p-5 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#C9942A]">
                <Award size={18} className="text-white" />
              </div>

              <div className="text-3xl font-bold leading-none text-[#670047]">
                {t("experienceBadge.value")}
              </div>

              <div className="mx-auto mt-1 max-w-[90px] text-center text-[11px] leading-3 text-[#7A5C3A]">
                {t("experienceBadge.label")}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <Reveal direction="left" duration={0.65}>
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-[#C9942A]">
              <Factory size={16} />
              <span>{t("sectionLabel")}</span>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.08} duration={0.7}>
            <div className="mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="Group Sweet"
                width={180}
                height={70}
                className="h-16 w-auto object-contain"
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} duration={0.75}>
            <h2 className="mb-5 text-4xl font-bold leading-tight text-[#2C1A0E]">
              {t("heading")}

              <br />

              <span className="text-[#670047]">{t("headingAccent")}</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2} duration={0.7}>
            <p className="mb-4 max-w-xl leading-8 text-[#7A5C3A]">
              {t("body1")}
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.25} duration={0.7}>
            <p className="mb-8 max-w-xl leading-8 text-[#7A5C3A]">
              {t("body2")}
            </p>
          </Reveal>

          {/* Highlights */}
          <Stagger
            delay={0.08}
            className="mb-10 grid grid-cols-2 gap-x-5 gap-y-4"
          >
            {t.raw("highlights").map((item: string) => (
              <StaggerItem key={item}>
                <div className="group flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[#4A6741] transition-transform duration-300 group-hover:scale-125"
                  />

                  <span className="text-sm text-[#2C1A0E]">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Badges */}
          <Stagger
            delay={0.1}
            className="flex flex-wrap items-center gap-6 border-t border-[rgba(139,90,43,0.15)] pt-6"
          >
            {t.raw("badges").map((badge: { label: string }, index: number) => {
              const Icon = badgeIcons[index];
              const color = badgeColors[index];

              return (
                <StaggerItem key={badge.label}>
                  <div className="group flex items-center gap-2">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${color}20`,
                      }}
                    >
                      <Icon size={15} style={{ color }} />
                    </div>

                    <span className="text-sm text-[#7A5C3A]">
                      {badge.label}
                    </span>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
