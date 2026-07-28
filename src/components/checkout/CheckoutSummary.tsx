"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { ShieldCheck, Truck, Tag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { validateCheckout } from "@/components/checkout/CheckoutValidation";

import { useCartStore } from "@/store/cartStore";

interface CheckoutSummaryProps {
  customer: {
    fullName: string;
    phone: string;
    alternatePhone: string;
    email: string;
  };

  shipping: {
    governorate: string;
    city: string;
    district: string;
    street: string;
    building: string;
    floor: string;
    apartment: string;
    landmark: string;
  };

  paymentMethod: string;
  notes: string;
}

export default function CheckoutSummary({
  customer,
  shipping,
  paymentMethod,
  notes,
}: CheckoutSummaryProps) {
  const locale = useLocale();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearCart = useCartStore((state) => state.clearCart);

  const items = useCartStore((state) => state.items);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shippingCost = subtotal >= 1000 ? 0 : 80;

  const total = subtotal + shippingCost;

  // سيتم استخدامهم بعد ربط الـ Backend
  void customer;
  void shipping;
  void paymentMethod;
  void notes;
  const handlePlaceOrder = () => {
    const result = validateCheckout(customer, shipping);

    if (!result.isValid) {
      alert(
        locale === "ar"
          ? "يرجى استكمال جميع البيانات المطلوبة."
          : "Please complete all required fields.",
      );

      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      clearCart();
      router.push(`/${locale}/order-success`);
    }, 2000);
  };

  return (
    <aside className="h-fit lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-3xl border border-[#E8D7B6] bg-white shadow-sm">
        <div className="border-b border-[#EFE4C8] p-6">
          <h2 className="text-2xl font-bold text-[#2C1A0E]">
            {locale === "ar" ? "ملخص الطلب" : "Order Summary"}
          </h2>

          <p className="mt-2 text-sm text-[#7A5C3A]">
            {items.length} {locale === "ar" ? "منتج" : "Items"}
          </p>
        </div>

        <div className="max-h-[350px] space-y-5 overflow-y-auto p-6">
          {" "}
          {items.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-lg font-semibold text-[#2C1A0E]">
                {locale === "ar" ? "السلة فارغة" : "Your cart is empty"}
              </p>

              <p className="mt-2 text-sm text-[#7A5C3A]">
                {locale === "ar"
                  ? "أضف بعض المنتجات أولاً."
                  : "Add some products first."}
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.selectedWeight}`}
                className="flex items-center gap-4"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-[#EFE4C8] bg-[#F5EDD6]">
                  <Image
                    src={item.image}
                    alt={locale === "en" ? item.nameEn : item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-1 font-semibold text-[#2C1A0E]">
                    {locale === "en" ? item.nameEn : item.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#7A5C3A]">
                    {locale === "ar"
                      ? `الكمية: ${item.quantity}`
                      : `Qty: ${item.quantity}`}
                  </p>

                  <p className="text-sm text-[#7A5C3A]">
                    {locale === "ar"
                      ? `الوزن: ${item.selectedWeight} كجم`
                      : `Weight: ${item.selectedWeight} kg`}
                  </p>
                </div>

                <div className="text-end">
                  <p className="font-bold text-[#670047]">
                    {item.price * item.quantity}
                  </p>

                  <span className="text-xs text-[#7A5C3A]">
                    {locale === "ar" ? "جنيه" : "EGP"}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="space-y-4 border-t border-[#EFE4C8] p-6">
          {" "}
          <div className="flex items-center justify-between">
            <span className="text-[#7A5C3A]">
              {locale === "ar" ? "إجمالي المنتجات" : "Subtotal"}
            </span>

            <span className="font-semibold">{subtotal} EGP</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-[#7A5C3A]">
              <Truck size={16} />
              {locale === "ar" ? "الشحن" : "Shipping"}
            </span>

            <span className="font-semibold">
              {shippingCost === 0
                ? locale === "ar"
                  ? "مجاني"
                  : "Free"
                : `${shippingCost} EGP`}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-[#7A5C3A]">
              <Tag size={16} />
              {locale === "ar" ? "الخصم" : "Discount"}
            </span>

            <span className="font-semibold">0 EGP</span>
          </div>
          <div className="h-px bg-[#EFE4C8]" />
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-[#2C1A0E]">
              {locale === "ar" ? "الإجمالي" : "Total"}
            </span>

            <span className="text-2xl font-bold text-[#670047]">
              {total} EGP
            </span>
          </div>
          <div className="mt-2 rounded-2xl border border-[#E8D7B6] bg-[#FCFAF6] p-4">
            <label className="mb-3 block font-semibold text-[#2C1A0E]">
              {locale === "ar" ? "كود الخصم" : "Promo Code"}
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder={locale === "ar" ? "أدخل الكوبون" : "Enter coupon"}
                className="flex-1 rounded-xl border border-[#E8D7B6] px-4 py-3 outline-none transition focus:border-[#670047]"
              />

              <button
                type="button"
                className="rounded-xl bg-[#670047] px-5 py-3 font-semibold text-white transition hover:bg-[#7D0056]"
              >
                {locale === "ar" ? "تطبيق" : "Apply"}
              </button>
            </div>

            <button
              type="button"
              onClick={handlePlaceOrder}
              className="mt-6 flex w-full items-center justify-center rounded-2xl bg-[#670047] py-4 text-lg font-bold text-white transition hover:bg-[#7D0056]"
            >
              {locale === "ar" ? "تأكيد الطلب" : "Place Order"}
            </button>
          </div>
          <div className="mt-6 space-y-4 border-t border-[#EFE4C8] pt-6">
            <div className="flex items-center gap-3 text-sm text-[#7A5C3A]">
              <ShieldCheck size={18} className="text-[#4A6741]" />

              <span>
                {locale === "ar"
                  ? "دفع آمن وحماية كاملة للبيانات."
                  : "Secure checkout & protected payment."}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#7A5C3A]">
              <Truck size={18} className="text-[#4A6741]" />

              <span>
                {locale === "ar"
                  ? "التوصيل خلال 24 - 48 ساعة."
                  : "Delivery within 24–48 hours."}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#7A5C3A]">
              <Tag size={18} className="text-[#4A6741]" />

              <span>
                {locale === "ar"
                  ? "شحن مجاني للطلبات فوق 1000 EGP."
                  : "Free shipping on orders over 1000 EGP."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
