"use client";

import { motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { navigationLinks } from "./NavigationLinks";

export default function DesktopNavigation() {
  const pathname = usePathname();
  const t = useTranslations("header");

  return (
    <nav className="hidden lg:flex items-center">
      <div className="relative flex items-center gap-2 rounded-full border border-[#E8D7B6] bg-white/90 p-2 shadow-sm backdrop-blur-md">
        {navigationLinks.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch
              className="relative"
            >
              {" "}
              {active && (
                <motion.div
                  layoutId="desktop-nav-pill"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                  className="absolute inset-0 rounded-full bg-[#670047]"
                />
              )}
              <span
                className={`relative z-10 block rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-300

                ${active ? "text-white" : "text-[#2C1A0E] hover:text-[#670047]"}
              `}
              >
                {t(item.translationKey)}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
