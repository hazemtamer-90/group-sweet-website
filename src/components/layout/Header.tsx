"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ShoppingCart,
  Search,
  Menu,
  X,
  Globe,
} from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

interface HeaderProps {
  cartCount?: number;
}

export default function Header({
  cartCount = 0,
}: HeaderProps) {
  const t = useTranslations("header");
  const locale = useLocale();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isArabic = locale === "ar";

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2C1A0E] text-[#E8C472] text-xs sm:text-sm py-2 text-center">
        {t("topBar")}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF5E9]/95 backdrop-blur-md border-b border-[#e9dcc4]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="Group Sweet"
                width={150}
                height={70}
                priority
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-8">

              <Link
                href="/"
                className="font-medium text-[#670047] border-b-2 border-[#C9942A] pb-1"
              >
                {t("home")}
              </Link>

              <Link
                href="/products"
                className="text-[#2C1A0E] hover:text-[#670047] transition"
              >
                {t("products")}
              </Link>

              <Link
                href="/gift-boxes"
                className="text-[#2C1A0E] hover:text-[#670047] transition"
              >
                {t("gift")}
              </Link>

              <Link
                href="/corporate"
                className="text-[#2C1A0E] hover:text-[#670047] transition"
              >
                {t("corporate")}
              </Link>

              <Link
                href="/about"
                className="text-[#2C1A0E] hover:text-[#670047] transition"
              >
                {t("about")}
              </Link>

              <Link
                href="/contact"
                className="text-[#2C1A0E] hover:text-[#670047] transition"
              >
                {t("contact")}
              </Link>

            </nav>

            {/* Actions */}

            <div className="flex items-center gap-3">
                             {/* Language */}

              <button className="flex items-center gap-2 rounded-full border border-[#d7c4a8] bg-white px-3 py-2 text-sm font-semibold text-[#670047] hover:bg-[#F5EDD6] transition">
                <Globe size={15} />
                <span>{isArabic ? "EN" : "AR"}</span>
              </button>

              {/* Search */}

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="rounded-full p-2 hover:bg-[#EFE4C8] transition"
              >
                <Search size={20} className="text-[#2C1A0E]" />
              </button>

              {/* WhatsApp */}

              <Link
                href="https://wa.me/201000000000"
                target="_blank"
                className="hidden lg:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1fb357] transition"
              >
                {t("whatsapp")}
              </Link>

              {/* Cart */}

              <button className="relative rounded-full p-2 hover:bg-[#EFE4C8] transition">
                <ShoppingCart
                  size={21}
                  className="text-[#2C1A0E]"
                />

                {cartCount > 0 && (
                  <span className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#670047] text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu */}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden rounded-full p-2 hover:bg-[#EFE4C8] transition"
              >
                {menuOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>

            </div>

          </div>

          {searchOpen && (
            <div className="pb-5">

              <div className="relative">

                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  className="w-full rounded-full border border-[#dbcbb4] bg-[#F5EDD6] py-3 pr-12 pl-5 outline-none focus:ring-2 focus:ring-[#C9942A]/40"
                />

                <Search
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A5C3A]"
                />

              </div>

            </div>
          )} 
                    {menuOpen && (
          <div className="border-t border-[#e9dcc4] bg-[#FFFBF0] lg:hidden">
            <nav className="flex flex-col p-4">

              <Link
                href="/"
                className="rounded-lg px-4 py-3 hover:bg-[#EFE4C8]"
              >
                {t("home")}
              </Link>

              <Link
                href="/products"
                className="rounded-lg px-4 py-3 hover:bg-[#EFE4C8]"
              >
                {t("products")}
              </Link>

              <Link
                href="/gift-boxes"
                className="rounded-lg px-4 py-3 hover:bg-[#EFE4C8]"
              >
                {t("gift")}
              </Link>

              <Link
                href="/corporate"
                className="rounded-lg px-4 py-3 hover:bg-[#EFE4C8]"
              >
                {t("corporate")}
              </Link>

              <Link
                href="/about"
                className="rounded-lg px-4 py-3 hover:bg-[#EFE4C8]"
              >
                {t("about")}
              </Link>

              <Link
                href="/contact"
                className="rounded-lg px-4 py-3 hover:bg-[#EFE4C8]"
              >
                {t("contact")}
              </Link>

              <Link
                href="https://wa.me/201000000000"
                target="_blank"
                className="mt-4 rounded-lg bg-[#25D366] py-3 text-center font-medium text-white"
              >
                {t("whatsapp")}
              </Link>

            </nav>
          </div>
        )}
        </div>
      </header>
    </>
  );
}