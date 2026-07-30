"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useLocale } from "next-intl";

export default function ContactInfoCards() {
  const locale = useLocale();

  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Support */}
        <div className="rounded-[32px] border border-[#E8D7B6] bg-gradient-to-br from-[#F6FFF8] to-[#EAF8EF] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#22C55E] text-white">
            <Mail size={30} />
          </div>

          <h3 className="text-4xl font-bold text-[#2C1A0E]">
            {locale === "ar" ? "الدعم" : "Support"}
          </h3>

          <p className="mt-5 max-w-md text-base leading-7 text-[#6B5A4A]">
            {locale === "ar"
              ? "هل تحتاج إلى مساعدة أو لديك استفسار؟ فريقنا جاهز لخدمتك."
              : "Need help with your order? Our team is here to help."}
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <Mail className="text-[#22C55E]" size={22} />
              <span className="text-lg">info@groupsweet.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-[#22C55E]" size={22} />
              <span dir="ltr" className="text-lg">
                +20 100 000 0000
              </span>
            </div>
          </div>
        </div>

        {/* Office */}
        <div className="rounded-[32px] border border-[#E8D7B6] bg-gradient-to-br from-[#FAF2FF] to-[#F5EBFF] p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#670047] text-white">
            <MapPin size={30} />
          </div>

          <h3 className="text-3xl font-bold text-[#2C1A0E]">
            {locale === "ar" ? "عنواننا" : "Our Offices"}
          </h3>

          <p className="mt-5 text-xl text-[#5E4A3A]">
            {locale === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}
          </p>

          <p className="mt-2 text-lg text-[#7A5C3A]">
            {locale === "ar" ? "مدينة العبور" : "Obour City"}
          </p>
        </div>
      </div>
    </section>
  );
}
