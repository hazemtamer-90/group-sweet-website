"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CheckCircle2, Factory, Leaf, Award } from "lucide-react";

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
    <section className="bg-[#FAF5E9] py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        {/* Images */}
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-56 overflow-hidden rounded-3xl">
                <Image
                  src={images[0]}
                  alt="Malban"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-40 overflow-hidden rounded-3xl">
                <Image
                  src={images[1]}
                  alt="Semsmya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="relative h-40 overflow-hidden rounded-3xl">
                <Image
                  src={images[2]}
                  alt="Foul"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-56 overflow-hidden rounded-3xl">
                <Image
                  src={images[3]}
                  alt="Homsya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute right-4 top-4 rounded-3xl border border-[rgba(139,90,43,0.15)] bg-white p-5 text-center shadow-xl">
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
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <div className="mb-4 inline-flex items-center gap-2 text-sm text-[#C9942A]">
            <Factory size={16} />
            <span>{t("sectionLabel")}</span>
          </div>

          <div className="mb-6">
            <Image
              src="/images/logo/logo.png"
              alt="Group Sweet"
              width={180}
              height={70}
              className="h-16 w-auto object-contain"
            />
          </div>

          <h2 className="mb-5 text-4xl font-bold leading-tight text-[#2C1A0E]">
            {t("heading")}
            <br />
            <span className="text-[#670047]">{t("headingAccent")}</span>
          </h2>

          <p className="mb-4 max-w-xl leading-8 text-[#7A5C3A]">{t("body1")}</p>

          <p className="mb-8 max-w-xl leading-8 text-[#7A5C3A]">{t("body2")}</p>

          <div className="mb-10 grid grid-cols-2 gap-x-5 gap-y-4">
            {t.raw("highlights").map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#4A6741]" />

                <span className="text-sm text-[#2C1A0E]">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 border-t border-[rgba(139,90,43,0.15)] pt-6">
            {t.raw("badges").map((badge: { label: string }, index: number) => {
              const Icon = badgeIcons[index];
              const color = badgeColors[index];

              return (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${color}20`,
                    }}
                  >
                    <Icon size={15} style={{ color }} />
                  </div>

                  <span className="text-sm text-[#7A5C3A]">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
