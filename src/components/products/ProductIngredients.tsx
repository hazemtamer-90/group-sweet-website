"use client";

import { CheckCircle2 } from "lucide-react";
import { useLocale } from "next-intl";

interface Props {
  ingredients: {
    ar: string[];
    en: string[];
  };
}

export default function ProductIngredients({ ingredients }: Props) {
  const locale = useLocale();

  const data = locale === "en" ? ingredients.en : ingredients.ar;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {data.map((item) => (
        <div
          key={item}
          className="flex items-center gap-4 rounded-2xl border border-[#E8D7B6] bg-[#FFFCF4] p-5 transition hover:border-[#670047]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#670047]/10">
            <CheckCircle2 size={20} className="text-[#670047]" />
          </div>

          <span className="font-medium text-[#2C1A0E]">{item}</span>
        </div>
      ))}
    </div>
  );
}
