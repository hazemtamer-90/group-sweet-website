"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
}

export default function IconButton({
  icon,
  size = "md",
  variant = "outline",
  className,
  ...props
}: IconButtonProps) {
  const sizes = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-12 w-12",
  };

  const variants = {
    primary:
      "bg-[#670047] text-white hover:bg-[#520039]",

    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",

    outline:
      "border border-gray-300 bg-white text-gray-700 hover:border-[#670047] hover:text-[#670047]",
  };

  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center justify-center",
        "rounded-xl transition-all duration-300",
        "active:scale-95",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {icon}
    </button>
  );
}