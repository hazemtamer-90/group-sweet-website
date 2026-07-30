"use client";

import { Globe, Heart, Menu, ShoppingCart, X } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useCartStore } from "@/store/cartStore";
import { useWishlist } from "@/store/wishlistStore";

type HeaderActionsProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  setWishlistOpen: (value: boolean) => void;
};

export default function HeaderActions({
  menuOpen,
  setMenuOpen,
  setCartOpen,
  setWishlistOpen,
}: HeaderActionsProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const cartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

  const wishlistCount = useWishlist((state) => state.items.length);

  const switchLocale = () => {
    router.replace(pathname, {
      locale: locale === "ar" ? "en" : "ar",
    });
  };

  return (
    <div className="flex items-center gap-3">
      {" "}
      <button
        onClick={switchLocale}
        className="flex h-11 items-center gap-2 rounded-full border border-[#E8D7B6] bg-white px-4 text-sm font-semibold text-[#670047] shadow-sm transition hover:bg-[#F7F0E2]"
      >
        <Globe size={16} />
        {locale === "ar" ? "EN" : "AR"}
      </button>
      <button
        onClick={() => setWishlistOpen(true)}
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#E8D7B6] bg-white shadow-sm transition hover:bg-[#F7F0E2]"
      >
        <Heart size={19} className="text-[#670047]" />

        {wishlistCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#670047] text-[10px] font-bold text-white">
            {wishlistCount}
          </span>
        )}
      </button>{" "}
      <button
        onClick={() => setCartOpen(true)}
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#E8D7B6] bg-white shadow-sm transition hover:bg-[#F7F0E2]"
      >
        <ShoppingCart size={19} className="text-[#670047]" />

        {cartCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#670047] text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </button>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded-full p-2 transition hover:bg-[#EFE4C8] lg:hidden"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}
