"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface SidebarCollapseButtonProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function SidebarCollapseButton({
  collapsed,
  onToggle,
}: SidebarCollapseButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      className={clsx(
        "absolute -right-4 top-8 z-50",
        "flex h-9 w-9 items-center justify-center",
        "rounded-full border border-gray-200",
        "bg-white shadow-lg",
        "transition-all duration-300",
        "hover:scale-110",
        "hover:border-[#670047]",
        "hover:text-[#670047]",
        "active:scale-95"
      )}
    >
      {collapsed ? (
        <ChevronRight size={18} />
      ) : (
        <ChevronLeft size={18} />
      )}
    </button>
  );
}