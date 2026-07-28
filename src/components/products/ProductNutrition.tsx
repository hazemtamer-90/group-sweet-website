"use client";

import { Flame, Beef, Wheat, Droplets } from "lucide-react";
import { useLocale } from "next-intl";

interface Props {
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export default function ProductNutrition({ nutrition }: Props) {
  const locale = useLocale();

  const cards = [
    {
      icon: <Flame size={26} />,
      title: locale === "en" ? "Calories" : "السعرات",
      value: nutrition.calories,
      unit: "kcal",
    },
    {
      icon: <Beef size={26} />,
      title: locale === "en" ? "Protein" : "البروتين",
      value: nutrition.protein,
      unit: "g",
    },
    {
      icon: <Wheat size={26} />,
      title: locale === "en" ? "Carbs" : "الكربوهيدرات",
      value: nutrition.carbs,
      unit: "g",
    },
    {
      icon: <Droplets size={26} />,
      title: locale === "en" ? "Fat" : "الدهون",
      value: nutrition.fat,
      unit: "g",
    },
  ];

  return (
    <section className="mt-20">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-[4px] text-[#C9942A]">
          NUTRITION
        </span>

        <h2 className="mt-3 text-3xl font-bold text-[#2C1A0E]">
          {locale === "en" ? "Nutrition Facts" : "القيم الغذائية"}
        </h2>

        <p className="mt-2 text-[#7A5C3A]">
          {locale === "en"
            ? "Approximate nutritional values per 100g."
            : "القيم الغذائية التقريبية لكل 100 جرام."}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group rounded-3xl border border-[#E8D7B6] bg-white p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#670047] hover:shadow-xl"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#670047]/10 text-[#670047] transition-all duration-300 group-hover:bg-[#670047] group-hover:text-white">
              {card.icon}
            </div>

            <h3 className="text-[#7A5C3A]">{card.title}</h3>

            <div className="mt-4">
              <span className="text-4xl font-bold text-[#2C1A0E]">
                {card.value}
              </span>

              <span className="ml-1 text-lg text-[#7A5C3A]">{card.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
