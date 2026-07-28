"use client";

import { ShoppingCart, CreditCard, CircleCheckBig } from "lucide-react";
import { useLocale } from "next-intl";

export default function CheckoutHeader() {
  const locale = useLocale();

  const isArabic = locale === "ar";

  const steps = [
    {
      icon: ShoppingCart,
      title: isArabic ? "السلة" : "Cart",
      active: false,
      done: true,
    },
    {
      icon: CreditCard,
      title: isArabic ? "إتمام الطلب" : "Checkout",
      active: true,
      done: false,
    },
    {
      icon: CircleCheckBig,
      title: isArabic ? "تم الطلب" : "Success",
      active: false,
      done: false,
    },
  ];

  return (
    <div className="rounded-3xl border border-[#E8D7B6] bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-[#2C1A0E]">
        {isArabic ? "إتمام الطلب" : "Checkout"}
      </h1>

      <p className="mt-2 text-[#7A5C3A]">
        {isArabic
          ? "أكمل بياناتك لإتمام عملية الشراء."
          : "Complete your information to finish your order."}
      </p>

      <div className="mt-10 flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full transition-all ${
                    step.active
                      ? "bg-[#670047] text-white"
                      : step.done
                        ? "bg-[#4A6741] text-white"
                        : "bg-[#F5EDD6] text-[#7A5C3A]"
                  }`}
                >
                  <Icon size={24} />
                </div>

                <span
                  className={`mt-3 text-sm font-semibold ${
                    step.active ? "text-[#670047]" : "text-[#7A5C3A]"
                  }`}
                >
                  {step.title}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="mx-4 h-[2px] flex-1 bg-[#E8D7B6]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
