"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

const productImgs = [
  "/images/products/malban.png",
  "/images/products/homsya.png",
  "/images/products/semsmya.png",
  "/images/products/foul.png",
];

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const stats =
    locale === "ar"
      ? [
          {
            value: "+١٥",
            label: "سنة\nخبرة في التصنيع",
          },
          {
            value: "+٥٠٠٠",
            label: "عميل راضٍ",
          },
          {
            value: "١٠٠٪",
            label: "منتجات طازجة",
          },
        ]
      : [
          {
            value: "15+",
            label: "Manufacturing\nExperience",
          },
          {
            value: "5,000+",
            label: "Satisfied Customers",
          },
          {
            value: "100%",
            label: "Fresh Products",
          },
        ];

  const products = [
    { image: productImgs[0], label: t("products.malban") },
    { image: productImgs[1], label: t("products.homsya") },
    { image: productImgs[2], label: t("products.semsmya") },
    { image: productImgs[3], label: t("products.foul") },
  ];

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/factory.png"
          alt="Group Sweet Factory"
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-[#2C1A0E]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/90 via-[#2C1A0E]/50 to-[#2C1A0E]/30" />
      </div>

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#C9942A_1px,transparent_1px)] bg-[length:30px_30px]" />

      <div className="absolute left-8 top-16 h-24 w-24 rounded-full bg-[#C9942A]/10 blur-3xl" />

      <div className="absolute bottom-24 right-12 h-32 w-32 rounded-full bg-[#670047]/15 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9942A]/40 bg-[#C9942A]/20 px-4 py-2 text-sm text-[#E8C472] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#C9942A]" />
              {t("badge")}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1
              className={`mt-6 text-3xl font-bold leading-[1.1] text-white md:text-4xl lg:text-5xl ${
                locale === "ar" ? "max-w-[720px]" : "max-w-[600px]"
              }`}
            >
              {t("headline")}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-[900px] text-base leading-7 text-[#E6D0B4] md:text-lg lg:text-[20px] lg:leading-8">
              {t("subheadline")}
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                prefetch
                className="flex items-center justify-center gap-2 rounded-full bg-[#670047] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#540039] hover:shadow-xl lg:px-8 lg:py-4"
              >
                {t("ctaShop")}
                <ArrowIcon size={18} />
              </Link>

              <Link
                href="/corporate"
                prefetch
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-xl lg:px-8 lg:py-4"
              >
                <Building2 size={18} />
                {t("ctaCorporate")}
              </Link>
            </div>
          </Reveal>

          <StaggerContainer className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-4 border-t border-white/20 pt-5 md:mt-8 md:gap-x-10 lg:gap-x-12">
            {stats.map((item) => (
              <StaggerItem key={item.label}>
                <div className="min-w-[90px] text-center transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-[20px] font-extrabold leading-none tracking-tight text-[#E8C472] md:text-[22px] lg:text-[27px]">
                    {item.value}
                  </div>

                  <div className="mt-1 whitespace-nowrap text-[9px] font-medium leading-3 text-white/80 md:text-[10px] lg:text-[11px]">
                    {item.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>      {/* Product thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 hidden bg-gradient-to-t from-[#1A0F07] to-transparent pb-10 pt-8 lg:block">
        <StaggerContainer className="mx-auto flex max-w-7xl items-end gap-3 px-6">
          {products.map((product) => (
            <StaggerItem key={product.label}>
              <div className="group relative h-14 w-14 overflow-hidden rounded-xl border-2 border-white/20 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9942A] hover:shadow-[0_10px_30px_rgba(201,148,42,0.35)]">
                <Image
                  src={product.image}
                  alt={product.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-end bg-black/30 p-1 transition-colors duration-300 group-hover:bg-black/20">
                  <span className="text-[9px] leading-tight text-white">
                    {product.label}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}