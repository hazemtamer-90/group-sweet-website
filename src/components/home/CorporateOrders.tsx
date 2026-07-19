"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import {
  Building2,
  Package,
  Users,
  Star,
  ArrowLeft
} from "lucide-react";

const images = [
  "/images/products/semsmya.png",
  "/images/products/foul.png",
  "/images/products/malban.png",
  "/images/products/homsya.png"
];

const icons = [
  Package,
  Users,
  Building2,
  Star
];

export default function CorporateOrders() {
  const t = useTranslations("corporate");

  return (
    <section className="relative overflow-hidden bg-[#2C1A0E] py-20 lg:py-24">

      <div className="absolute inset-0 opacity-5 pattern-bg" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#C9942A]/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#670047]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Content */}

          <div>

            <div className="mb-4 inline-flex items-center gap-2 text-sm text-[#C9942A]">

              <Building2 size={16} />

              <span>{t("sectionLabel")}</span>

            </div>

            <h2 className="mb-5 text-4xl font-bold leading-tight text-white">

              {t("heading")}

              <br />

              <span className="text-[#E8C472]">
                {t("headingAccent")}
              </span>

            </h2>

            <p className="mb-8 max-w-xl leading-8 text-[#D4B896]">

              {t("body")}

            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">            {t.raw("benefits").map((benefit: string, index: number) => {
              const Icon = icons[index];

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C9942A]/20">
                    <Icon
                      size={16}
                      className="text-[#C9942A]"
                    />
                  </div>

                  <span className="text-sm text-[#E8D7BF]">
                    {benefit}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-[#C9942A] px-8 py-4 font-semibold text-[#2C1A0E] transition hover:scale-105"
            >
              {t("ctaQuote")}
              <ArrowLeft size={17} />
            </Link>

            <Link
              href="https://wa.me/201000000000"
              target="_blank"
              className="flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:bg-[#20b558]"
            >
              {t("ctaWhatsapp")}
            </Link>

          </div>

        </div>

        {/* Images */}

        <div className="relative hidden lg:block">

          <div className="grid grid-cols-2 gap-4">            <div className="space-y-4">

              <div className="relative h-52 overflow-hidden rounded-3xl">

                <Image
                  src={images[0]}
                  alt="Semsmya"
                  fill
                  className="object-cover"
                />

              </div>

              <div className="relative h-36 overflow-hidden rounded-3xl">

                <Image
                  src={images[1]}
                  alt="Foul"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

            <div className="mt-10 space-y-4">

              <div className="relative h-36 overflow-hidden rounded-3xl">

                <Image
                  src={images[2]}
                  alt="Malban"
                  fill
                  className="object-cover"
                />

              </div>

              <div className="relative h-52 overflow-hidden rounded-3xl">

                <Image
                  src={images[3]}
                  alt="Homsya"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </div>

                    <div className="absolute -bottom-5 right-6 rounded-3xl bg-[#C9942A] px-6 py-4 text-white shadow-2xl">

            <div className="text-3xl font-bold">
              {t("badge.value")}
            </div>

            <div className="text-sm opacity-90">
              {t("badge.label")}
            </div>

          </div>

        </div>

      </div>

    </div>

    </section>
  );
}