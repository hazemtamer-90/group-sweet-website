"use client";

import { useState } from "react";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

import {
  Heart,
  ShoppingCart,
  Trash2,
  X,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { useWishlist } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";

import CartToast from "@/components/ui/CartToast";

import type { Product } from "@/data/products";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
}: WishlistDrawerProps) {
  const locale = useLocale();

  const t = useTranslations("wishlist");
  const misc = useTranslations("misc");

  const wishlist = useWishlist();

  const addToCart = useCartStore((state) => state.addToCart);

  const [showToast, setShowToast] = useState(false);

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1, "1");

    setShowToast(true);

    window.setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            key="wishlist-overlay"
            onClick={onClose}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[90] bg-black/45 backdrop-blur-[3px]"
          />

          {/* Drawer */}

          <motion.aside
            key="wishlist-drawer"
            initial={{
              x: locale === "ar" ? "100%" : "-100%",
              opacity: 0.7,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: locale === "ar" ? "100%" : "-100%",
              opacity: 0.7,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 31,
              mass: 0.85,
            }}
            className={`fixed top-0 z-[100] flex h-[100dvh] w-full max-w-[420px] flex-col overflow-hidden bg-[#FFFDF8] shadow-2xl ${
              locale === "ar" ? "right-0" : "left-0"
            }`}
          >
            {/* Decorative Background */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.08, 0.14, 0.08],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-[#670047] blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.08, 0.13, 0.08],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-24 bottom-24 h-64 w-64 rounded-full bg-[#C9942A] blur-3xl"
              />
            </div>

            {/* Header */}

            <motion.div
              initial={{
                y: -20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.12,
                duration: 0.35,
              }}
              className="relative z-10 flex items-center justify-between border-b border-[#EEE2CF] bg-[#FFFDF8]/90 px-5 py-5 backdrop-blur-md sm:px-6"
            >
              <div className="flex items-center gap-3">
                {/* Heart Icon */}

                <motion.div
                  initial={{
                    scale: 0,
                    rotate: -20,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 350,
                    damping: 18,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#670047] text-white shadow-lg shadow-[#670047]/20"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Heart size={21} className="fill-white" />
                  </motion.div>

                  {wishlist.items.length > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#FFFDF8] bg-[#C9942A] px-1 text-[10px] font-bold text-white">
                      {wishlist.items.length}
                    </span>
                  )}
                </motion.div>

                <div>
                  <h2 className="text-lg font-bold text-[#2C1A0E]">
                    {t("title")}
                  </h2>

                  <p className="mt-0.5 text-sm text-[#8B6E4A]">
                    {wishlist.items.length} {t("items")}
                  </p>
                </div>
              </div>

              {/* Close */}

              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{
                  scale: 1.08,
                  rotate: 90,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.2,
                }}
                aria-label="Close wishlist"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EEE2CF] bg-white text-[#2C1A0E] shadow-sm transition-colors hover:bg-[#F5EDD6]"
              >
                <X size={19} />
              </motion.button>
            </motion.div>

            {/* Content */}

            <div className="relative z-10 flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {wishlist.items.length === 0 ? (
                  /* Empty Wishlist */

                  <motion.div
                    key="empty-wishlist"
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                    }}
                    className="flex h-full flex-col items-center justify-center px-7 text-center"
                  >
                    {/* Animated Heart */}

                    <div className="relative mb-8">
                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex h-28 w-28 items-center justify-center rounded-full bg-[#F5EDD6]"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 1.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Heart
                            size={46}
                            strokeWidth={1.7}
                            className="text-[#670047]"
                          />
                        </motion.div>
                      </motion.div>

                      {/* Sparkles */}

                      <motion.div
                        animate={{
                          y: [-3, 3, -3],
                          rotate: [0, 15, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute -right-2 top-2"
                      >
                        <Sparkles size={20} className="text-[#C9942A]" />
                      </motion.div>

                      <motion.div
                        animate={{
                          y: [3, -3, 3],
                          opacity: [0.4, 0.9, 0.4],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                        }}
                        className="absolute -left-2 bottom-3"
                      >
                        <Sparkles size={15} className="text-[#670047]" />
                      </motion.div>
                    </div>

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.25,
                      }}
                      className="mb-3 text-2xl font-bold text-[#2C1A0E]"
                    >
                      {t("emptyTitle")}
                    </motion.h3>

                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.35,
                      }}
                      className="mb-8 max-w-[290px] leading-7 text-[#8B6E4A]"
                    >
                      {t("emptyDescription")}
                    </motion.p>

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.45,
                      }}
                      whileHover={{
                        scale: 1.04,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                    >
                      <Link
                        href="/products"
                        onClick={onClose}
                        prefetch
                        className="flex items-center justify-center gap-2 rounded-full bg-[#670047] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#670047]/20 transition-colors hover:bg-[#7A0052]"
                      >
                        <span>{t("continueShopping")}</span>

                        <ArrowIcon size={17} />
                      </Link>
                    </motion.div>
                  </motion.div>
                ) : (
                  /* Wishlist Products */

                  <motion.div
                    key="wishlist-products"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="h-full overflow-y-auto px-4 py-5 sm:px-5"
                  >
                    <div className="space-y-4">
                      <AnimatePresence initial={false}>
                        {wishlist.items.map((product, index) => {
                          const displayName =
                            locale === "en" ? product.nameEn : product.name;

                          const displayCategory =
                            locale === "en"
                              ? product.categoryEn
                              : product.category;

                          return (
                            <motion.div
                              layout
                              key={product.id}
                              initial={{
                                opacity: 0,
                                x: locale === "ar" ? 40 : -40,
                                scale: 0.96,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                              }}
                              exit={{
                                opacity: 0,
                                x: locale === "ar" ? 80 : -80,
                                scale: 0.92,
                              }}
                              transition={{
                                delay: Math.min(index * 0.06, 0.3),
                                type: "spring",
                                stiffness: 300,
                                damping: 26,
                              }}
                              whileHover={{
                                y: -2,
                              }}
                              className="group relative flex gap-3 overflow-hidden rounded-2xl border border-[#EFE4C8] bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
                            >
                              {/* Product Image */}

                              <Link
                                href={`/products/${product.slug}`}
                                onClick={onClose}
                                className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-xl bg-[#F5EDD6]"
                              >
                                <Image
                                  src={product.image}
                                  alt={displayName}
                                  fill
                                  sizes="92px"
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                              </Link>

                              {/* Product Details */}

                              <div className="min-w-0 flex flex-1 flex-col">
                                <div className="flex items-start justify-between gap-2">
                                  <div className="min-w-0">
                                    <Link
                                      href={`/products/${product.slug}`}
                                      onClick={onClose}
                                      className="line-clamp-2 text-sm font-bold leading-5 text-[#2C1A0E] transition-colors hover:text-[#670047]"
                                    >
                                      {displayName}
                                    </Link>

                                    <p className="mt-1 text-xs text-[#8B6E4A]">
                                      {displayCategory}
                                    </p>
                                  </div>

                                  {/* Delete */}

                                  <motion.button
                                    type="button"
                                    onClick={() => wishlist.remove(product.id)}
                                    whileHover={{
                                      scale: 1.1,
                                    }}
                                    whileTap={{
                                      scale: 0.85,
                                    }}
                                    aria-label="Remove from wishlist"
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-100 text-red-400 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                                  >
                                    <Trash2 size={15} />
                                  </motion.button>
                                </div>

                                <div className="mt-auto flex items-end justify-between gap-2 pt-2">
                                  {/* Price */}

                                  <div className="whitespace-nowrap">
                                    <span className="text-lg font-bold text-[#670047]">
                                      {product.price}
                                    </span>

                                    <span className="mx-1 text-[11px] font-semibold text-[#8B6E4A]">
                                      {misc("egp")}
                                    </span>
                                  </div>

                                  {/* Add To Cart */}

                                  <motion.button
                                    type="button"
                                    onClick={() => handleAddToCart(product)}
                                    whileHover={{
                                      scale: 1.03,
                                    }}
                                    whileTap={{
                                      scale: 0.95,
                                    }}
                                    className="flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#670047] px-3 text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-[#7A0052]"
                                  >
                                    <ShoppingCart size={14} />

                                    <span className="whitespace-nowrap">
                                      {t("addToCart")}
                                    </span>
                                  </motion.button>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}

            <AnimatePresence>
              {wishlist.items.length > 0 && (
                <motion.div
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: 50,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 25,
                  }}
                  className="relative z-20 border-t border-[#EFE4C8] bg-[#FFFDF8]/95 p-5 backdrop-blur-md"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >
                    <Link
                      href="/wishlist"
                      onClick={onClose}
                      prefetch
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#670047] py-3.5 font-semibold text-white shadow-lg shadow-[#670047]/20 transition-colors hover:bg-[#7A0052]"
                    >
                      <Heart size={17} />

                      <span>{t("viewWishlist")}</span>

                      <ArrowIcon size={17} />
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toast */}

            <CartToast show={showToast} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
