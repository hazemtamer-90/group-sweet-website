"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import ProductHighlights from "./ProductHighlights";
import ProductContents from "./ProductContents";
import ProductTabs from "./ProductTabs";
import { useToastStore } from "@/store/toastStore";
import { useWishlist } from "@/store/wishlistStore";
import {
  Heart,
  Share2,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";

import { products, type Product } from "@/data/products";
import { productExtras } from "@/data/productExtras";
import { useCartStore } from "@/store/cartStore";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const locale = useLocale();

  const t = useTranslations("productDetails");
  const misc = useTranslations("misc");

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(
    product.showWeightSelector === false ? "1" : "0.25",
  );

  const addToCart = useCartStore((state) => state.addToCart);
  const toast = useToastStore();
  const wishlist = useWishlist();

  const categoryKey =
    product.categoryEn.toLowerCase() as keyof typeof productExtras;

  const extras = productExtras[categoryKey];

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem("recent-products") || "[]");

    const updated = [
      product.slug,
      ...viewed.filter((slug: string) => slug !== product.slug),
    ].slice(0, 8);

    localStorage.setItem("recent-products", JSON.stringify(updated));
  }, [product.slug]);

  const images = [product.image, product.image, product.image];

  const currentPrice =
    selectedWeight === "0.25"
      ? product.quarterPrice
      : selectedWeight === "0.5"
        ? product.halfPrice
        : product.price;

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const relatedProducts = [
    ...products.filter(
      (p) => p.category === product.category && p.id !== product.id,
    ),

    ...products.filter(
      (p) => p.category !== product.category && p.id !== product.id,
    ),
  ].slice(0, 4);

  const displayName = locale === "en" ? product.nameEn : product.name;

  const displayCategory =
    locale === "en" ? product.categoryEn : product.category;

  const displayDescription =
    locale === "en" ? product.descriptionEn : product.description;

  const displayBadge = locale === "en" ? product.badgeEn : product.badge;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: displayName,
          url: window.location.href,
        });

        return;
      }

      await navigator.clipboard.writeText(window.location.href);

      alert(locale === "en" ? "Link copied" : "تم نسخ الرابط");
    } catch {
      // User cancelled sharing.
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 flex items-center justify-between">
        <Link
          href={`/${locale}/products`}
          className="text-sm text-[#7A5C3A] hover:text-[#670047]"
          prefetch
        >
          ← {t("back")}
        </Link>

        <button
          onClick={handleShare}
          className="rounded-full border p-2 hover:bg-white"
        >
          <Share2 size={18} />
        </button>
      </div>

      <div
        className={`grid gap-14 lg:grid-cols-2 ${
          locale === "ar"
            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        <div>
          <div className="relative overflow-hidden rounded-3xl border border-[#E8D7B6] bg-white">
            <Image
              src={images[activeImage]}
              alt={displayName}
              width={700}
              height={700}
              className="h-[520px] w-full object-cover transition duration-500 hover:scale-110"
            />

            {product.badge && (
              <div
                className="absolute right-5 top-5 rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{
                  backgroundColor: product.badgeColor,
                }}
              >
                {displayBadge}
              </div>
            )}

            {discount && (
              <div className="absolute left-5 top-5 rounded-full bg-[#4A6741] px-4 py-2 text-sm font-semibold text-white">
                -{discount}%
              </div>
            )}

            <button
              onClick={() => {
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
              }}
              className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow"
            >
              <Heart
                size={20}
                className={
                  wishlist.exists(product.id)
                    ? "fill-[#670047] text-[#670047]"
                    : "text-[#7A5C3A]"
                }
              />
            </button>
          </div>

          <div className="mt-5 flex gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`overflow-hidden rounded-xl border-2 ${
                  activeImage === index
                    ? "border-[#670047]"
                    : "border-[#E8D7B6]"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  width={110}
                  height={110}
                  className="h-24 w-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-sm font-medium text-[#C9942A]">
            {displayCategory}
          </span>

          <h1 className="mt-3 text-4xl font-bold text-[#2C1A0E]">
            {displayName}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.floor(product.rating)
                      ? "fill-[#C9942A] text-[#C9942A]"
                      : "text-[#D8C8A4]"
                  }
                />
              ))}
            </div>

            <span className="font-semibold text-[#C9942A]">
              {product.rating}
            </span>

            <span className="text-[#7A5C3A]">
              ({product.reviews} {t("reviews")})
            </span>
          </div>

          <div className="mt-7 flex items-end gap-3">
            <span className="text-3xl font-bold text-[#670047]">
              {currentPrice}
            </span>

            <span className="mb-1 text-lg text-[#7A5C3A]">{misc("egp")}</span>
          </div>

          <p className="mt-8 border-b border-[#E8D7B6] pb-8 leading-9 text-[#7A5C3A]">
            {displayDescription}
          </p>

          {product.contents && <ProductContents contents={product.contents} />}

          {extras && <ProductHighlights highlights={extras.highlights} />}
          {/* Weight */}

          {/* Weight */}

          {product.showWeightSelector !== false && (
            <div className="mt-8">
              <h3 className="mb-4 font-semibold text-[#2C1A0E]">
                {t("weight")}
              </h3>

              <div className="mt-4">
                <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#E8D7B6] bg-white shadow-sm">
                  {[
                    {
                      value: "0.25",
                      label: locale === "en" ? "250g" : "ربع كيلو",
                    },
                    {
                      value: "0.5",
                      label: locale === "en" ? "500g" : "نصف كيلو",
                    },
                    {
                      value: "1",
                      label: locale === "en" ? "1kg" : "كيلو",
                    },
                  ].map((item) => (
                    <label key={item.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="weight"
                        value={item.value}
                        checked={selectedWeight === item.value}
                        onChange={() => setSelectedWeight(item.value)}
                        className="peer sr-only"
                      />

                      <span
                        className="
            flex h-14 items-center justify-center
            border-l border-[#E8D7B6]
            text-base font-semibold
            text-[#2C1A0E]
            transition-all duration-300
            peer-checked:bg-[#670047]
            peer-checked:text-white
            peer-checked:shadow-inner
            hover:bg-[#F8F1E6]
            peer-checked:hover:bg-[#670047]
          "
                      >
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quantity */}

          <div className="mt-8 flex items-center gap-5">
            <span className="font-medium text-[#2C1A0E]">{t("quantity")}</span>

            <div className="flex items-center rounded-xl border border-[#E8D7B6]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3"
              >
                <Minus size={18} />
              </button>

              <span className="w-14 text-center font-bold">{quantity}</span>

              <button onClick={() => setQuantity(quantity + 1)} className="p-3">
                <Plus size={18} />
              </button>
            </div>

            <span className="text-[#7A5C3A]">
              {t("total")}
              <span className="mr-2 font-bold text-[#670047]">
                {currentPrice * quantity} {misc("egp")}
              </span>
            </span>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() =>
                addToCart(
                  {
                    ...product,
                    price: currentPrice,
                  },
                  quantity,
                  selectedWeight,
                )
              }
              className="flex-1 rounded-2xl bg-[#670047] py-4 text-lg font-semibold text-white transition hover:bg-[#7D0056]"
            >
              <div className="flex items-center justify-center gap-3">
                <ShoppingCart size={20} />
                <span>{t("addToCart")}</span>
              </div>
            </button>

            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>

              {t("whatsapp")}
            </a>
          </div>

          {/* Trust Badges */}

          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-[#E8D7B6] bg-white p-5 text-center">
              <div className="mb-3 text-3xl">🛡️</div>
              <h4>{t("guaranteedQuality")}</h4>
              <p>{t("bestIngredients")}</p>
            </div>

            <div className="rounded-2xl border border-[#E8D7B6] bg-white p-5 text-center">
              <div className="mb-3 text-3xl">🚚</div>
              <h4>{t("fastDelivery")}</h4>
              <p>{t("allGovernorates")}</p>
            </div>

            <div className="rounded-2xl border border-[#E8D7B6] bg-white p-5 text-center">
              <div className="mb-3 text-3xl">🔄</div>
              <h4>{t("easyReplacement")}</h4>
              <p>{t("replacement14Days")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Product Tabs */}

      {/* Product Tabs */}

      {extras && (
        <ProductTabs
          description={displayDescription}
          ingredients={extras.ingredients}
          nutrition={extras.nutrition}
          faq={extras.faq}
          reviews={extras.reviews}
        />
      )}

      {/* Recently Viewed */}
      {/* Related Products */}
      {/* Related Products */}

      <div className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-[#2C1A0E]">
          {t("relatedProducts")}
        </h2>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-[#E8D7B6] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/${locale}/products/${item.slug}`} prefetch>
                <div className="relative h-56 bg-[#F5EDD6]">
                  <Image
                    src={item.image}
                    alt={locale === "en" ? item.nameEn : item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="p-4">
                <div className="text-xs text-[#C9942A]">
                  {locale === "en" ? item.categoryEn : item.category}
                </div>

                <Link href={`/${locale}/products/${item.slug}`} prefetch>
                  <h3 className="mt-2 line-clamp-2 text-lg font-bold text-[#2C1A0E] hover:text-[#670047]">
                    {locale === "en" ? item.nameEn : item.name}
                  </h3>
                </Link>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xl font-bold text-[#670047]">
                    {item.price}
                  </span>

                  <span className="text-sm text-[#7A5C3A]">{misc("egp")}</span>
                </div>

                <button
                  onClick={() =>
                    addToCart(
                      {
                        ...item,
                        price: item.price,
                      },
                      1,
                      "1",
                    )
                  }
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#670047] py-3 text-sm font-semibold text-white hover:bg-[#7D0056]"
                >
                  <ShoppingCart size={15} />
                  {t("addToCart")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-[#E8D7B6] bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F2E5]">
            <Truck size={26} className="text-[#670047]" />
          </div>

          <h3>{t("shippingTitle")}</h3>
          <p>{t("shippingDesc")}</p>
        </div>

        <div className="rounded-2xl border border-[#E8D7B6] bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F2E5]">
            <Shield size={26} className="text-[#670047]" />
          </div>

          <h3>{t("qualityTitle")}</h3>
          <p>{t("qualityDesc")}</p>
        </div>

        <div className="rounded-2xl border border-[#E8D7B6] bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F2E5]">
            <RefreshCw size={26} className="text-[#670047]" />
          </div>

          <h3>{t("returnTitle")}</h3>
          <p>{t("returnDesc")}</p>
        </div>
      </div>
    </section>
  );
}
