"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import {
  Building2,
  Package,
  Users,
  Calendar,
  Palette,
  CheckCircle2,
  Send,
} from "lucide-react";
const featureIcons = [Package, Users, Calendar, Palette];

const featureColors = ["#670047", "#4A6741", "#C9942A", "#7A5C3A"];

export default function CorporatePage() {
  const t = useTranslations("corporatePage");
  const locale = useLocale();

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    quantity: "",
    date: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF5E9] p-6">
        <div className="w-full max-w-lg rounded-3xl border border-[#E8D7B6] bg-white p-10 text-center shadow-lg">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 size={42} className="text-green-600" />
          </div>

          <h2 className="text-3xl font-bold text-[#2C1A0E]">
            {locale === "ar"
              ? "تم إرسال طلبك بنجاح"
              : "Request Sent Successfully"}
          </h2>

          <p className="mt-4 text-[#7A5C3A]">
            {locale === "ar"
              ? "سيقوم فريقنا بالتواصل معك خلال 24 ساعة."
              : "Our team will contact you within 24 hours."}
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 rounded-2xl bg-[#670047] px-8 py-3 font-semibold text-white transition hover:bg-[#7D0056]"
          >
            {locale === "ar" ? "إرسال طلب جديد" : "Send New Request"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF5E9]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2C1A0E] py-28">
        <div className="absolute inset-0 opacity-10 pattern-bg" />

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#C9942A]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9942A]/30 bg-[#C9942A]/10 px-5 py-2 text-[#C9942A]">
            <Building2 size={18} />

            <span>
              {locale === "ar"
                ? "للشركات والمؤسسات"
                : "For Companies & Organizations"}
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight text-white">
            {t("heading")}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#D4B896]">
            {t("subtext")}
          </p>
        </div>
      </section>
      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {(t.raw("features") as { title: string; desc: string }[]).map(
            (feature, index) => {
              const Icon = featureIcons[index];

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-[#E8D7B6] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: featureColors[index] + "15",
                    }}
                  >
                    <Icon size={24} color={featureColors[index]} />
                  </div>

                  <h3 className="text-xl font-bold text-[#2C1A0E]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#7A5C3A]">
                    {feature.desc}
                  </p>
                </div>
              );
            },
          )}
        </div>
      </section>
      {/* Packages */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#2C1A0E]">
          {locale === "ar" ? "باقات الشركات" : "Corporate Packages"}
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: locale === "ar" ? "الباقة الصغيرة" : "Small Package",

              units: locale === "ar" ? "100 - 299 وحدة" : "100 - 299 Units",

              price:
                locale === "ar" ? "من 90 جنيه / الوحدة" : "From 90 EGP / Unit",

              color: "#4A6741",

              features:
                locale === "ar"
                  ? ["تغليف مخصص", "شعار الشركة", "توصيل مجاني"]
                  : ["Custom Packaging", "Company Logo", "Free Delivery"],
            },

            {
              title: locale === "ar" ? "الباقة المتوسطة" : "Medium Package",

              units: locale === "ar" ? "300 - 999 وحدة" : "300 - 999 Units",

              price:
                locale === "ar" ? "من 75 جنيه / الوحدة" : "From 75 EGP / Unit",

              color: "#C9942A",

              featured: true,

              features:
                locale === "ar"
                  ? [
                      "تغليف فاخر",
                      "رسالة مطبوعة",
                      "توصيل مجاني",
                      "أولوية التنفيذ",
                    ]
                  : [
                      "Luxury Packaging",
                      "Printed Message",
                      "Free Delivery",
                      "Priority Production",
                    ],
            },

            {
              title: locale === "ar" ? "الباقة الكبيرة" : "Large Package",

              units: locale === "ar" ? "1000+ وحدة" : "1000+ Units",

              price: locale === "ar" ? "سعر خاص" : "Special Pricing",

              color: "#670047",

              features:
                locale === "ar"
                  ? [
                      "تصميم حصري",
                      "مدير حساب",
                      "التوصيل والتوزيع",
                      "خصومات إضافية",
                    ]
                  : [
                      "Exclusive Design",
                      "Dedicated Manager",
                      "Delivery & Distribution",
                      "Extra Discount",
                    ],
            },
          ].map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border-2 p-8 transition hover:-translate-y-2 hover:shadow-2xl ${
                pkg.featured
                  ? "border-[#C9942A] bg-[#FFF8E7]"
                  : "border-[#E8D7B6] bg-white"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 right-8 rounded-full bg-[#C9942A] px-5 py-2 text-sm font-bold text-white">
                  {locale === "ar" ? "الأكثر طلباً" : "Most Popular"}
                </div>
              )}

              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  backgroundColor: pkg.color + "20",
                }}
              >
                <Package color={pkg.color} size={24} />
              </div>

              <h3 className="text-3xl font-bold text-[#2C1A0E]">{pkg.title}</h3>

              <p className="mt-2 text-[#7A5C3A]">{pkg.units}</p>

              <p
                className="mt-5 text-2xl font-bold"
                style={{
                  color: pkg.color,
                }}
              >
                {pkg.price}
              </p>

              <div className="mt-8 space-y-4">
                {pkg.features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} color={pkg.color} />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  document.getElementById("quote-form")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="mt-10 w-full rounded-2xl py-4 font-semibold text-white transition hover:opacity-90"
                style={{
                  backgroundColor: pkg.color,
                }}
              >
                {locale === "ar" ? "اطلب عرض سعر" : "Request Quote"}
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Quote Form */}
      <section id="quote-form" className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-[32px] border border-[#E8D7B6] bg-white p-10 shadow-sm">
          <h2 className="text-center text-5xl font-bold text-[#2C1A0E]">
            {locale === "ar" ? "اطلب عرض سعر" : "Request Quote"}
          </h2>

          <p className="mt-3 mb-10 text-center text-[#7A5C3A]">
            {locale === "ar"
              ? "املأ البيانات وسيتواصل معك فريقنا خلال 24 ساعة."
              : "Fill your details and our team will contact you within 24 hours."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-[#2C1A0E]">
                  {locale === "ar"
                    ? "اسم الشركة / المؤسسة *"
                    : "Company Name *"}
                </label>

                <input
                  required
                  value={form.company}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      company: e.target.value,
                    })
                  }
                  placeholder={
                    locale === "ar" ? "شركة النور" : "Al Nour Company"
                  }
                  className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition focus:border-[#670047]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#2C1A0E]">
                  {locale === "ar" ? "اسم المسؤول *" : "Contact Person *"}
                </label>

                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder={locale === "ar" ? "أحمد محمد" : "Ahmed Mohamed"}
                  className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition focus:border-[#670047]"
                />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              
              <div>
                <label className="mb-2 block font-semibold text-[#2C1A0E]">
                  {locale === "ar" ? "رقم الهاتف *" : "Phone Number *"}
                </label>

                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  placeholder="+20 100 0000000"
                  dir="ltr"
                  className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition focus:border-[#670047]"
                />
              </div>
              <div>
                <label className="mb-2 block font-semibold text-[#2C1A0E]">
                  {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                </label>

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="info@company.com"
                  dir="ltr"
                  className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition focus:border-[#670047]"
                />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-[#2C1A0E]">
                  {locale === "ar"
                    ? "الكمية المطلوبة *"
                    : "Required Quantity *"}
                </label>

                <select
                  required
                  value={form.quantity}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      quantity: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition focus:border-[#670047]"
                >
                  <option value="">
                    {locale === "ar" ? "اختر الكمية" : "Select Quantity"}
                  </option>

                  <option>100 - 299</option>
                  <option>300 - 499</option>
                  <option>500 - 999</option>
                  <option>1000+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#2C1A0E]">
                  {locale === "ar" ? "تاريخ التسليم المطلوب" : "Delivery Date"}
                </label>

                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      date: e.target.value,
                    })
                  }
                  dir="ltr"
                  className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition focus:border-[#670047]"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block font-semibold text-[#2C1A0E]">
                {locale === "ar" ? "ملاحظات إضافية" : "Additional Notes"}
              </label>

              <textarea
                rows={5}
                value={form.notes}
                onChange={(e) =>
                  setForm({
                    ...form,
                    notes: e.target.value,
                  })
                }
                placeholder={
                  locale === "ar"
                    ? "أخبرنا عن احتياجاتك، شعار الشركة، نوع المنتج..."
                    : "Tell us about your requirements..."
                }
                className="w-full resize-none rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition focus:border-[#670047]"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#670047] py-4 text-lg font-semibold text-white transition hover:bg-[#7D0056]"
            >
              <Send size={18} />
              <span>{locale === "ar" ? "إرسال الطلب" : "Send Request"}</span>
            </button>
          </form>

          <div className="mt-8 border-t border-[#E8D7B6] pt-8 text-center">
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:bg-[#20B558]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>

              {locale === "ar"
                ? "تواصل مباشرة عبر واتساب"
                : "Contact via WhatsApp"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
