"use client";

import clsx from "clsx";

type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "gray";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  rounded?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  rounded = true,
  className,
}: BadgeProps) {
  const variants = {
    primary:
      "bg-[#670047]/10 text-[#670047]",
    success:
      "bg-green-100 text-green-700",
    warning:
      "bg-yellow-100 text-yellow-700",
    danger:
      "bg-red-100 text-red-700",
    gray:
      "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center",
        "px-3 py-1",
        "text-xs font-semibold",
        rounded ? "rounded-full" : "rounded-lg",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}