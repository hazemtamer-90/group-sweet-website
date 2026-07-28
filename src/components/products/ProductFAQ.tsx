"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";

interface Props {
  faq: {
    ar: {
      question: string;
      answer: string;
    }[];

    en: {
      question: string;
      answer: string;
    }[];
  };
}

export default function ProductFAQ({ faq }: Props) {
  const locale = useLocale();

  const [opened, setOpened] = useState<number | null>(0);

  const data = locale === "en" ? faq.en : faq.ar;

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="rounded-2xl border border-[#E8D7B6]">
          <button
            onClick={() => setOpened(opened === index ? null : index)}
            className="flex w-full items-center justify-between p-5"
          >
            <span
              className={`font-semibold transition ${
                opened === index ? "text-[#670047]" : "text-[#2C1A0E]"
              }`}
            >
              {item.question}
            </span>

            <ChevronDown
              className={`transition ${opened === index ? "rotate-180" : ""}`}
            />
          </button>

          {opened === index && (
            <div className="border-t border-[#E8D7B6] p-5 text-[#7A5C3A]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
