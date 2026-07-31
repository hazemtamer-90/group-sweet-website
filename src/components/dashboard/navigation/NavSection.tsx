"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface NavSectionProps {
  title: string;
  children: ReactNode;
  collapsed?: boolean;
}

export default function NavSection({
  title,
  children,
  collapsed = false,
}: NavSectionProps) {
  return (
    <section className="space-y-3">

      {!collapsed && (
        <h3
          className={clsx(
            "px-2 text-xs font-semibold uppercase tracking-[0.15em]",
            "text-gray-400"
          )}
        >
          {title}
        </h3>
      )}

      <div className="space-y-2">
        {children}
      </div>

    </section>
  );
}