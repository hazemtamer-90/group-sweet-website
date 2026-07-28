"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Product } from "@/data/products";

interface Props {
  products: Product[];
  addToCart: (product: Product, quantity: number, weight: string) => void;
}

export default function RelatedProducts({ products, addToCart }: Props) {
  const locale = useLocale();

  const t = useTranslations("productDetails");
  const misc = useTranslations("misc");

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
          <div
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-[#E8D7B6] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <Link href={`/${locale}/products/${item.slug}`} prefetch>
              <div className="relative h-64 overflow-hidden bg-[#F8F2E5]">
                <Image
                  src={item.image}
                  alt={locale === "en" ? item.nameEn : item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </Link>

            <div className="p-5">
              <span className="text-sm text-[#C9942A]">
                {locale === "en" ? item.categoryEn : item.category}
              </span>

              <Link href={`/${locale}/products/${item.slug}`} prefetch>
                <h3 className="mt-2 line-clamp-2 text-lg font-bold text-[#2C1A0E] transition group-hover:text-[#670047]">
                  {locale === "en" ? item.nameEn : item.name}
                </h3>
              </Link>

              <div className="mt-3 flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    className="fill-[#C9942A] text-[#C9942A]"
                  />
                ))}

                <span className="ms-2 text-sm text-[#7A5C3A]">
                  {item.rating}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <span className="text-2xl font-bold text-[#670047]">
                  {item.price}
                </span>

                <span className="text-sm text-[#7A5C3A]">{misc("egp")}</span>
              </div>

              <button
                onClick={() =>
                  addToCart(
                    {
                      ...item,
                      price: item.price,
                    },
                    1,
                    "1",
                  )
                }
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#670047] py-3 font-semibold text-white transition hover:bg-[#7D0056]"
              >
                <ShoppingCart size={18} />

                {t("addToCart")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
