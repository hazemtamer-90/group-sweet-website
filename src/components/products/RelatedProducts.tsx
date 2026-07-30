"use client";

import { useLocale, useTranslations } from "next-intl";

import { Product } from "@/data/products";
import ProductCard from "@/components/home/ProductCard";

interface Props {
  products: Product[];
}

export default function RelatedProducts({ products }: Props) {
  const locale = useLocale();
  const t = useTranslations("productDetails");

  return (
    <section className="mt-20">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#2C1A0E]">
            {t("relatedProducts")}
          </h2>

          <p className="mt-2 text-[#7A5C3A]">
            {locale === "en"
              ? "You may also like"
              : "منتجات من نفس القسم قد تعجبك"}
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
