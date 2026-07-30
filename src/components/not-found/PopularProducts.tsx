"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const products = [
  {
    id: 1,
    nameAr: "فولية",
    nameEn: "Peanut Brittle",
    image: "/images/products/foul.png",
  },
  {
    id: 2,
    nameAr: "ملبن",
    nameEn: "Malban",
    image: "/images/products/malban.png",
  },
  {
    id: 3,
    nameAr: "سمسمية",
    nameEn: "Sesame Brittle",
    image: "/images/products/semsmya.png",
  },
  {
    id: 4,
    nameAr: "حلاوة المولد",
    nameEn: "Mawlid Sweets",
    image: "/images/products/halawa1.png",
  },
];

export default function PopularProducts() {
  const locale = useLocale();
  const t = useTranslations("notFound");

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-[#2B2118]">
        {t("popularTitle")}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-[28px] border border-[#E8DCCB] bg-white shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden bg-[#FFF8F0]">
              <Image
                src={product.image}
                alt={locale === "ar" ? product.nameAr : product.nameEn}
                fill
                className="object-contain p-4 transition duration-500 group-hover:scale-110"
              />

              <div className="absolute left-4 top-4 rounded-full bg-[#670047] px-3 py-1 text-xs font-semibold text-white">
                Best Seller
              </div>
            </div>

            <div className="p-5">
              <h3 className="mb-5 text-lg font-bold text-[#2B2118]">
                {locale === "ar" ? product.nameAr : product.nameEn}
              </h3>

              <Link
                href={`/${locale}/products`}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#C9942A] px-5 py-3 font-semibold text-white transition hover:bg-[#B8851E]"
              >
                {locale === "ar" ? "تسوق الآن" : "Shop Now"}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
