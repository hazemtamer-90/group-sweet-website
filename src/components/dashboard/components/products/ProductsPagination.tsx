"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductsPagination() {
  return (
    <div className="flex items-center justify-center gap-3">

      <button className="flex h-10 w-10 items-center justify-center rounded-xl border">
        <ChevronRight size={18} />
      </button>

      <button className="h-10 w-10 rounded-xl bg-[#670047] text-white">
        1
      </button>

      <button className="h-10 w-10 rounded-xl border">
        2
      </button>

      <button className="h-10 w-10 rounded-xl border">
        3
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-xl border">
        <ChevronLeft size={18} />
      </button>

    </div>
  );
}