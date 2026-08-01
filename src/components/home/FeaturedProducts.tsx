"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";

import Reveal from "@/components/motion/Reveal";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

export default function FeaturedProducts() {
  const t = useTranslations("featured");

  const featuredProducts = products.slice(0, 8);

  return (
    <section className="overflow-hidden bg-[#FFFBF0] py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-12 flex items-end justify-between">
          <Reveal direction="right" duration={0.7}>
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm text-[#C9942A]">
                <span className="h-px w-12 bg-[#C9942A]" />

                <span>{t("sectionLabel")}</span>
              </div>

              <h2 className="text-4xl font-bold text-[#2C1A0E]">
                {t("heading")}
              </h2>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} duration={0.7}>
            <Link
              href="/products"
              className="hidden items-center gap-2 font-semibold text-[#670047] transition-all duration-300 hover:gap-3 md:flex"
              prefetch
            >
              {t("viewAll")} ←
            </Link>
          </Reveal>
        </div>

        {/* Products */}
        <Stagger
          delay={0.08}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4"
        >
          {featuredProducts.map((product) => (
            <StaggerItem key={product.id}>
              <div className="h-full">
                <ProductCard product={product} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Mobile View All */}
        <Reveal direction="up" delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="rounded-full bg-[#670047] px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7A0052] hover:shadow-lg md:hidden"
              prefetch
            >
              {t("viewAllMobile")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
