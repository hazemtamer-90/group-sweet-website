"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("header");

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[310px] flex-col bg-[#FAF5E9] shadow-2xl lg:hidden"
          >
            {/* Header */}
            <div className="border-b border-[#E8D7B6] px-6 py-5">
              <div className="flex items-center justify-between">
                <Image
                  src="/images/logo/logo.png"
                  alt="Group Sweet"
                  width={70}
                  height={70}
                  priority
                  className="h-16 w-auto object-contain"
                />

                <div className="text-right">
                  <h2 className="text-lg font-bold text-[#670047]">
                    جروب سويت
                  </h2>

                  <p className="text-sm font-semibold text-[#670047]">
                    Group Sweet
                  </p>

                  <p className="mt-1 text-xs tracking-[0.2em] text-[#8B6A3D]">
                    SINCE 1927
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 px-5 py-5">
              <nav className="flex flex-col gap-2">
                {navigationLinks.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href ||
                        pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch
                      onClick={onClose}
                      className={`relative flex items-center rounded-2xl px-5 py-4 text-[15px] font-semibold transition-all duration-300 ${
                        active
                          ? "bg-[#F3E6EE] text-[#670047]"
                          : "text-[#2C1A0E] hover:bg-[#F5EDD6]"
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="mobile-active-indicator"
                          className="absolute right-0 top-3 bottom-3 w-1 rounded-full bg-[#670047]"
                        />
                      )}

                      <span className="relative">{t(item.translationKey)}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Footer */}
            <div className="border-t border-[#E8D7B6] px-6 py-5">
              <p className="text-center text-xs text-[#9B7A4A]">
                © Group Sweet 1927
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
