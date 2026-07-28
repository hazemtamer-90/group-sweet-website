"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { products, type Product } from "@/data/products";

export default function RecentlyViewed() {
  const locale = useLocale();
  

  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem("recent-products") || "[]");

    setItems(products.filter((product) => viewed.includes(product.slug)));
  }, []);

  if (items.length <= 1) return null;

  return (
    <section className="mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#2C1A0E]">
          {locale === "en" ? "Recently Viewed" : "شاهدتها مؤخراً"}
        </h2>

        <p className="mt-2 text-[#7A5C3A]">
          {locale === "en"
            ? "Continue where you left off."
            : "ارجع بسرعة للمنتجات التي شاهدتها."}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.slice(1).map((item) => (
          <Link
            key={item.id}
            href={`/${locale}/products/${item.slug}`}
            className="group overflow-hidden rounded-3xl border border-[#E8D7B6] bg-white transition hover:-translate-y-2 hover:shadow-xl"
            prefetch
          >
            <div className="relative h-56 bg-[#F8F2E5]">
              <Image
                src={item.image}
                alt={locale === "en" ? item.nameEn : item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="font-bold text-[#2C1A0E]">
                {locale === "en" ? item.nameEn : item.name}
              </h3>

              <p className="mt-3 text-xl font-bold text-[#670047]">
                {item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
