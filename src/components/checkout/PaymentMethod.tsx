"use client";

import { Banknote, CreditCard, Smartphone } from "lucide-react";
import { useLocale } from "next-intl";

interface PaymentMethodProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PaymentMethod({ value, onChange }: PaymentMethodProps) {
  const locale = useLocale();

  const ar = locale === "ar";

  const methods = [
    {
      id: "cash",
      icon: Banknote,
      title: ar ? "الدفع عند الاستلام" : "Cash On Delivery",
      desc: ar ? "ادفع عند استلام الطلب" : "Pay when your order arrives",
    },

    {
      id: "instapay",
      icon: Smartphone,
      title: "InstaPay",
      desc: ar ? "تحويل عبر InstaPay" : "Transfer via InstaPay",
    },

    {
      id: "card",
      icon: CreditCard,
      title: ar ? "بطاقة بنكية" : "Credit Card",
      desc: ar ? "Visa / Mastercard" : "Visa / Mastercard",
    },
  ];

  return (
    <div className="rounded-3xl border border-[#E8D7B6] bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold text-[#2C1A0E]">
        {ar ? "طريقة الدفع" : "Payment Method"}
      </h2>

      <div className="space-y-4">
        {methods.map((method) => {
          const Icon = method.icon;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onChange(method.id)}
              className={`flex w-full items-center justify-between rounded-2xl border p-5 transition ${
                value === method.id
                  ? "border-[#670047] bg-[#670047]/5"
                  : "border-[#E8D7B6] hover:border-[#670047]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    value === method.id
                      ? "bg-[#670047] text-white"
                      : "bg-[#F5EDD6] text-[#670047]"
                  }`}
                >
                  <Icon size={22} />
                </div>

                <div className="text-start">
                  <h3 className="font-semibold text-[#2C1A0E]">
                    {method.title}
                  </h3>

                  <p className="mt-1 text-sm text-[#7A5C3A]">{method.desc}</p>
                </div>
              </div>

              <div
                className={`h-6 w-6 rounded-full border-2 ${
                  value === method.id
                    ? "border-[#670047] bg-[#670047]"
                    : "border-[#C8B79B]"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
