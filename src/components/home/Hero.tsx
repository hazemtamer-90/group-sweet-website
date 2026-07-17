"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

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
      <div className="absolute top-16 left-8 h-24 w-24 rounded-full bg-[#C9942A]/10 blur-3xl" />
      <div className="absolute bottom-24 right-12 h-32 w-32 rounded-full bg-[#670047]/15 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9942A]/40 bg-[#C9942A]/20 px-4 py-2 text-sm text-[#E8C472] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#C9942A]" />

            {t("badge")}
          </div>
          <h1
            className={`mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-white ${
              locale === "ar" ? "max-w-[720px]" : "max-w-[600px]"
            }`}
          >
            {t("headline")}
          </h1>
          <p className="mt-6 max-w-[900px] text-base md:text-lg lg:text-[20px] leading-7 lg:leading-8 text-[#E6D0B4]">
            {t("subheadline")}
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 rounded-full bg-[#670047] px-6 py-3 lg:px-8 lg:py-4 font-semibold text-white hover:bg-[#540039]"
            >
              {t("ctaShop")}
              <ArrowIcon size={18} />
            </Link>

            <Link
              href="/corporate"
              className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 lg:px-8 lg:py-4 font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <Building2 size={18} />
              {t("ctaCorporate")}
            </Link>
          </div>{" "}
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-x-6 md:gap-x-10 lg:gap-x-12 gap-y-4 border-t border-white/20 pt-5">
            {stats.map((item) => (
              <div key={item.label} className="min-w-[90px] text-center">
                <div className="text-[20px] md:text-[22px] lg:text-[27px] font-extrabold leading-none text-[#E8C472] tracking-tight">
                  {item.value}
                </div>

                <div className="mt-1 text-[9px] md:text-[10px] lg:text-[11px] leading-3 font-medium text-white/80 whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      {/* Product thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 hidden lg:block bg-gradient-to-t from-[#1A0F07] to-transparent pb-10 pt-8 sm:block">
        <div className="mx-auto flex max-w-7xl items-end gap-3 px-6">
          {products.map((product) => (
            <div
              key={product.label}
              className="group relative h-14 w-14 overflow-hidden rounded-xl border-2 border-white/20 transition-all hover:border-[#C9942A]"
            >
              <Image
                src={product.image}
                alt={product.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-end bg-black/30 p-1">
                <span className="text-[9px] leading-tight text-white">
                  {product.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
