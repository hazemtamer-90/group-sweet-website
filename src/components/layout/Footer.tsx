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

export default function Footer() {
  const t = useTranslations("footer");

  const quickLinks = t.raw("quickLinks") as QuickLink[];
  const categories = [
    {
      name: "جوز الهند",
      href: "/products?category=coconut",
    },
    {
      name: "ملبن",
      href: "/products?category=malban",
    },
    {
      name: "نوجا",
      href: "/products?category=nougat",
    },
    {
      name: "نواشف",
      href: "/products?category=dry",
    },
    {
      name: "مدورات",
      href: "/products?category=round",
    },
    {
      name: "علب",
      href: "/products?category=boxes",
    },
    {
      name: "قشطة",
      href: "/products?category=cream",
    },
  ];
  const workingHours = t.raw("workingHours") as string[];
  const paymentMethods = t.raw("paymentMethods") as string[];

  return (
    <footer className="bg-[#1A0F07] text-[#D4B896]">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <Image
              src="/images/logo/logo.png"
              alt="Group Sweet"
              width={170}
              height={70}
              className="mb-5 h-auto w-auto"
            />

            <p className="mb-6 max-w-xs text-sm leading-7 text-[#D4B896]/80">
              {t("description")}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C9942A]"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C9942A]"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C9942A]"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              {t("quickLinksHeading")}
            </h3>

            <div className="space-y-3">
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

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              {t("categoriesHeading")}
            </h3>

            <div className="space-y-3">
              {categories.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm transition hover:text-[#C9942A]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              {t("contactHeading")}
            </h3>

            <div className="space-y-4">
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

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 text-sm text-white">
                {t("workingHoursLabel")}
              </h4>

              {workingHours.map((item) => (
                <p key={item} className="text-xs leading-6 text-[#D4B896]/70">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row">
          <div className="flex items-center gap-3">
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

          <p className="text-xs text-[#D4B896]/50">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
