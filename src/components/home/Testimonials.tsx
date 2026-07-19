"use client";

import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

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
    <section className="py-16 sm:py-24 bg-[#FFFBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#C9942A] text-sm mb-3">
            <div className="section-divider w-12" />
            <span>{t("sectionLabel")}</span>
            <div className="section-divider w-12" />
          </div>

          <h2 className="font-amiri text-3xl sm:text-4xl text-[#2C1A0E] mb-3">
            {t("heading")}
          </h2>

          <p className="text-[#7A5C3A] max-w-md mx-auto">
            {t("subtext")}
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex items-center justify-center gap-6 mb-12 p-6 bg-white rounded-2xl border border-[rgba(139,90,43,0.1)] max-w-sm mx-auto">
          <div className="text-center">
            <div className="font-amiri text-5xl text-[#C9942A]">
              {t("rating")}
            </div>

            <div className="flex items-center gap-0.5 justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-[#C9942A] text-[#C9942A]"
                />
              ))}
            </div>

            <div className="text-[#7A5C3A] text-xs mt-1">
              {t("ratingLabel")}
            </div>
          </div>

          <div className="w-px h-14 bg-[rgba(139,90,43,0.15)]" />

          <div className="text-center">
            <div className="font-amiri text-3xl text-[#2C1A0E]">
              {t("reviews")}
            </div>

            <div className="text-[#7A5C3A] text-xs mt-1">
              {t("reviewsLabel")}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((review, index) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 border border-[rgba(139,90,43,0.1)] card-hover relative"
            >
              <div className="absolute top-4 left-4 opacity-10">
                <Quote
                  size={32}
                  style={{ color: avatarColors[index] }}
                />
              </div>

              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={13}
                    className="fill-[#C9942A] text-[#C9942A]"
                  />
                ))}
              </div>

              <p className="text-[#2C1A0E] text-sm leading-relaxed mb-5 relative z-10">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(139,90,43,0.1)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-amiri text-lg flex-shrink-0"
                  style={{ backgroundColor: avatarColors[index] }}
                >
                  {review.name.charAt(0)}
                </div>

                <div>
                  <div className="text-[#2C1A0E] text-sm font-semibold">
                    {review.name}
                  </div>

                  <div className="text-[#7A5C3A] text-xs">
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}