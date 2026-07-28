"use client";

import { Truck, Gift, CreditCard } from "lucide-react";
import { useLocale } from "next-intl";

export default function ProductDelivery() {
  const locale = useLocale();

  const cards = [
    {
      icon: <Truck size={24} />,
      title: locale === "en" ? "Cairo & Giza" : "القاهرة والجيزة",
      text:
        locale === "en"
          ? "Delivery within 24 hours."
          : "التوصيل خلال 24 ساعة.",
    },
    {
      icon: <Truck size={24} />,
      title:
        locale === "en"
          ? "Other Governorates"
          : "باقي المحافظات",
      text:
        locale === "en"
          ? "2-4 Business Days."
          : "التوصيل خلال 2-4 أيام.",
    },
    {
      icon: <Gift size={24} />,
      title:
        locale === "en"
          ? "Gift Packaging"
          : "تغليف هدايا",
      text:
        locale === "en"
          ? "Available upon request."
          : "متاح عند الطلب.",
    },
    {
      icon: <CreditCard size={24} />,
      title:
        locale === "en"
          ? "Payment"
          : "الدفع",
      text:
        locale === "en"
          ? "Cash on Delivery."
          : "الدفع عند الاستلام.",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-[#E8D7B6] bg-[#FFFDF7] p-6"
        >
          <div className="mb-4 text-[#670047]">
            {card.icon}
          </div>

          <h3 className="font-bold text-[#2C1A0E]">
            {card.title}
          </h3>

          <p className="mt-2 text-[#7A5C3A]">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}