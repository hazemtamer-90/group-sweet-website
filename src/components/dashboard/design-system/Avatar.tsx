"use client";

import clsx from "clsx";
import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Avatar({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  className,
}: AvatarProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14",
  };

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-full bg-[#670047]/10 flex items-center justify-center",
        sizes[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <span className="text-sm font-semibold text-[#670047]">
          {name.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}