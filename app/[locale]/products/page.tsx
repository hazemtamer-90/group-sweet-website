"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";
import { products } from "@/data/products";
import { Grid2X2, List } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const t = useTranslations("productsPage");
  const locale = useLocale();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const category = searchParams.get("category");

    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.nameEn.toLowerCase().includes(search.toLowerCase());

    let matchesCategory = false;

    switch (activeCategory) {
      case "all":
        matchesCategory = true;
        break;

      case "coconut":
        matchesCategory = product.category === "جوز الهند";
        break;

      case "malban":
        matchesCategory = product.category === "ملبن";
        break;

      case "nougat":
        matchesCategory = product.category === "نوجا";
        break;

      case "dry":
        matchesCategory = product.category === "نواشف";
        break;

      case "round":
        matchesCategory = product.category === "مدورات";
        break;

      case "boxes":
        matchesCategory = product.category === "علب";
        break;

      case "cream":
        matchesCategory = product.category === "قشطة";
        break;

      default:
        matchesCategory = true;
    }

    return matchesSearch && matchesCategory;
  });
  const sortedProducts = [...filteredProducts];
  const categories = [
    {
      id: "all",
      name: locale === "ar" ? "الكل" : "All",
      count: products.length,
    },
    {
      id: "coconut",
      name: locale === "ar" ? "جوز الهند" : "Coconut",
      count: products.filter((p) => p.category === "جوز الهند").length,
    },
    {
      id: "malban",
      name: locale === "ar" ? "ملبن" : "Malban",
      count: products.filter((p) => p.category === "ملبن").length,
    },
    {
      id: "nougat",
      name: locale === "ar" ? "نوجا" : "Nougat",
      count: products.filter((p) => p.category === "نوجا").length,
    },
    {
      id: "dry",
      name: locale === "ar" ? "نواشف" : "Dry Sweets",
      count: products.filter((p) => p.category === "نواشف").length,
    },
    {
      id: "round",
      name: locale === "ar" ? "مدورات" : "Round Sweets",
      count: products.filter((p) => p.category === "مدورات").length,
    },
    {
      id: "boxes",
      name: locale === "ar" ? "علب" : " Boxes",
      count: products.filter((p) => p.category === "علب").length,
    },
    {
      id: "cream",
      name: locale === "ar" ? "قشطة" : "Cream",
      count: products.filter((p) => p.category === "قشطة").length,
    },
  ];
  switch (sortBy) {
    case "popular":
      sortedProducts.sort((a, b) => b.reviews - a.reviews);
      break;

    case "priceLow":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "priceHigh":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
  }
  const productsPerPage = 8;

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#FAF5E9]">
        {/* Hero */}
        <section className="bg-[#2C1A0E] py-16">
          <div className="mx-auto max-w-7xl px-5 text-center">
            <h1 className="text-5xl font-bold text-white">{t("heroTitle")}</h1>

            <p className="mt-4 text-lg text-[#E8C472]">{t("heroSubtitle")}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10">
          {/* Toolbar */}

          <div className="mb-8 flex flex-col gap-5">
            {/* Search */}

            <div className="relative mx-auto w-full max-w-3xl">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={t("searchPlaceholder")}
                className="w-full rounded-2xl border border-[#E8D7B6] bg-white py-4 pl-5 pr-12 outline-none transition focus:border-[#670047]"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7A5C3A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {/* Right Side */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setView("list")}
                  className={`rounded-xl p-3 transition ${
                    view === "list"
                      ? "bg-[#670047] text-white"
                      : "border border-[#E8D7B6] bg-white"
                  }`}
                >
                  <List size={18} />
                </button>

                <button
                  onClick={() => setView("grid")}
                  className={`rounded-xl p-3 transition ${
                    view === "grid"
                      ? "bg-[#670047] text-white"
                      : "border border-[#E8D7B6] bg-white"
                  }`}
                >
                  <Grid2X2 size={18} />
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="rounded-xl border border-[#E8D7B6] bg-white px-4 py-3 outline-none"
                >
                  <option value="default">{t("sortOptions.default")}</option>
                  <option value="popular">{t("sortOptions.popular")}</option>
                  <option value="priceLow">{t("sortOptions.priceLow")}</option>
                  <option value="priceHigh">
                    {t("sortOptions.priceHigh")}
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* Categories */}

          <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`rounded-full px-6 py-3 whitespace-nowrap transition ${
                  activeCategory === category.id
                    ? "bg-[#670047] text-white"
                    : "border border-[#E8D7B6] bg-white text-[#2C1A0E] hover:border-[#670047]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{category.name}</span>

                  <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs">
                    {category.count}
                  </span>
                </div>
              </button>
            ))}
            ,
          </div>
          <p className="mb-6 text-sm text-[#7A5C3A]">
            {sortedProducts.length}{" "}
            {sortedProducts.length === 1 ? t("results.one") : t("results.many")}
          </p>

          <div
            className={
              view === "grid"
                ? "grid grid-cols-2 lg:grid-cols-4 gap-6"
                : "grid grid-cols-2 gap-6"
            }
          >
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`h-11 w-11 rounded-xl transition ${
                  currentPage === index + 1
                    ? "bg-[#670047] text-white"
                    : "border border-[#E8D7B6] bg-white text-[#2C1A0E] hover:border-[#670047]"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
