"use client";

import {
  Package,
  AlertTriangle,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

const cards = [
  {
    title: "إجمالي المنتجات",
    value: "96",
    icon: Package,
    color: "bg-violet-100 text-[#670047]",
  },
  {
    title: "منخفض المخزون",
    value: "14",
    icon: AlertTriangle,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "طلبات اليوم",
    value: "325",
    icon: ShoppingCart,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "إجمالي المبيعات",
    value: "248K",
    icon: DollarSign,
    color: "bg-yellow-100 text-yellow-700",
  },
];

export default function ProductsStats() {
  return (
    <div className="grid grid-cols-2 gap-6 xl:grid-cols-4">

      {cards.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="
            rounded-3xl
            border
            bg-white
            p-6
            shadow-sm
            transition
            hover:-translate-y-1
            hover:shadow-xl
          "
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>

              </div>

              <div
                className={`
                h-14
                w-14
                rounded-2xl
                flex
                items-center
                justify-center
                ${item.color}
              `}
              >
                <Icon size={28} />
              </div>

            </div>
          </div>

        );
      })}

    </div>
  );
}