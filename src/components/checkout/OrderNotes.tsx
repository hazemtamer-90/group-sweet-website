"use client";

import { MessageSquareText } from "lucide-react";
import { useLocale } from "next-intl";

interface OrderNotesProps {
  value: string;
  onChange: (value: string) => void;
}

export default function OrderNotes({ value, onChange }: OrderNotesProps) {
  const locale = useLocale();

  const isArabic = locale === "ar";

  return (
    <div className="rounded-3xl border border-[#E8D7B6] bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EDD6] text-[#670047]">
          <MessageSquareText size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#2C1A0E]">
            {isArabic ? "ملاحظات الطلب" : "Order Notes"}
          </h2>

          <p className="mt-1 text-sm text-[#7A5C3A]">
            {isArabic
              ? "أي تعليمات خاصة بالتوصيل أو الطلب."
              : "Add any special instructions for your order."}
          </p>
        </div>
      </div>

      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={300}
        aria-label="Order Notes"
        autoComplete="off"
        placeholder={
          isArabic
            ? "مثال: الاتصال قبل الوصول، بدون كيس، هدية..."
            : "Example: Call before delivery, gift wrapping..."
        }
        className="w-full resize-none rounded-2xl border border-[#E8D7B6] bg-[#FFFCF7] px-5 py-4 outline-none transition focus:border-[#670047] focus:ring-2 focus:ring-[#670047]/20"
      />
      <div className="mt-3 flex justify-end">
        <span className="text-xs text-[#7A5C3A]">{value.length}/300</span>
      </div>
    </div>
  );
}
