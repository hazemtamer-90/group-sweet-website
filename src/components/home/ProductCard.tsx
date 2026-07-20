"use client";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCartStore } from "@/store/cartStore";

import type { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale();

  const t = useTranslations("productCard");
  const misc = useTranslations("misc");

  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  const displayName = locale === "en" ? product.nameEn : product.name;

  const displayCategory =
    locale === "en" ? product.categoryEn : product.category;

  const displayBadge = locale === "en" ? product.badgeEn : product.badge;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group relative overflow-hidden rounded-2xl border border-[rgba(139,90,43,0.10)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        {/* Image */}

        <div className="relative h-56 overflow-hidden bg-[#F5EDD6]">
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

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110"
          >
            <Heart
              size={16}
              className={
                liked ? "fill-[#670047] text-[#670047]" : "text-[#7A5C3A]"
              }
            />
          </button>
        </div>

        {/* Content */}

        <div className="p-4">
          <div className="mb-1 text-xs text-[#C9942A]">{displayCategory}</div>
          <h3 className="mb-2 line-clamp-2 text-base font-bold leading-snug text-[#2C1A0E]">
            {displayName}
          </h3>
          {/* Rating */}
          <div className="mb-3 flex items-center gap-1.5">
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
          {/* Price */}
          <div className="mb-4 flex items-center gap-2">
            <span className="text-lg font-bold text-[#670047]">
              {product.price} {misc("egp")}
            </span>

            {product.originalPrice && (
              <span className="text-xs text-[#7A5C3A] line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
          {/* Add To Cart */}
          <button
            onClick={handleAddToCart}
            className={`flex h-10 w-full items-center justify-center gap-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              added
                ? "bg-[#4A6741] text-white"
                : "bg-[#670047] text-white hover:bg-[#7A0052]"
            }`}
          >
            <ShoppingCart size={13} />

            <span className="leading-none">
              {added ? t("added") : t("addToCart")}
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
}
