"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Grid2X2, List, Search, SlidersHorizontal } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";
import PageHero from "@/components/common/PageHero";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

import { products } from "@/data/products";

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
      setCurrentPage(1);
    }
  }, [searchParams]);

  const categories = useMemo(
    () => [
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
        name: locale === "ar" ? "علب" : "Boxes",
        count: products.filter((p) => p.category === "علب").length,
      },
      {
        id: "cream",
        name: locale === "ar" ? "قشطة" : "Cream",
        count: products.filter((p) => p.category === "قشطة").length,
      },
    ],
    [locale],
  );

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        normalizedSearch === "" ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.nameEn.toLowerCase().includes(normalizedSearch);

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
  }, [search, activeCategory]);

  const sortedProducts = useMemo(() => {
    const result = [...filteredProducts];

    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.reviews - a.reviews);
        break;

      case "priceLow":
        result.sort((a, b) => a.price - b.price);
        break;

      case "priceHigh":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [filteredProducts, sortBy]);

  const productsPerPage = 8;

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    requestAnimationFrame(() => {
      const productsSection = document.getElementById("products-grid");

      if (productsSection) {
        const offset = 120;

        const top =
          productsSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    });
  };

  const animationKey = `${activeCategory}-${sortBy}-${search}-${currentPage}-${view}`;
  return (
    <>
      <Header />

      <main className="min-h-screen overflow-hidden bg-[#FAF5E9]">
        <Reveal direction="down" duration={0.8}>
          <PageHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />
        </Reveal>

        <section className="relative mx-auto max-w-7xl px-5 py-10 lg:py-14">
          <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C9942A]/5 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 top-96 h-80 w-80 rounded-full bg-[#670047]/5 blur-3xl" />

          <div className="relative z-10">
            <Reveal direction="up" delay={0.1}>
              <div className="mb-8 flex flex-col gap-5">
                <div className="relative mx-auto w-full max-w-3xl">
                  <div className="group relative">
                    <Search
                      size={20}
                      className={`absolute top-1/2 z-10 -translate-y-1/2 text-[#7A5C3A] transition-colors duration-300 group-focus-within:text-[#670047] ${
                        locale === "ar" ? "right-5" : "left-5"
                      }`}
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                      }}
                      placeholder={t("searchPlaceholder")}
                      className={`w-full rounded-2xl border border-[#E8D7B6] bg-white py-4 shadow-sm outline-none transition-all duration-300 placeholder:text-[#A58A6B] focus:border-[#670047] focus:shadow-[0_10px_35px_rgba(103,0,71,0.08)] ${
                        locale === "ar" ? "pl-5 pr-14" : "pl-14 pr-5"
                      }`}
                    />
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex overflow-hidden rounded-xl border border-[#E8D7B6] bg-white shadow-sm">
                      <button
                        type="button"
                        aria-label="List view"
                        onClick={() => setView("list")}
                        className={`relative flex h-11 w-11 items-center justify-center transition-colors duration-300 ${
                          view === "list"
                            ? "text-white"
                            : "text-[#7A5C3A] hover:bg-[#FAF5E9] hover:text-[#670047]"
                        }`}
                      >
                        {view === "list" && (
                          <motion.span
                            layoutId="products-view-background"
                            className="absolute inset-0 bg-[#670047]"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}

                        <List size={18} className="relative z-10" />
                      </button>

                      <button
                        type="button"
                        aria-label="Grid view"
                        onClick={() => setView("grid")}
                        className={`relative flex h-11 w-11 items-center justify-center transition-colors duration-300 ${
                          view === "grid"
                            ? "text-white"
                            : "text-[#7A5C3A] hover:bg-[#FAF5E9] hover:text-[#670047]"
                        }`}
                      >
                        {view === "grid" && (
                          <motion.span
                            layoutId="products-view-background"
                            className="absolute inset-0 bg-[#670047]"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}

                        <Grid2X2 size={18} className="relative z-10" />
                      </button>
                    </div>

                    <div className="relative">
                      <SlidersHorizontal
                        size={16}
                        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-[#7A5C3A] ${
                          locale === "ar" ? "right-4" : "left-4"
                        }`}
                      />

                      <select
                        value={sortBy}
                        onChange={(e) => {
                          setSortBy(e.target.value);
                          setCurrentPage(1);
                        }}
                        className={`h-11 appearance-none rounded-xl border border-[#E8D7B6] bg-white outline-none transition-all duration-300 hover:border-[#C9942A] focus:border-[#670047] ${
                          locale === "ar" ? "pl-10 pr-11" : "pl-11 pr-10"
                        }`}
                      >
                        <option value="default">
                          {t("sortOptions.default")}
                        </option>

                        <option value="popular">
                          {t("sortOptions.popular")}
                        </option>

                        <option value="priceLow">
                          {t("sortOptions.priceLow")}
                        </option>

                        <option value="priceHigh">
                          {t("sortOptions.priceHigh")}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.18}>
              <div className="mb-10 overflow-hidden">
                <div className="flex gap-3 overflow-x-auto pb-3">
                  {categories.map((category) => {
                    const active = activeCategory === category.id;

                    return (
                      <motion.button
                        key={category.id}
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setCurrentPage(1);
                        }}
                        className={`relative shrink-0 whitespace-nowrap rounded-full px-6 py-3 transition-colors duration-300 ${
                          active
                            ? "text-white"
                            : "border border-[#E8D7B6] bg-white text-[#2C1A0E] hover:border-[#670047]"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="active-product-category"
                            className="absolute inset-0 rounded-full bg-[#670047]"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}

                        <div className="relative z-10 flex items-center gap-2">
                          <span>{category.name}</span>

                          <span
                            className={`rounded-full px-2 py-0.5 text-xs transition-colors ${
                              active
                                ? "bg-white/15 text-white"
                                : "bg-black/5 text-[#7A5C3A]"
                            }`}
                          >
                            {category.count}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.22}>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-[#7A5C3A]">
                  <span className="font-bold text-[#670047]">
                    {sortedProducts.length}
                  </span>{" "}
                  {sortedProducts.length === 1
                    ? t("results.one")
                    : t("results.many")}
                </p>
              </div>
            </Reveal>

            <div id="products-grid" className="scroll-mt-28">
              <AnimatePresence mode="wait">
                {displayedProducts.length > 0 ? (
                  <motion.div
                    key={animationKey}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <StaggerContainer
                      className={
                        view === "grid"
                          ? "grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
                          : "grid grid-cols-1 gap-6 sm:grid-cols-2"
                      }
                    >
                      {displayedProducts.map((product) => (
                        <StaggerItem key={product.id}>
                          <motion.div
                            layout
                            whileHover={{ y: -4 }}
                            transition={{
                              layout: {
                                duration: 0.3,
                              },
                            }}
                          >
                            <ProductCard product={product} />
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty-products"
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-[#E8D7B6] bg-white px-6 text-center shadow-sm"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#670047]/5">
                      <Search size={27} className="text-[#670047]" />
                    </div>

                    <h3 className="text-xl font-bold text-[#2C1A0E]">
                      {locale === "ar"
                        ? "لا توجد منتجات مطابقة"
                        : "No matching products"}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-7 text-[#7A5C3A]">
                      {locale === "ar"
                        ? "جرّب البحث باسم مختلف أو اختر تصنيفاً آخر."
                        : "Try another search term or choose a different category."}
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setSearch("");
                        setActiveCategory("all");
                        setSortBy("default");
                        setCurrentPage(1);
                      }}
                      className="mt-6 rounded-full bg-[#670047] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7A0052] hover:shadow-lg"
                    >
                      {locale === "ar"
                        ? "عرض جميع المنتجات"
                        : "View all products"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {totalPages > 1 && (
              <Reveal direction="up" delay={0.15}>
                <div className="mt-12 flex justify-start gap-2 overflow-x-auto px-2 pb-3 md:justify-center">
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1;
                    const active = currentPage === page;

                    return (
                      <motion.button
                        key={page}
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => handlePageChange(page)}
                        className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors md:h-11 md:w-11 md:text-sm ${
                          active
                            ? "text-white"
                            : "border border-[#E8D7B6] bg-white text-[#2C1A0E] hover:border-[#670047] hover:text-[#670047]"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="active-products-page"
                            className="absolute inset-0 rounded-full bg-[#670047] shadow-[0_8px_20px_rgba(103,0,71,0.18)]"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}

                        <span className="relative z-10">{page}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
