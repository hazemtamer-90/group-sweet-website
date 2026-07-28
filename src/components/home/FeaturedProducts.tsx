"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  const t = useTranslations("featured");

  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-20 bg-[#FFFBF0]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex items-end justify-between mb-12">

          <div>

            <div className="flex items-center gap-2 text-[#C9942A] text-sm mb-3">
              <span className="w-12 h-px bg-[#C9942A]" />
              <span>{t("sectionLabel")}</span>
            </div>

            <h2 className="text-4xl font-bold text-[#2C1A0E]">
              {t("heading")}
            </h2>

          </div>

          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-[#670047] font-semibold hover:gap-3 transition-all"
            prefetch
          >
            {t("viewAll")} ←
          </Link>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">

          <Link
            href="/products"
            className="md:hidden bg-[#670047] hover:bg-[#7A0052] text-white px-8 py-3 rounded-full font-semibold transition"
            prefetch
          >
            {t("viewAllMobile")}
          </Link>

        </div>

      </div>
    </section>
  );
}