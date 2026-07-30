"use client";

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCartStore } from "@/store/cartStore";
import { useWishlist } from "@/store/wishlistStore";
import { useToastStore } from "@/store/toastStore";
import { useWishlistHydration } from "../../hooks/useWishlistHydration";

import type { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale();

  const t = useTranslations("productCard");
  const misc = useTranslations("misc");

  const wishlist = useWishlist();
  const toast = useToastStore();

  const hydrated = useWishlistHydration();

  const liked = hydrated ? wishlist.exists(product.id) : false;

  const [added, setAdded] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  const displayName = locale === "en" ? product.nameEn : product.name;

  const displayCategory =
    locale === "en" ? product.categoryEn : product.category;

  const displayBadge = locale === "en" ? product.badgeEn : product.badge;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product, 1, "1");

    toast.show(
      locale === "ar" ? "تمت إضافة المنتج إلى السلة" : "Product added to cart",
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!hydrated) return;

    const wasLiked = wishlist.exists(product.id);

    wishlist.toggle(product);

    toast.show(
      wasLiked
        ? locale === "ar"
          ? "تمت إزالة المنتج من المفضلة"
          : "Removed from wishlist"
        : locale === "ar"
          ? "تمت إضافة المنتج إلى المفضلة"
          : "Added to wishlist",
    );
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link href={`/products/${product.slug}`} prefetch>
      <div className="group relative flex h-[300px] flex-col overflow-hidden rounded-2xl border border-[rgba(139,90,43,0.10)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        {/* Image */}

        <div className="relative h-[150px] shrink-0 overflow-hidden bg-[#F5EDD6]">
          <Image
            src={product.image}
            alt={displayName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {displayBadge && (
            <div
              className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow"
              style={{
                backgroundColor: product.badgeColor || "#670047",
              }}
            >
              {displayBadge}
            </div>
          )}

          {discount && (
            <div className="absolute top-3 left-3 rounded-full bg-[#4A6741] px-3 py-1 text-xs font-semibold text-white">
              -{discount}
              {locale === "ar" ? "٪" : "%"}
            </div>
          )}

          {/* ❤️ Wishlist Button */}

          <button
            onClick={handleWishlist}
            className={`absolute bottom-3 left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
              liked
                ? "bg-[#670047] text-white"
                : "bg-white/95 text-[#7A5C3A] opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:scale-110"
            }`}
          >
            <Heart
              size={17}
              className={liked ? "fill-white text-white" : "text-[#7A5C3A]"}
            />
          </button>
        </div>

        {/* Content */}

        <div className="flex h-[150px] flex-col p-2.5">
          <div className="mb-0.5 text-[11px] text-[#C9942A]">
            {displayCategory}
          </div>

          <h3 className="min-h-[40px] line-clamp-2 break-words text-[13px] font-bold leading-5 text-[#2C1A0E]">
            {displayName}
          </h3>

          <div className="mb-2 flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className={
                    i < Math.floor(product.rating)
                      ? "fill-[#C9942A] text-[#C9942A]"
                      : "text-[#D4B896]"
                  }
                />
              ))}
            </div>

            <span className="text-xs text-[#7A5C3A]">({product.reviews})</span>
          </div>

          <div
            className={`mt-auto flex items-end ${
              locale === "ar"
                ? "justify-between flex-row-reverse"
                : "justify-between"
            }`}
          >
            {/* Price */}
            <div
              className={`flex flex-col whitespace-nowrap ${
                locale === "ar" ? "items-end" : "items-start"
              }`}
            >
              <span className="font-bold text-[#670047]">
                <span className="text-[15px]">{product.price}</span>
                <span className="ml-1 text-[11px] font-semibold">
                  {misc("egp")}
                </span>
              </span>

              {product.originalPrice && (
                <span className="text-[11px] text-[#7A5C3A] line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Add To Cart */}
            <button
              onClick={handleAddToCart}
              className={`flex h-8 min-w-[58px] px-3 shrink-0 items-center justify-center gap-1 rounded-full text-[11px] font-semibold transition-all duration-300 ${
                added
                  ? "bg-[#4A6741] text-white"
                  : "bg-[#670047] text-white hover:bg-[#7A0052]"
              }`}
            >
              <ShoppingCart size={13} />

              <span className="whitespace-nowrap">
                {added ? t("added") : t("addToCart")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
