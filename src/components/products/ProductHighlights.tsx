"use client";

import { CheckCircle2 } from "lucide-react";
import { useLocale } from "next-intl";

interface Props {
  highlights: {
    ar: string[];
    en: string[];
  };
}

export default function ProductHighlights({ highlights }: Props) {
  const locale = useLocale();

  const data = locale === "en" ? highlights.en : highlights.ar;

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-3">
        {data.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full border border-[#E8D7B6] bg-[#FFFDF7] px-5 py-3 transition-all duration-300 hover:border-[#670047] hover:bg-[#670047] hover:text-white"
          >
            <CheckCircle2
              size={18}
              className="text-[#4A6741] transition-colors duration-300 group-hover:text-white"
            />

            <span className="text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
