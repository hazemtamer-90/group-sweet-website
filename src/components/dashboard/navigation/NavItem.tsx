"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface NavItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  collapsed?: boolean;
  badge?: number | string;
}

export default function NavItem({
  title,
  href,
  icon: Icon,
  active = false,
  collapsed = false,
  badge,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative flex items-center rounded-2xl transition-all duration-300",

        collapsed ? "justify-center h-14 w-14 mx-auto" : "h-14 px-4 gap-4",

        active
          ? "bg-[#670047] text-white shadow-lg shadow-[#670047]/30"
          : "text-gray-600 hover:bg-[#670047]/10 hover:text-[#670047]",
      )}
    >
      {active && (
        <span className="absolute right-0 top-3 bottom-3 w-1 rounded-full bg-[#D4AF37]" />
      )}

      <div
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300",

          active ? "bg-white/15" : "bg-gray-100 group-hover:bg-white",
        )}
      >
        <Icon
          size={20}
          className={clsx(
            active ? "text-white" : "text-gray-600 group-hover:text-[#670047]",
          )}
        />
      </div>

      {!collapsed && (
        <>
          <span className="flex-1 text-sm font-semibold">{title}</span>

          {badge && (
            <span
              className={clsx(
                "min-w-[26px] rounded-full px-2 py-1 text-center text-xs font-bold",

                active ? "bg-white text-[#670047]" : "bg-[#670047] text-white",
              )}
            >
              {badge}
            </span>
          )}
        </>
      )}
    </Link>
  );
}
