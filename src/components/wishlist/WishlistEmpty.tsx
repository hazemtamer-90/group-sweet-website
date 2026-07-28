"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export default function WishlistEmpty() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[#670047]/10">
        <Heart size={48} className="text-[#670047]" />
      </div>

      <h2 className="text-3xl font-bold text-[#2C1A0E]">
        لا توجد منتجات في المفضلة
      </h2>

      <p className="mt-4 max-w-md text-[#7A5C3A]">
        أضف المنتجات التي تعجبك إلى المفضلة حتى تستطيع الرجوع إليها بسهولة في أي
        وقت.
      </p>

      <Link
        href="/products"
        className="mt-8 rounded-full bg-[#670047] px-8 py-4 font-semibold text-white transition hover:bg-[#7A0052]"
      >
        تصفح المنتجات
      </Link>
    </section>
  );
}
