"use client";

import Image from "next/image";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCartStore } from "@/store/cartStore";
import { useWishlist } from "@/store/wishlistStore";

import type { Product } from "@/data/products";

interface WishlistCardProps {
  product: Product;
}

export default function WishlistCard({ product }: WishlistCardProps) {
  const locale = useLocale();

  const t = useTranslations("wishlist");
  const misc = useTranslations("misc");

  const remove = useWishlist((state) => state.remove);

  const addToCart = useCartStore((state) => state.addToCart);

  const name = locale === "en" ? product.nameEn : product.name;

  const category = locale === "en" ? product.categoryEn : product.category;

  return (
    <div className="overflow-hidden rounded-3xl border border-[#E8D7B6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 bg-[#F5EDD6]">
        <Image src={product.image} alt={name} fill className="object-cover" />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs text-[#C9942A]">{category}</p>

          <h3 className="mt-1 text-lg font-bold text-[#2C1A0E]">{name}</h3>
        </div>

        <div className="text-2xl font-bold text-[#670047]">
          {product.price} {misc("egp")}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => addToCart(product, 1, "1")}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#670047] py-3 text-sm font-semibold text-white transition hover:bg-[#7A0052]"
          >
            <ShoppingCart size={18} />
            {t("addToCart")}
          </button>

          <button
            onClick={() => remove(product.id)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-red-200 text-red-500 transition hover:bg-red-50"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
