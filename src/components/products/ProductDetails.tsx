"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
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

import ProductHighlights from "./ProductHighlights";
import ProductContents from "./ProductContents";
import ProductTabs from "./ProductTabs";

import ProductCard from "@/components/home/ProductCard";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

import { products, type Product } from "@/data/products";
import { productExtras } from "@/data/productExtras";

import { useCartStore } from "@/store/cartStore";
import { useToastStore } from "@/store/toastStore";
import { useWishlist } from "@/store/wishlistStore";
import { useWishlistHydration } from "@/hooks/useWishlistHydration";

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
  const hydrated = useWishlistHydration();

  const categoryKey =
    product.categoryEn.toLowerCase() as keyof typeof productExtras;

  const extras = productExtras[categoryKey];

  useEffect(() => {
    const viewed = JSON.parse(
      localStorage.getItem("recent-products") || "[]",
    ) as string[];

    const updated = [
      product.slug,
      ...viewed.filter((slug) => slug !== product.slug),
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
      (item) => item.category === product.category && item.id !== product.id,
    ),
    ...products.filter(
      (item) => item.category !== product.category && item.id !== product.id,
    ),
  ].slice(0, 4);

  const displayName = locale === "en" ? product.nameEn : product.name;

  const displayCategory =
    locale === "en" ? product.categoryEn : product.category;

  const displayDescription =
    locale === "en" ? product.descriptionEn : product.description;

  const displayBadge = locale === "en" ? product.badgeEn : product.badge;

  const liked = hydrated ? wishlist.exists(product.id) : false;

  const handleWishlist = () => {
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

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        price: currentPrice,
      },
      quantity,
      selectedWeight,
    );

    toast.show(
      locale === "ar" ? "تمت إضافة المنتج إلى السلة" : "Product added to cart",
    );
  };

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

      toast.show(locale === "en" ? "Link copied" : "تم نسخ الرابط");
    } catch {
      return;
    }
  };

  const weightOptions = [
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
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF5E9]">
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-[#C9942A]/5 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-[600px] h-80 w-80 rounded-full bg-[#670047]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-10 sm:py-12 lg:py-14">
        <Reveal direction="up">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href={`/${locale}/products`}
              prefetch
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#7A5C3A] transition-colors duration-300 hover:text-[#670047]"
            >
              <span
                className={`transition-transform duration-300 ${
                  locale === "ar"
                    ? "group-hover:translate-x-1"
                    : "group-hover:-translate-x-1"
                }`}
              >
                ←
              </span>

              {t("back")}
            </Link>

            <button
              type="button"
              onClick={handleShare}
              aria-label="Share product"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8D7B6] bg-white text-[#7A5C3A] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9942A] hover:text-[#670047] hover:shadow-lg"
            >
              <Share2 size={18} />
            </button>
          </div>
        </Reveal>
        <div
          className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-14 ${
            locale === "ar"
              ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
              : ""
          }`}
        >
          <Reveal
            direction={locale === "ar" ? "right" : "left"}
            duration={0.85}
          >
            <div>
              <div className="group relative overflow-hidden rounded-[28px] border border-[#E8D7B6] bg-white shadow-[0_15px_45px_rgba(75,48,20,0.06)]">
                <div className="relative overflow-hidden">
                  <Image
                    src={images[activeImage]}
                    alt={displayName}
                    width={700}
                    height={700}
                    priority
                    className="h-[360px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[460px] lg:h-[520px]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/10 via-transparent to-transparent" />
                </div>

                {displayBadge && (
                  <div
                    className="absolute right-5 top-5 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg sm:text-sm"
                    style={{
                      backgroundColor: product.badgeColor || "#670047",
                    }}
                  >
                    {displayBadge}
                  </div>
                )}

                {discount && (
                  <div className="absolute left-5 top-5 rounded-full bg-[#4A6741] px-4 py-2 text-xs font-semibold text-white shadow-lg sm:text-sm">
                    -{discount}
                    {locale === "ar" ? "٪" : "%"}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleWishlist}
                  disabled={!hydrated}
                  aria-label="Wishlist"
                  className={`absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                    liked
                      ? "bg-[#670047] text-white"
                      : "bg-white/95 text-[#7A5C3A] hover:text-[#670047]"
                  }`}
                >
                  <Heart
                    size={20}
                    className={liked ? "fill-white text-white" : "text-current"}
                  />
                </button>
              </div>

              <StaggerContainer className="mt-5 flex gap-3 sm:gap-4">
                {images.map((img, index) => (
                  <StaggerItem key={`${img}-${index}`}>
                    <button
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Product image ${index + 1}`}
                      className={`overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        activeImage === index
                          ? "border-[#670047] shadow-md"
                          : "border-[#E8D7B6] hover:border-[#C9942A]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${displayName} ${index + 1}`}
                        width={110}
                        height={110}
                        className="h-20 w-20 object-cover transition-transform duration-500 hover:scale-110 sm:h-24 sm:w-24"
                      />
                    </button>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Reveal>{" "}
          <Reveal
            direction={locale === "ar" ? "left" : "right"}
            delay={0.12}
            duration={0.85}
          >
            <div>
              <span className="inline-flex rounded-full bg-[#C9942A]/10 px-3 py-1.5 text-sm font-semibold text-[#C9942A]">
                {displayCategory}
              </span>

              <h1 className="mt-4 text-3xl font-bold leading-tight text-[#2C1A0E] sm:text-4xl lg:text-[42px]">
                {displayName}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={
                        index < Math.floor(product.rating)
                          ? "fill-[#C9942A] text-[#C9942A]"
                          : "text-[#D8C8A4]"
                      }
                    />
                  ))}
                </div>

                <span className="font-bold text-[#C9942A]">
                  {product.rating}
                </span>

                <span className="text-sm text-[#7A5C3A]">
                  ({product.reviews} {t("reviews")})
                </span>
              </div>

              <div className="mt-7 flex items-end gap-2">
                <span className="text-3xl font-extrabold tracking-tight text-[#670047] sm:text-4xl">
                  {currentPrice}
                </span>

                <span className="mb-1 text-base font-medium text-[#7A5C3A]">
                  {misc("egp")}
                </span>
              </div>

              <p className="mt-7 border-b border-[#E8D7B6] pb-7 text-[15px] leading-8 text-[#7A5C3A] sm:text-base sm:leading-9">
                {displayDescription}
              </p>

              {product.contents && (
                <ProductContents contents={product.contents} />
              )}

              {extras && <ProductHighlights highlights={extras.highlights} />}

              {product.showWeightSelector !== false && (
                <div className="mt-8">
                  <h3 className="mb-4 font-semibold text-[#2C1A0E]">
                    {t("weight")}
                  </h3>

                  <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#E8D7B6] bg-white shadow-sm">
                    {weightOptions.map((item, index) => (
                      <label key={item.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name={`weight-${product.id}`}
                          value={item.value}
                          checked={selectedWeight === item.value}
                          onChange={() => setSelectedWeight(item.value)}
                          className="peer sr-only"
                        />

                        <span
                          className={`flex h-14 items-center justify-center text-sm font-semibold text-[#2C1A0E] transition-all duration-300 hover:bg-[#F8F1E6] peer-checked:bg-[#670047] peer-checked:text-white peer-checked:shadow-inner peer-checked:hover:bg-[#670047] sm:text-base ${
                            index !== 0 ? "border-l border-[#E8D7B6]" : ""
                          }`}
                        >
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <span className="mb-3 block font-medium text-[#2C1A0E]">
                  {t("quantity")}
                </span>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex h-12 items-center overflow-hidden rounded-xl border border-[#E8D7B6] bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((current) => Math.max(1, current - 1))
                      }
                      aria-label="Decrease quantity"
                      className="flex h-full w-12 items-center justify-center text-[#2C1A0E] transition-colors duration-300 hover:bg-[#F8F1E6] hover:text-[#670047]"
                    >
                      <Minus size={17} />
                    </button>

                    <span className="w-12 text-center font-bold text-[#2C1A0E]">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => setQuantity((current) => current + 1)}
                      aria-label="Increase quantity"
                      className="flex h-full w-12 items-center justify-center text-[#2C1A0E] transition-colors duration-300 hover:bg-[#F8F1E6] hover:text-[#670047]"
                    >
                      <Plus size={17} />
                    </button>
                  </div>

                  <div className="text-sm text-[#7A5C3A] sm:text-base">
                    {t("total")}{" "}
                    <span className="font-bold text-[#670047]">
                      {currentPrice * quantity} {misc("egp")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#670047] px-7 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(103,0,71,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#7D0056] hover:shadow-[0_15px_35px_rgba(103,0,71,0.25)] sm:text-lg"
                >
                  <ShoppingCart
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  <span>{t("addToCart")}</span>
                </button>

                <a
                  href="https://wa.me/201000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-7 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] hover:shadow-[0_15px_35px_rgba(37,211,102,0.2)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>

                  {t("whatsapp")}
                </a>
              </div>

              <StaggerContainer className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
                <StaggerItem>
                  <div className="group h-full rounded-2xl border border-[#E8D7B6] bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-5">
                    <div className="mb-2 text-2xl transition-transform duration-300 group-hover:scale-110 sm:mb-3 sm:text-3xl">
                      🛡️
                    </div>

                    <h4 className="text-xs font-bold text-[#2C1A0E] sm:text-sm">
                      {t("guaranteedQuality")}
                    </h4>

                    <p className="mt-1 text-[10px] leading-4 text-[#7A5C3A] sm:text-xs">
                      {t("bestIngredients")}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="group h-full rounded-2xl border border-[#E8D7B6] bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-5">
                    <div className="mb-2 text-2xl transition-transform duration-300 group-hover:scale-110 sm:mb-3 sm:text-3xl">
                      🚚
                    </div>

                    <h4 className="text-xs font-bold text-[#2C1A0E] sm:text-sm">
                      {t("fastDelivery")}
                    </h4>

                    <p className="mt-1 text-[10px] leading-4 text-[#7A5C3A] sm:text-xs">
                      {t("allGovernorates")}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="group h-full rounded-2xl border border-[#E8D7B6] bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-5">
                    <div className="mb-2 text-2xl transition-transform duration-300 group-hover:scale-110 sm:mb-3 sm:text-3xl">
                      🔄
                    </div>

                    <h4 className="text-xs font-bold text-[#2C1A0E] sm:text-sm">
                      {t("easyReplacement")}
                    </h4>

                    <p className="mt-1 text-[10px] leading-4 text-[#7A5C3A] sm:text-xs">
                      {t("replacement14Days")}
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </Reveal>
        </div>{" "}
        {extras && (
          <Reveal direction="up" duration={0.8} className="mt-16 lg:mt-20">
            <ProductTabs
              description={displayDescription}
              ingredients={extras.ingredients}
              nutrition={extras.nutrition}
              faq={extras.faq}
              reviews={extras.reviews}
            />
          </Reveal>
        )}
        <div className="mt-16 lg:mt-20">
          <Reveal direction="up">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#C9942A]" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9942A]">
                    Group Sweet
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#2C1A0E] sm:text-3xl">
                  {t("relatedProducts")}
                </h2>
              </div>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <StaggerItem key={item.id}>
                <ProductCard product={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
          <StaggerItem>
            <div className="group h-full rounded-3xl border border-[#E8D7B6] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F2E5] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#670047]">
                <Truck
                  size={25}
                  className="text-[#670047] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="font-bold text-[#2C1A0E]">{t("shippingTitle")}</h3>

              <p className="mt-2 text-sm leading-6 text-[#7A5C3A]">
                {t("shippingDesc")}
              </p>

              <div className="mx-auto mt-5 h-0.5 w-8 rounded-full bg-[#670047] transition-all duration-300 group-hover:w-16" />
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="group h-full rounded-3xl border border-[#E8D7B6] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F2E5] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#670047]">
                <Shield
                  size={25}
                  className="text-[#670047] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="font-bold text-[#2C1A0E]">{t("qualityTitle")}</h3>

              <p className="mt-2 text-sm leading-6 text-[#7A5C3A]">
                {t("qualityDesc")}
              </p>

              <div className="mx-auto mt-5 h-0.5 w-8 rounded-full bg-[#670047] transition-all duration-300 group-hover:w-16" />
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="group h-full rounded-3xl border border-[#E8D7B6] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F2E5] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#670047]">
                <RefreshCw
                  size={25}
                  className="text-[#670047] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="font-bold text-[#2C1A0E]">{t("returnTitle")}</h3>

              <p className="mt-2 text-sm leading-6 text-[#7A5C3A]">
                {t("returnDesc")}
              </p>

              <div className="mx-auto mt-5 h-0.5 w-8 rounded-full bg-[#670047] transition-all duration-300 group-hover:w-16" />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
