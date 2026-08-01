"use client";

import { MapPin } from "lucide-react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

import { Reveal } from "@/components/animations";

export default function GoogleMap() {
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden pb-20 pt-6">
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9942A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <Reveal direction="up">
          <div className="mb-10 text-center">
            <motion.div
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
              }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#670047]/10"
            >
              <MapPin size={21} className="text-[#670047]" />
            </motion.div>

            <h2 className="text-3xl font-bold text-[#2C1A0E] sm:text-4xl">
              {locale === "ar" ? "موقع المصنع" : "Find Us"}
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-[#7A5C3A]">
              {locale === "ar"
                ? "يمكنك زيارة المصنع أو استخدام الخريطة للوصول إلينا بسهولة."
                : "Visit our factory or use the map for directions."}
            </p>
          </div>
        </Reveal>

        {/* Map */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative"
        >
          {/* Map Glow */}
          <div className="pointer-events-none absolute -inset-3 rounded-[40px] bg-gradient-to-br from-[#670047]/5 via-transparent to-[#C9942A]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-[32px] border border-[#E8D7B6] bg-white p-2 shadow-[0_20px_60px_rgba(44,26,14,0.10)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_80px_rgba(44,26,14,0.14)]">
            <div className="relative overflow-hidden rounded-[26px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6371.192150615422!2d31.379612082986416!3d30.142814550589375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145816c3d4a7cab5%3A0xe5b6d742375e4371!2sGroup%20Sweet%20-%20Emam%20%26%20Refaey%20Confectionery%20%26%20Chocolate!5e1!3m2!1sen!2seg!4v1785384704562!5m2!1sen!2seg"
                width="100%"
                height="420"
                style={{
                  border: 0,
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title={
                  locale === "ar"
                    ? "موقع مصنع جروب سويت"
                    : "Group Sweet Factory Location"
                }
                className="block w-full"
              />

              {/* Small Location Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="pointer-events-none absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#670047] text-white">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#2C1A0E]">
                      {locale === "ar"
                        ? "مصنع جروب سويت"
                        : "Group Sweet Factory"}
                    </p>

                    <p className="mt-0.5 text-xs text-[#7A5C3A]">
                      {locale === "ar"
                        ? "مدينة العبور، القاهرة"
                        : "Obour City, Cairo"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}