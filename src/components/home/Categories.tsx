"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/motion/Reveal";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const categories = [
  {
    image: "/images/products/halawa1.png",
    href: "/products?category=coconut",
  },
  {
    image: "/images/products/halawa2.png",
    href: "/products?category=malban",
  },
  {
    image: "/images/products/halawa3.png",
    href: "/products?category=nougat",
  },
  {
    image: "/images/products/halawa4.png",
    href: "/products?category=dry",
  },
  {
    image: "/images/products/halawa5.png",
    href: "/products?category=round",
  },
  {
    image: "/images/products/semsmya.png",
    href: "/products?category=boxes",
  },
  {
    image: "/images/products/homsya.png",
    href: "/products?category=cream",
  },
  {
    image: "/images/products/foul.png",
    href: "/corporate",
  },
];

export default function Categories() {
  const t = useTranslations("categories");

  return (
    <section className="overflow-hidden bg-[#FBF8F2] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal direction="up" duration={0.7}>
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C9942A]" />

              <p className="text-sm font-medium text-[#C9942A]">
                {t("sectionLabel")}
              </p>

              <span className="h-px w-12 bg-[#C9942A]" />
            </div>

            <h2 className="mb-4 text-4xl font-bold text-[#2C1A0E]">
              {t("heading")}
            </h2>

            <p className="mx-auto max-w-2xl text-[#7A5C3A]">{t("subtext")}</p>
          </div>
        </Reveal>

        <Stagger
          delay={0.1}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-4"
        >
          {categories.map((category, index) => (
            <StaggerItem key={category.href}>
              <Link
                href={category.href}
                className="group block h-full overflow-hidden rounded-3xl border border-[#EFE1C7] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                prefetch
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={t(`items.${index}.name`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-base font-bold leading-snug text-[#2C1A0E]">
                    {t(`items.${index}.name`)}
                  </h3>

                  <p className="mb-2 text-xs text-[#7A5C3A]">
                    {t(`items.${index}.description`)}
                  </p>

                  <span className="text-xs font-semibold text-[#C9942A]">
                    {t(`items.${index}.count`)}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
