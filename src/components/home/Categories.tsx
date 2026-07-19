"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const categories = [
  {
    image: "/images/products/semsmya.png",
    href: "/products",
  },
  {
    image: "/images/products/homsya.png",
    href: "/products",
  },
  {
    image: "/images/products/malban.png",
    href: "/products",
  },
  {
    image: "/images/products/foul.png",
    href: "/products",
  },
  {
    image: "/images/products/halawa1.png",
    href: "/corporate",
  },
];

export default function Categories() {
  const t = useTranslations("categories");

  return (
    <section className="bg-[#FBF8F2] py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#C9942A]" />

            <p className="text-[#C9942A] text-sm font-medium">
              {t("sectionLabel")}
            </p>

            <span className="w-12 h-px bg-[#C9942A]" />
          </div>

          <h2 className="text-4xl font-bold text-[#2C1A0E] mb-4">
            {t("heading")}
          </h2>

          <p className="text-[#7A5C3A] max-w-2xl mx-auto">{t("subtext")}</p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group overflow-hidden rounded-3xl bg-white border border-[#EFE1C7] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={t(`items.${index}.name`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-[#2C1A0E] mb-2 leading-snug">
                  {t(`items.${index}.name`)}
                </h3>

                <p className="text-xs text-[#7A5C3A] mb-2">
                  {t(`items.${index}.description`)}
                </p>

                <span className="text-xs font-semibold text-[#C9942A]">
                  {t(`items.${index}.count`)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
