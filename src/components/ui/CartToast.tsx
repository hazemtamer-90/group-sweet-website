"use client";

import { ShoppingCart } from "lucide-react";

interface CartToastProps {
  show: boolean;
}

export default function CartToast({ show }: CartToastProps) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 animate-[toastIn_.3s]">
      <div className="overflow-hidden rounded-2xl bg-[#670047] px-6 py-4 text-white shadow-2xl">
        <div className="flex items-center gap-3">
          <ShoppingCart size={20} />
          <span className="font-semibold">
            تمت إضافة المنتج إلى السلة
          </span>
        </div>

        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/20">
          <div className="h-full bg-white animate-[progress_2s_linear_forwards]" />
        </div>
      </div>
    </div>
  );
}