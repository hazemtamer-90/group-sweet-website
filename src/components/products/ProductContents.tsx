"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Package } from "lucide-react";

interface ProductContentsProps {
  contents: string[];
}

export default function ProductContents({ contents }: ProductContentsProps) {
  const [expanded, setExpanded] = useState(false);

  const previewItems = contents.slice(0, 6);

  const columns = useMemo(() => {
    if (!expanded) {
      return [previewItems];
    }

    const result: string[][] = [];

    for (let i = 0; i < contents.length; i += 10) {
      result.push(contents.slice(i, i + 10));
    }

    return result;
  }, [expanded, contents]);

  return (
    <section className="mt-6 overflow-hidden rounded-[22px] border border-[#EEE7DD] bg-white shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F8EEF5]">
            <Package className="h-4 w-4 text-[#670047]" />
          </div>

          <h3 className="text-[15px] font-semibold text-[#2B211A]">
            محتويات العلبة
          </h3>
        </div>

        <span className="rounded-full bg-[#F8EEF5] px-2.5 py-1 text-[10px] font-semibold text-[#670047]">
          {contents.length} صنف
        </span>
      </div>

      <div className="h-px bg-[#F6F1EB]" />

      {/* Contents */}

      <div className="px-4 py-3">
        <div
          className={`grid gap-2 ${
            expanded
              ? columns.length >= 3
                ? "grid-cols-3"
                : columns.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              : "grid-cols-1"
          }`}
        >
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="min-w-0 space-y-1">
              {column.map((item, itemIndex) => {
                const number = columnIndex * 10 + itemIndex + 1;

                return (
                  <div
                    key={`${number}-${item}`}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      px-1.5
                      py-1.5
                      transition-all
                      duration-200
                      hover:bg-[#FAF8F5]
                    "
                  >
                    {/* Number */}

                    <div
                      className="
                        flex
                        h-5
                        min-w-[28px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F8EEF5]
                        text-[10px]
                        font-bold
                        text-[#670047]
                        transition-all
                        duration-200
                        group-hover:bg-[#670047]
                        group-hover:text-white
                      "
                    >
                      {number.toString().padStart(2, "0")}
                    </div>

                    {/* Item */}

                    <span
                      className="
    break-words
    text-[10px]
    sm:text-[11px]
    lg:text-[13px]
    font-medium
    leading-5
    text-[#3A2A22]
  "
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {contents.length > 6 && (
        <div className="border-t border-[#F6F1EB] px-4 py-3">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#FAF8F5]
              py-2.5
              text-[13px]
              font-semibold
              text-[#670047]
              transition-all
              duration-300
              hover:bg-[#F4EEE8]
            "
          >
            <span>
              {expanded ? "إخفاء" : `عرض جميع ${contents.length} صنف`}
            </span>

            <div
              className={`
                transition-transform
                duration-300
                ${expanded ? "rotate-180" : ""}
              `}
            >
              <ChevronDown className="h-4 w-4" />
            </div>
          </button>
        </div>
      )}
    </section>
  );
}
