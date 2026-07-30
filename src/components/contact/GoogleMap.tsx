"use client";

import { MapPin } from "lucide-react";
import { useLocale } from "next-intl";

export default function GoogleMap() {
  const locale = useLocale();

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-[#2C1A0E]">
          {locale === "ar" ? "موقع المصنع" : "Find Us"}
        </h2>

        <p className="mt-3 text-[#7A5C3A]">
          {locale === "ar"
            ? "يمكنك زيارة المصنع أو استخدام الخريطة للوصول إلينا بسهولة."
            : "Visit our factory or use the map for directions."}
        </p>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-[#E8D7B6] bg-white shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6371.192150615422!2d31.379612082986416!3d30.142814550589375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145816c3d4a7cab5%3A0xe5b6d742375e4371!2sGroup%20Sweet%20-%20Emam%20%26%20Refaey%20Confectionery%20%26%20Chocolate!5e1!3m2!1sen!2seg!4v1785384704562!5m2!1sen!2seg"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
