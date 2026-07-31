"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type QuickLink = {
  label: string;
  href: string;
};

type Category = {
  name: string;
  href: string;
};

export default function Footer() {
  const t = useTranslations("footer");

  const quickLinks = t.raw("quickLinks") as QuickLink[];

  const categories = t.raw("categories") as Category[];

  const workingHours = t.raw("workingHours") as string[];

  const paymentMethods = t.raw("paymentMethods") as string[];

  return (
    <footer className="bg-[#1A0F07] text-[#D4B896]">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-5 md:py-6">
        <div className="grid gap-3 lg:gap-5 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo/logo.png"
              alt="Group Sweet"
              width={110}
              height={45}
              className="mb-3 h-auto w-auto"
            />

            <p className="mb-3 max-w-xs text-[13px] leading-5 text-[#D4B896]/80">
              {t("description")}
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C9942A]"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C9942A]"
              >
                <FaInstagram size={13} />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C9942A]"
              >
                <FaXTwitter size={13} />
              </a>
            </div>
          </div>{" "}
          {/* Mobile: Quick Links + Categories */}
          <div className="grid grid-cols-2 gap-8 lg:hidden">
            <div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {t("quickLinksHeading")}
              </h3>

              <div className="space-y-1.5">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-[13px] transition hover:text-[#C9942A]"
                    prefetch
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {t("categoriesHeading")}
              </h3>

              <div className="space-y-1.5">
                {categories.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-[13px] transition hover:text-[#C9942A]"
                    prefetch
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Desktop Quick Links */}
          <div className="hidden lg:block">
            <h3 className="mb-3 text-lg font-semibold text-white">
              {t("quickLinksHeading")}
            </h3>

            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm transition hover:text-[#C9942A]"
                  prefetch
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Desktop Categories */}
          <div className="hidden lg:block">
            <h3 className="mb-3 text-lg font-semibold text-white">
              {t("categoriesHeading")}
            </h3>

            <div className="space-y-2">
              {categories.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm transition hover:text-[#C9942A]"
                  prefetch
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>{" "}
          {/* Contact */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              {t("contactHeading")}
            </h3>

            <div className="space-y-2">
              <a
                href="tel:+201000000000"
                className="flex items-center gap-3 text-sm hover:text-[#C9942A]"
              >
                <Phone size={16} />
                <span>{t("phone")}</span>
              </a>

              <a
                href={`mailto:${t("email")}`}
                className="flex items-center gap-3 text-sm hover:text-[#C9942A]"
              >
                <Mail size={16} />
                <span>{t("email")}</span>
              </a>

              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-1" />
                <span>{t("address")}</span>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
              <h4 className="mb-2 text-sm text-white">
                {t("workingHoursLabel")}
              </h4>

              {workingHours.map((item) => (
                <p key={item} className="text-xs leading-5 text-[#D4B896]/70">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 md:flex-row">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs">{t("paymentLabel")}</span>

            {paymentMethods.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/10 px-2 py-1 text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-center text-xs text-[#D4B896]/50">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
