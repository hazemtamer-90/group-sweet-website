"use client";

import { Mail } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHeroBackground from "@/components/contact/ContactHeroBackground";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import GoogleMap from "@/components/contact/GoogleMap";
import PageHero from "@/components/common/PageHero";

export default function ContactPage() {
  const locale = useLocale();
  const t = useTranslations("contactPage");

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#FAF5E9]">
        <PageHero title={t("heading")} subtitle={t("subtext")} />
        {/* Form */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-[30px] bg-white p-10 shadow-lg">
            <h2 className="mb-3 text-center text-3xl font-bold text-[#2C1A0E]">
              {t("formHeading")}
            </h2>

            <p className="mb-10 text-center text-[#7A5C3A]">
              {t("formSubtext")}
            </p>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-[#2C1A0E]">
                    {t("name")}
                  </label>

                  <input
                    type="text"
                    placeholder={
                      locale === "ar" ? "أدخل اسمك" : "Enter your name"
                    }
                    className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none focus:border-[#670047]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-[#2C1A0E]">
                    {t("phone")}
                  </label>

                  <input
                    type="tel"
                    placeholder="+20 100 0000000"
                    dir="ltr"
                    className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none focus:border-[#670047]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#2C1A0E]">
                  {t("email")}
                </label>

                <input
                  type="email"
                  placeholder="info@example.com"
                  dir="ltr"
                  className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none focus:border-[#670047]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#2C1A0E]">
                  {t("subject")}
                </label>

                <input
                  type="text"
                  placeholder={
                    locale === "ar" ? "موضوع الرسالة" : "Message Subject"
                  }
                  className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none focus:border-[#670047]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#2C1A0E]">
                  {t("message")}
                </label>

                <textarea
                  rows={6}
                  placeholder={
                    locale === "ar"
                      ? "اكتب رسالتك هنا..."
                      : "Write your message..."
                  }
                  className="w-full resize-none rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none focus:border-[#670047]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#670047] py-4 text-lg font-semibold text-white transition hover:bg-[#7D0056]"
              >
                <Mail size={20} />
                {t("submit")}
              </button>
            </form>
          </div>
        </section>

        <ContactInfoCards />

        <GoogleMap />
      </main>

      <Footer />
    </>
  );
}
