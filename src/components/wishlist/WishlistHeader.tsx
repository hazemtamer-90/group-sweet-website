"use client";

import { Heart, Sparkles } from "lucide-react";
import { useLocale } from "next-intl";

import { useWishlist } from "@/store/wishlistStore";

export default function WishlistHeader() {
  const locale = useLocale();

  const items = useWishlist((state) => state.items);

  return (
    <section className="relative overflow-hidden border-b border-[#E8D7B6] bg-gradient-to-br from-[#FFFDF8] via-[#FAF5E9] to-[#F5EDD6]">
      {/* Background Decorations */}

      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#670047]/5 blur-3xl" />

      <div className="absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-[#C9942A]/10 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 lg:flex-row">
        {/* Left */}

        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8D7B6] bg-white px-4 py-2 shadow-sm">
            <Sparkles size={16} className="text-[#C9942A]" />

            <span className="text-sm font-semibold text-[#670047]">
              {locale === "ar"
                ? "قائمة منتجاتك المفضلة"
                : "Your Favorite Products"}
            </span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-[#2C1A0E]">
            {locale === "ar" ? "المفضلة ❤️" : "Wishlist ❤️"}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[#7A5C3A]">
            {locale === "ar"
              ? "احتفظ بمنتجاتك المفضلة للرجوع إليها لاحقًا أو أضفها إلى السلة في أي وقت."
              : "Save your favorite products and easily add them to your cart whenever you want."}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-2xl border border-[#E8D7B6] bg-white px-6 py-4 shadow-sm">
              <p className="text-sm text-[#8B6E4A]">
                {locale === "ar" ? "المنتجات المحفوظة" : "Saved Products"}
              </p>

              <p className="mt-1 text-3xl font-bold text-[#670047]">
                {items.length}
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative z-10">
          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-white shadow-xl ring-8 ring-[#670047]/10">
            <Heart size={74} className="fill-[#670047] text-[#670047]" />
          </div>
        </div>
      </div>
    </section>
  );
}
