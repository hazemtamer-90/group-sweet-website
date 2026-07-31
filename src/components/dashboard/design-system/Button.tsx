"use client";

import clsx from "clsx";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#670047] text-white hover:bg-[#530039]",

    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200",

    outline:
      "border border-gray-300 bg-white text-gray-700 hover:border-[#670047] hover:text-[#670047]",

    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center justify-center gap-2",
        "rounded-xl font-medium",
        "transition-all duration-300",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}