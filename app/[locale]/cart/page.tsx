"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const locale = useLocale();

  const t = useTranslations("cart");
  const misc = useTranslations("misc");

  const { items, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#FFFBF0] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center">
          <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[#EFE4C8]">
            <ShoppingCart size={46} className="text-[#C9942A]" />
          </div>

          <h1 className="mb-3 text-4xl font-bold text-[#2C1A0E]">
            {t("empty.title")}
          </h1>

          <p className="mb-10 max-w-md leading-8 text-[#7A5C3A]">
            {t("empty.sub")}
          </p>

          <Link
            href="/products"
            className="rounded-full bg-[#670047] px-8 py-4 font-semibold text-white transition hover:bg-[#7A0052]"
          >
            {t("browseCta")}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFFBF0] py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold text-[#2C1A0E]">
              {t("heading")}
            </h1>

            <p className="text-[#7A5C3A]">
              {itemCount} {t("items")}
            </p>
          </div>

          <ShoppingCart size={34} className="text-[#670047]" />
        </div>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          {/* Products */}
          <div className="space-y-5">
            {items.map((item) => {
              const displayName = locale === "en" ? item.nameEn : item.name;

              return (
                <div
                  key={item.id}
                  className="flex gap-5 rounded-3xl border border-[rgba(139,90,43,0.10)] bg-white p-5 shadow-sm"
                >
                  <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl bg-[#F5EDD6]">
                    <Image
                      src={item.image}
                      alt={displayName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="mb-1 text-xs text-[#C9942A]">
                        {locale === "en" ? item.categoryEn : item.category}
                      </div>

                      <h3 className="text-lg font-bold text-[#2C1A0E]">
                        {displayName}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFE4C8] hover:bg-[#DCC8A4]"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#670047] text-white hover:bg-[#7A0052]"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-xl font-bold text-[#670047]">
                          {item.price * item.quantity} {misc("egp")}
                        </div>

                        <div className="text-sm text-[#7A5C3A]">
                          {item.price} {misc("egp")}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start rounded-full p-2 text-[#7A5C3A] hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              );
            })}
          </div>
          {/* Summary */}
          <div className="h-fit rounded-3xl border border-[rgba(139,90,43,0.10)] bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-[#2C1A0E]">
              {t("summary")}
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>{t("subtotal")}</span>
                <span>
                  {total} {misc("egp")}
                </span>
              </div>

              <div className="flex justify-between">
                <span>{t("shipping")}</span>
                <span className="text-[#4A6741]">{t("shippingFree")}</span>
              </div>
              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-[#2C1A0E]">
                  كود الخصم
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="ادخل الكوبون"
                    className="flex-1 rounded-xl border border-[#E8D7B6] px-4 py-3 outline-none focus:border-[#670047]"
                  />

                  <button className="rounded-xl bg-[#670047] px-5 text-white transition hover:bg-[#7A0052]">
                    تطبيق
                  </button>
                </div>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>{t("total")}</span>

                <span className="text-[#670047]">
                  {total} {misc("egp")}
                </span>
              </div>
            </div>

            <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#670047] py-4 font-semibold text-white hover:bg-[#7A0052]">
              {t("checkout")}
              <ArrowIcon size={18} />
            </button>

            <div className="mt-8 rounded-2xl bg-[#F8F4EA] p-4">
              <h3 className="font-semibold text-[#2C1A0E]">
                لماذا تطلب من جروب سويت؟
              </h3>

              <ul className="mt-3 space-y-2 text-sm text-[#7A5C3A]">
                <li>✓ شحن سريع لجميع المحافظات</li>
                <li>✓ منتجات طازجة يومياً</li>
                <li>✓ دفع آمن</li>
                <li>✓ استبدال واسترجاع بسهولة</li>
              </ul>
            </div>
          </div>
          {/* نهاية Summary Card */}
        </div>
        {/* نهاية Grid */}
      </div>
      {/* نهاية Container */}
    </main>
  );
}
