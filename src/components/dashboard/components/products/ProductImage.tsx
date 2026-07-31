"use client";

import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ProductImage({
  src,
  alt,
}: ProductImageProps) {
  return (
    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">

      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        className="h-full w-full object-cover"
      />

    </div>
  );
}