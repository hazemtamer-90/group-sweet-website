"use client";

import { Trash2, ShoppingCart, Heart } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import { useWishlist } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";

export default function WishlistActions() {
  const locale = useLocale();
  const t = useTranslations("wishlist");

  const items = useWishlist((state) => state.items);
  const clear = useWishlist((state) => state.clear);

  const addToCart = useCartStore((state) => state.addToCart);

  const moveAllToCart = () => {
    items.forEach((product) => {
      addToCart(product, 1, "1");
    });
  };

  if (items.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-[#E8D7B6] bg-white shadow-sm">
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#670047]/10">
            <Heart className="fill-[#670047] text-[#670047]" size={26} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2C1A0E]">{t("title")}</h2>

            <p className="mt-1 text-sm text-[#8B6E4A]">
              {items.length} {locale === "ar" ? "منتج محفوظ" : "Saved Items"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={moveAllToCart}
            className="flex h-12 items-center gap-2 rounded-full bg-[#670047] px-6 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#7A0052]"
          >
            <ShoppingCart size={18} />
            {t("addToCart")}
          </button>

          <button
            onClick={clear}
            className="flex h-12 items-center gap-2 rounded-full border border-red-200 bg-white px-6 font-semibold text-red-600 transition-all duration-300 hover:border-red-300 hover:bg-red-50"
          >
            <Trash2 size={18} />
            {locale === "ar" ? "حذف الكل" : "Clear All"}
          </button>
        </div>
      </div>
    </div>
  );
}
