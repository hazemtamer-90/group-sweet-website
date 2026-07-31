"use client";

import { Search } from "lucide-react";

export default function ProductSearch() {
  return (
    <div className="relative w-full xl:max-w-md">

      <Search
        size={18}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="ابحث باسم المنتج أو SKU..."
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-gray-200
          bg-gray-50
          pr-11
          pl-4
          text-sm
          outline-none
          transition
          focus:border-[#670047]
          focus:bg-white
        "
      />
    </div>
  );
}