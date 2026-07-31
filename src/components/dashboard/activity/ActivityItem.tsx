"use client";

import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
  color: string;
}

export default function ActivityItem({
  title,
  description,
  time,
  icon: Icon,
  color,
}: ActivityItemProps) {
  return (
    <div
      className="
        group
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-gray-100
        p-4
        transition-all
        duration-300
        hover:border-[#670047]/20
        hover:bg-[#670047]/5
      "
    >
      <div
        className={clsx(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
          color,
        )}
      >
        <Icon size={22} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h4 className="truncate font-semibold text-gray-900">
            {title}
          </h4>

          <span className="shrink-0 text-xs text-gray-400">
            {time}
          </span>
        </div>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}