"use client";

import { useTranslations } from "next-intl";
import {
  Leaf,
  ShieldCheck,
  Gift,
  TrendingDown,
  Zap,
  Award,
} from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const icons = [Leaf, ShieldCheck, Gift, TrendingDown, Zap, Award];

const colors = [
  "#4A6741",
  "#670047",
  "#C9942A",
  "#7A5C3A",
  "#4A6741",
  "#670047",
];

export default function WhyChooseUs() {
  const t = useTranslations("whyUs");

  const reasons = t.raw("reasons") as {
    title: string;
    desc: string;
  }[];

  return (
    <section className="overflow-hidden bg-[#FAF5E9] py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}

        <Reveal direction="up" duration={0.7}>
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-3">
              <div className="h-px w-12 bg-[#D4B896]" />

              <span className="text-sm text-[#C9942A]">
                {t("sectionLabel")}
              </span>

              <div className="h-px w-12 bg-[#D4B896]" />
            </div>

            <h2 className="mb-4 text-4xl font-bold text-[#2C1A0E]">
              {t("heading")}
            </h2>

            <p className="mx-auto max-w-xl leading-8 text-[#7A5C3A]">
              {t("subtext")}
            </p>
          </div>
        </Reveal>

        {/* Cards */}

        <Stagger
          delay={0.1}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((item, index) => {
            const Icon = icons[index];
            const color = colors[index];

            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-3xl border border-[rgba(139,90,43,0.10)] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110"
                    style={{
                      backgroundColor: `${color}15`,
                    }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-[#2C1A0E]">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-[#7A5C3A]">{item.desc}</p>

                  <div
                    className="mt-5 h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-16"
                    style={{
                      backgroundColor: color,
                    }}
                  />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
