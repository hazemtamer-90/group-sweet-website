"use client";

import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

import Reveal from "@/components/motion/Reveal";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const avatarColors = [
  "#670047",
  "#4A6741",
  "#C9942A",
  "#7A5C3A",
  "#670047",
  "#4A6741",
];

type Review = {
  name: string;
  role: string;
  text: string;
};

export function Testimonials() {
  const t = useTranslations("testimonials");

  const items = t.raw("items") as Review[];

  return (
    <section className="overflow-hidden bg-[#FFFBF0] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <Reveal direction="up" duration={0.7}>
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-sm text-[#C9942A]">
              <div className="section-divider w-12" />

              <span>{t("sectionLabel")}</span>

              <div className="section-divider w-12" />
            </div>

            <h2 className="font-amiri mb-3 text-3xl text-[#2C1A0E] sm:text-4xl">
              {t("heading")}
            </h2>

            <p className="mx-auto max-w-md text-[#7A5C3A]">
              {t("subtext")}
            </p>
          </div>
        </Reveal>

        {/* Rating Summary */}
        <Reveal direction="up" delay={0.15} duration={0.75}>
          <div className="mx-auto mb-12 flex max-w-sm items-center justify-center gap-6 rounded-2xl border border-[rgba(139,90,43,0.1)] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-center">
              <div className="font-amiri text-5xl text-[#C9942A]">
                {t("rating")}
              </div>

              <div className="mt-1 flex items-center justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#C9942A] text-[#C9942A]"
                  />
                ))}
              </div>

              <div className="mt-1 text-xs text-[#7A5C3A]">
                {t("ratingLabel")}
              </div>
            </div>

            <div className="h-14 w-px bg-[rgba(139,90,43,0.15)]" />

            <div className="text-center">
              <div className="font-amiri text-3xl text-[#2C1A0E]">
                {t("reviews")}
              </div>

              <div className="mt-1 text-xs text-[#7A5C3A]">
                {t("reviewsLabel")}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Testimonials */}
        <Stagger
          delay={0.1}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((review, index) => (
            <StaggerItem key={review.name}>
              <div className="group relative h-full rounded-2xl border border-[rgba(139,90,43,0.1)] bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                {/* Quote */}
                <div className="absolute left-4 top-4 opacity-10 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20">
                  <Quote
                    size={32}
                    style={{
                      color: avatarColors[index],
                    }}
                  />
                </div>

                {/* Stars */}
                <div className="mb-4 flex items-center gap-0.5">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={13}
                      className="fill-[#C9942A] text-[#C9942A]"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="relative z-10 mb-5 text-sm leading-relaxed text-[#2C1A0E]">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Customer */}
                <div className="flex items-center gap-3 border-t border-[rgba(139,90,43,0.1)] pt-4">
                  <div
                    className="font-amiri flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg text-white transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: avatarColors[index],
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[#2C1A0E]">
                      {review.name}
                    </div>

                    <div className="text-xs text-[#7A5C3A]">
                      {review.role}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}