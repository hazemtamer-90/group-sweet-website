"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

import ProductIngredients from "./ProductIngredients";
import ProductNutrition from "./ProductNutrition";
import ProductDelivery from "./ProductDelivery";
import ProductFAQ from "./ProductFAQ";
import ProductReviews from "./ProductReviews";

interface Props {
  description: string;

  ingredients: {
    ar: string[];
    en: string[];
  };

  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };

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

  reviews: {
    ar: {
      name: string;
      rating: number;
      comment: string;
    }[];

    en: {
      name: string;
      rating: number;
      comment: string;
    }[];
  };
}

type Tab =
  | "description"
  | "ingredients"
  | "nutrition"
  | "delivery"
  | "faq"
  | "reviews";

export default function ProductTabs({
  description,
  ingredients,
  nutrition,
  faq,
  reviews,
}: Props) {
  const locale = useLocale();

  const [activeTab, setActiveTab] = useState<Tab>("description");

  const tabs = [
    {
      id: "description",
      label: locale === "en" ? "Description" : "الوصف",
    },
    {
      id: "ingredients",
      label: locale === "en" ? "Ingredients" : "المكونات",
    },
    {
      id: "nutrition",
      label: locale === "en" ? "Nutrition" : "القيم الغذائية",
    },
    {
      id: "delivery",
      label: locale === "en" ? "Delivery" : "التوصيل",
    },
    {
      id: "faq",
      label: locale === "en" ? "FAQ" : "الأسئلة الشائعة",
    },
    {
      id: "reviews",
      label: locale === "en" ? "Reviews" : "التقييمات",
    },
  ];

  return (
    <section className="mt-20">
      <div className="flex flex-wrap gap-3 border-b border-[#E8D7B6]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`rounded-t-2xl px-6 py-4 font-semibold transition ${
              activeTab === tab.id
                ? "bg-[#670047] text-white"
                : "text-[#7A5C3A] hover:text-[#670047]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-b-3xl rounded-tr-3xl border border-t-0 border-[#E8D7B6] bg-white p-8">
        {activeTab === "description" && (
          <div className="leading-9 text-[#7A5C3A]">{description}</div>
        )}

        {activeTab === "ingredients" && (
          <ProductIngredients ingredients={ingredients} />
        )}

        {activeTab === "nutrition" && (
          <ProductNutrition nutrition={nutrition} />
        )}

        {activeTab === "delivery" && <ProductDelivery />}

        {activeTab === "faq" && <ProductFAQ faq={faq} />}

        {activeTab === "reviews" && <ProductReviews reviews={reviews} />}
      </div>
    </section>
  );
}
