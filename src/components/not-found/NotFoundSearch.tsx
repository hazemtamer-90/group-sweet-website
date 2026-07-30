"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function NotFoundSearch() {
  const t = useTranslations("notFound");
  const locale = useLocale();
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const value = query.trim();

    if (!value) {
      router.push(`/${locale}/products`);
      return;
    }

    router.push(`/${locale}/products?search=${encodeURIComponent(value)}`);
  };

  return (
    <section className="mx-auto max-w-2xl rounded-[32px] border border-[#E8DCCB] bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,.06)]">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#2B2118]">
          {t("searchTitle")}
        </h3>

        <p className="mt-2 text-[#7B6B61]">{t("description2")}</p>
      </div>

      <div className="mt-8 flex gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder={t("searchPlaceholder")}
          className="h-14 flex-1 rounded-full border border-[#E8DCCB] bg-[#FBF8F2] px-6 outline-none transition-all focus:border-[#670047] focus:ring-2 focus:ring-[#670047]/20"
        />

        <button
          onClick={handleSearch}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#670047] text-white transition-all duration-300 hover:scale-105 hover:bg-[#520038]"
        >
          <Search size={20} />
        </button>
      </div>
    </section>
  );
}
