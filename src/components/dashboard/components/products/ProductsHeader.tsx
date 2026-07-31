"use client";

import { Plus } from "lucide-react";

export default function ProductsHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold text-gray-900">
          المنتجات
        </h1>

        <p className="mt-2 text-gray-500">
          إدارة جميع منتجات المصنع
        </p>

      </div>

      <button
        className="
        flex items-center gap-2
        rounded-2xl
        bg-[#670047]
        px-6
        py-3
        font-semibold
        text-white
        transition
        hover:scale-105
        hover:bg-[#520039]
      "
      >
        <Plus size={20} />

        إضافة منتج
      </button>

    </div>
  );
}