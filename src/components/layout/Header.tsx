"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import CartDrawer from "./CartDrawer";
import WishlistDrawer from "./WishlistDrawer";

import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const t = useTranslations("header");

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  return (
    <>
      {" "}
      {/* Top Bar */}
      <div className="bg-[#2C1A0E] py-2 text-center text-xs text-[#E8C472] sm:text-sm">
        {t("topBar")}
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#E8D7B6] bg-[#FAF5E9]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          {" "}
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
          <DesktopNavigation /> {/* Right Actions */}
          <HeaderActions
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setCartOpen={setCartOpen}
            setWishlistOpen={setWishlistOpen}
          />
        </div>
      </header>{" "}
      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      />
    </>
  );
}
