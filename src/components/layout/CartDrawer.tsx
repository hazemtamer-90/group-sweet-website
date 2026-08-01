"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Link } from "@/i18n/navigation";
import WalletLoader from "@/components/ui/WalletLoader";

import {
  X,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { useLocale, useTranslations } from "next-intl";
import { useCartStore } from "@/store/cartStore";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const locale = useLocale();

  const t = useTranslations("cart");
  const misc = useTranslations("misc");

  const { items, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const isArabic = locale === "ar";

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const drawerVariants: Variants = {
    hidden: {
      x: isArabic ? "-100%" : "100%",
    },

    visible: {
      x: 0,

      transition: {
        type: "spring",
        stiffness: 280,
        damping: 30,
        mass: 0.8,
      },
    },

    exit: {
      x: isArabic ? "-100%" : "100%",

      transition: {
        duration: 0.28,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -12,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.12,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const emptyVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        delay: 0.12,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cartItemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isArabic ? -25 : 25,
      scale: 0.97,
    },

    visible: {
      opacity: 1,
      x: 0,
      scale: 1,

      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },

    exit: {
      opacity: 0,
      x: isArabic ? -45 : 45,
      scale: 0.92,
      height: 0,
      marginBottom: 0,

      transition: {
        duration: 0.3,
      },
    },
  };

  const footerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.15,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const getWeightLabel = (weight: string) => {
    if (isArabic) {
      if (weight === "0.25") return "الوزن: ربع كيلو";
      if (weight === "0.5") return "الوزن: نصف كيلو";

      return "الوزن: كيلو";
    }

    if (weight === "0.25") return "Weight: 250g";
    if (weight === "0.5") return "Weight: 500g";

    return "Weight: 1kg";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.button
            type="button"
            aria-label={isArabic ? "إغلاق سلة التسوق" : "Close shopping cart"}
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
              duration: 0.3,
            }}
            className="fixed inset-0 z-[60] cursor-default bg-[#160B06]/55 backdrop-blur-[4px]"
          />

          {/* Drawer */}

          <motion.aside
            dir={isArabic ? "rtl" : "ltr"}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 z-[70] flex h-[100dvh] w-full max-w-md flex-col overflow-hidden bg-[#FFFBF0] shadow-[0_0_60px_rgba(0,0,0,0.25)] ${
              isArabic ? "left-0" : "right-0"
            }`}
          >
            {/* Decorative Effects */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#C9942A]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[#670047]/10 blur-3xl" />

            {/* Header */}

            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex min-h-[82px] items-center justify-between border-b border-[#E8D7B6]/80 bg-[#FFFBF0]/90 px-5 backdrop-blur-xl"
            >
              {/* Close */}

              <motion.button
                type="button"
                onClick={onClose}
                aria-label={
                  isArabic ? "إغلاق سلة التسوق" : "Close shopping cart"
                }
                whileHover={{
                  rotate: 90,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.88,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 18,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8D7B6] bg-white/80 text-[#2C1A0E] shadow-sm transition-colors hover:border-[#670047]/30 hover:bg-[#F3E6EE] hover:text-[#670047]"
              >
                <X size={19} />
              </motion.button>

              {/* Heading */}

              <div className="flex items-center gap-2.5">
                <motion.div
                  initial={{
                    scale: 0.7,
                    rotate: -10,
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#670047]/10"
                >
                  <ShoppingCart size={18} className="text-[#670047]" />
                </motion.div>

                <h2 className="text-xl font-bold text-[#2C1A0E]">
                  {t("heading")}
                </h2>

                <AnimatePresence mode="popLayout">
                  {itemCount > 0 && (
                    <motion.span
                      key={itemCount}
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 22,
                      }}
                      className="flex min-w-6 items-center justify-center rounded-full bg-[#670047] px-2 py-1 text-[11px] font-bold text-white shadow-sm"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Content */}

            <div className="relative z-10 flex-1 overflow-y-auto overscroll-contain p-4">
              <AnimatePresence mode="wait">
                {items.length === 0 ? (
                  /* Empty Cart */

                  <motion.div
                    key="empty-cart"
                    variants={emptyVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    className="flex h-full min-h-[450px] flex-col items-center justify-center px-5 text-center"
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                      }}
                      className="mb-8"
                    >
                      <WalletLoader />
                    </motion.div>

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.28,
                        duration: 0.4,
                      }}
                      className="mb-2 text-2xl font-bold text-[#2C1A0E]"
                    >
                      {t("empty.title")}
                    </motion.h3>

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.35,
                        duration: 0.4,
                      }}
                      className="mb-8 max-w-[280px] leading-7 text-[#7A5C3A]"
                    >
                      {t("empty.sub")}
                    </motion.p>

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.42,
                        duration: 0.4,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                    >
                      <Link
                        href="/products"
                        onClick={onClose}
                        prefetch
                        className="inline-flex items-center gap-2 rounded-full bg-[#670047] px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(103,0,71,0.18)] transition-colors hover:bg-[#7A0052]"
                      >
                        {t("browseCta")}

                        <ArrowIcon size={17} />
                      </Link>
                    </motion.div>
                  </motion.div>
                ) : (
                  /* Cart Items */

                  <motion.div
                    key="cart-items"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},

                      visible: {
                        transition: {
                          staggerChildren: 0.07,
                        },
                      },
                    }}
                    className="space-y-4"
                  >
                    <AnimatePresence initial={false} mode="popLayout">
                      {items.map((item) => {
                        const displayName =
                          locale === "en" ? item.nameEn : item.name;

                        return (
                          <motion.div
                            layout
                            key={`${item.id}-${item.selectedWeight}`}
                            variants={cartItemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            whileHover={{
                              y: -2,
                            }}
                            className="group relative flex gap-3 overflow-hidden rounded-2xl border border-[#E8D7B6] bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:gap-4 sm:p-4"
                          >
                            {/* Product Image */}

                            <motion.div
                              layout
                              className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#F5EDD6]"
                            >
                              <Image
                                src={item.image}
                                alt={displayName}
                                fill
                                sizes="80px"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />

                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </motion.div>

                            {/* Information */}

                            <div className="min-w-0 flex-1">
                              <h3 className="line-clamp-2 pe-7 text-sm font-bold leading-6 text-[#2C1A0E] sm:text-base">
                                {displayName}
                              </h3>

                              <p className="mt-0.5 text-xs text-[#7A5C3A] sm:text-sm">
                                {getWeightLabel(item.selectedWeight)}
                              </p>

                              {/* Quantity + Price */}

                              <div className="mt-3 flex items-end justify-between gap-2">
                                <div>
                                  <div className="flex items-center rounded-full border border-[#E8D7B6] bg-[#FAF5E9] p-1">
                                    <motion.button
                                      type="button"
                                      whileTap={{
                                        scale: 0.8,
                                      }}
                                      onClick={() =>
                                        decreaseQuantity(
                                          item.id,
                                          item.selectedWeight,
                                        )
                                      }
                                      className="flex h-7 w-7 items-center justify-center rounded-full text-[#2C1A0E] transition-colors hover:bg-white"
                                    >
                                      <Minus size={13} />
                                    </motion.button>

                                    <motion.span
                                      key={item.quantity}
                                      initial={{
                                        opacity: 0,
                                        scale: 0.7,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        scale: 1,
                                      }}
                                      className="min-w-7 text-center text-sm font-bold text-[#2C1A0E]"
                                    >
                                      {item.quantity}
                                    </motion.span>

                                    <motion.button
                                      type="button"
                                      whileTap={{
                                        scale: 0.8,
                                      }}
                                      onClick={() =>
                                        increaseQuantity(
                                          item.id,
                                          item.selectedWeight,
                                        )
                                      }
                                      className="flex h-7 w-7 items-center justify-center rounded-full bg-[#670047] text-white shadow-sm transition-colors hover:bg-[#7A0052]"
                                    >
                                      <Plus size={13} />
                                    </motion.button>
                                  </div>

                                  <div className="mt-1.5 whitespace-nowrap text-[11px] text-[#9B7A4A]">
                                    {item.quantity} × {item.price} {misc("egp")}
                                  </div>
                                </div>

                                <motion.div
                                  key={item.price * item.quantity}
                                  initial={{
                                    opacity: 0,
                                    y: 5,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    y: 0,
                                  }}
                                  transition={{
                                    duration: 0.2,
                                  }}
                                  className="whitespace-nowrap text-base font-bold text-[#670047] sm:text-lg"
                                >
                                  {item.price * item.quantity}{" "}
                                  <span className="text-xs font-semibold">
                                    {misc("egp")}
                                  </span>
                                </motion.div>
                              </div>
                            </div>

                            {/* Remove */}

                            <motion.button
                              type="button"
                              aria-label={
                                isArabic ? "حذف المنتج" : "Remove product"
                              }
                              onClick={() =>
                                removeFromCart(item.id, item.selectedWeight)
                              }
                              whileHover={{
                                scale: 1.08,
                                rotate: 5,
                              }}
                              whileTap={{
                                scale: 0.85,
                              }}
                              className={`absolute top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#A65A5A] transition-colors hover:bg-red-50 hover:text-red-600 ${
                                isArabic ? "left-3" : "right-3"
                              }`}
                            >
                              <Trash2 size={15} />
                            </motion.button>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Checkout Footer */}

            <AnimatePresence>
              {items.length > 0 && (
                <motion.div
                  variants={footerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    opacity: 0,
                    y: 25,
                  }}
                  className="relative z-20 border-t border-[#E8D7B6] bg-[#FFFBF0]/95 px-5 pb-[max(20px,env(safe-area-inset-bottom))] pt-5 shadow-[0_-10px_30px_rgba(44,26,14,0.05)] backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <span className="block text-sm font-semibold text-[#2C1A0E]">
                        {t("total")}
                      </span>

                      <span className="mt-0.5 block text-[11px] text-[#9B7A4A]">
                        {itemCount}{" "}
                        {isArabic ? "منتج في السلة" : "items in cart"}
                      </span>
                    </div>

                    <motion.span
                      key={total}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: 4,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="text-2xl font-extrabold text-[#670047]"
                    >
                      {total}{" "}
                      <span className="text-sm font-semibold">
                        {misc("egp")}
                      </span>
                    </motion.span>
                  </div>

                  <motion.div
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >
                    <Link
                      href="/cart"
                      onClick={onClose}
                      prefetch
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#670047] py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(103,0,71,0.20)] transition-colors hover:bg-[#7A0052]"
                    >
                      <span>{t("checkout")}</span>

                      <ArrowIcon
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
