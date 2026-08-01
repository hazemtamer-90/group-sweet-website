"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { navigationLinks } from "./NavigationLinks";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNavigation({
  open,
  onClose,
}: MobileNavigationProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("header");

  const isArabic = locale === "ar";

  useEffect(() => {
    if (!open) return;

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
  }, [open, onClose]);

  const drawerVariants: Variants = {
    hidden: {
      x: isArabic ? "100%" : "-100%",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 30,
        mass: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.055,
      },
    },
    exit: {
      x: isArabic ? "100%" : "-100%",
      transition: {
        duration: 0.28,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const navVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.065,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isArabic ? 24 : -24,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const footerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        duration: 0.4,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label={isArabic ? "إغلاق القائمة" : "Close menu"}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-[60] cursor-default bg-[#160B06]/55 backdrop-blur-[4px] lg:hidden"
          />

          {/* Drawer */}
          <motion.aside
            dir={isArabic ? "rtl" : "ltr"}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 z-[70] flex h-[100dvh] w-[min(86vw,340px)] flex-col overflow-hidden bg-[#FAF5E9] shadow-[0_0_60px_rgba(0,0,0,0.25)] lg:hidden ${
              isArabic ? "right-0" : "left-0"
            }`}
          >
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#C9942A]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#670047]/10 blur-3xl" />

            {/* Header */}
            <motion.div
              variants={headerVariants}
              className="relative z-10 border-b border-[#E8D7B6]/80 px-5 py-5"
            >
              <div className="flex items-center justify-between gap-4">
                {/* Brand */}
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex min-w-0 items-center gap-3"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: 2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                    className="shrink-0"
                  >
                    <Image
                      src="/images/logo/logo.png"
                      alt="Group Sweet"
                      width={72}
                      height={72}
                      priority
                      className="h-14 w-auto object-contain"
                    />
                  </motion.div>

                  <div className={isArabic ? "text-right" : "text-left"}>
                    <h2 className="text-base font-bold leading-tight text-[#670047]">
                      {isArabic ? "جروب سويت" : "Group Sweet"}
                    </h2>

                    <p className="mt-0.5 text-xs font-semibold text-[#7A5C3A]">
                      {isArabic ? "Group Sweet" : "جروب سويت"}
                    </p>

                    <p className="mt-1 text-[10px] tracking-[0.18em] text-[#9B7A4A]">
                      SINCE 1927
                    </p>
                  </div>
                </Link>

                {/* Close */}
                <motion.button
                  type="button"
                  onClick={onClose}
                  aria-label={isArabic ? "إغلاق القائمة" : "Close menu"}
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8D7B6] bg-white/70 text-[#2C1A0E] shadow-sm backdrop-blur-sm transition-colors hover:border-[#670047]/30 hover:bg-[#F3E6EE] hover:text-[#670047]"
                >
                  <X size={20} />
                </motion.button>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="relative z-10 flex-1 overflow-y-auto px-4 py-6">
              <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-2"
              >
                {navigationLinks.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href ||
                        pathname.startsWith(`${item.href}/`);

                  return (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      whileTap={{
                        scale: 0.98,
                      }}
                    >
                      <Link
                        href={item.href}
                        prefetch
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={`group relative flex min-h-[54px] items-center overflow-hidden rounded-2xl px-5 py-4 text-[15px] font-semibold transition-colors duration-300 ${
                          active
                            ? "text-[#670047]"
                            : "text-[#2C1A0E] hover:text-[#670047]"
                        }`}
                      >
                        {/* Hover Background */}
                        <span
                          className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                            active
                              ? "bg-[#F3E6EE]"
                              : "bg-transparent group-hover:bg-[#F5EDD6]"
                          }`}
                        />

                        {/* Active Indicator */}
                        {active && (
                          <motion.span
                            layoutId="mobile-active-indicator"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 28,
                            }}
                            className={`absolute bottom-3 top-3 w-1 rounded-full bg-[#670047] ${
                              isArabic ? "right-0" : "left-0"
                            }`}
                          />
                        )}

                        {/* Active Glow */}
                        {active && (
                          <motion.span
                            layoutId="mobile-active-glow"
                            className={`absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#670047]/10 blur-xl ${
                              isArabic ? "right-0" : "left-0"
                            }`}
                          />
                        )}

                        <motion.span
                          className="relative z-10"
                          whileHover={{
                            x: isArabic ? -5 : 5,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                        >
                          {t(item.translationKey)}
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>
            </div>

            {/* Footer */}
            <motion.div
              variants={footerVariants}
              className="relative z-10 border-t border-[#E8D7B6]/80 bg-[#FAF5E9]/80 px-6 py-5 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-[#C9942A]/50" />

                <span className="h-1.5 w-1.5 rounded-full bg-[#C9942A]" />

                <span className="h-px w-8 bg-[#C9942A]/50" />
              </div>

              <p className="text-center text-[11px] tracking-wide text-[#9B7A4A]">
                © Group Sweet 1927
              </p>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
