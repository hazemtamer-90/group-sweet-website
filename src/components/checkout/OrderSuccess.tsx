"use client";

import Link from "next/link";
import { CheckCircle2, ShoppingBag, Home } from "lucide-react";
import { useLocale } from "next-intl";

export default function OrderSuccess() {
  const locale = useLocale();

  const orderNumber = "GS-100001";

  return (
    <section className="min-h-screen bg-[#FCFAF6] py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-3xl border border-[#E8D7B6] bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#EAF7EE]">
            <CheckCircle2 size={72} className="text-[#4A6741]" />
          </div>
          <h1 className="mt-8 text-4xl font-bold text-[#2C1A0E]">
            {locale === "ar"
              ? "تم استلام طلبك بنجاح 🎉"
              : "Order Received Successfully 🎉"}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#7A5C3A]">
            {locale === "ar"
              ? "شكراً لثقتك في جروب سويت. سيتم مراجعة طلبك والتواصل معك خلال وقت قصير لتأكيد الطلب."
              : "Thank you for choosing Group Sweet. Our team will contact you shortly to confirm your order."}
          </p>{" "}
          <div className="mt-10 rounded-2xl border border-dashed border-[#DCC7A1] bg-[#FFF8ED] p-6">
            <p className="text-sm uppercase tracking-widest text-[#C9942A]">
              {locale === "ar" ? "رقم الطلب" : "Order Number"}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-wider text-[#670047]">
              {orderNumber}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 rounded-2xl bg-[#FCFAF6] p-6 text-start">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7EE]">
                ✅
              </span>

              <p className="text-[#2C1A0E]">
                {locale === "ar"
                  ? "سيتم الاتصال بك لتأكيد الطلب."
                  : "Our team will call you to confirm your order."}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF5FF]">
                🚚
              </span>

              <p className="text-[#2C1A0E]">
                {locale === "ar"
                  ? "مدة التوصيل من 24 إلى 48 ساعة."
                  : "Estimated delivery within 24–48 hours."}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3E9]">
                💳
              </span>

              <p className="text-[#2C1A0E]">
                {locale === "ar"
                  ? "يمكنك الدفع عند الاستلام أو بالطريقة التي اخترتها."
                  : "You can pay using your selected payment method."}
              </p>
            </div>
          </div>{" "}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#670047] py-4 text-lg font-semibold text-white transition hover:bg-[#7A0052]"
            >
              <Home size={20} />
              {locale === "ar" ? "العودة للرئيسية" : "Back to Home"}
            </Link>

            <Link
              href="/products"
              className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-[#E8D7B6] bg-white py-4 text-lg font-semibold text-[#670047] transition hover:bg-[#FCFAF6]"
            >
              <ShoppingBag size={20} />
              {locale === "ar" ? "متابعة التسوق" : "Continue Shopping"}
            </Link>
          </div>
          <div className="mt-12 border-t border-[#EFE4C8] pt-6">
            <p className="text-sm text-[#7A5C3A]">
              {locale === "ar"
                ? "إذا كان لديك أي استفسار يمكنك التواصل معنا عبر واتساب أو الهاتف."
                : "If you have any questions, feel free to contact us via WhatsApp or phone."}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+201000000000"
                className="rounded-full border border-[#E8D7B6] px-5 py-2 font-medium text-[#670047] transition hover:bg-[#FCFAF6]"
              >
                +20 100 000 0000
              </a>

              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25D366] px-5 py-2 font-medium text-white transition hover:bg-[#1EBE5D]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
