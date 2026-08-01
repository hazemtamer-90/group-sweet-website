"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

export default function ContactInfoCards() {
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden py-14">
      {/* Background Effects */}

      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#22C55E]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#670047]/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        <StaggerContainer className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Support */}

          <StaggerItem>
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative h-full overflow-hidden rounded-[32px] border border-[#E8D7B6] bg-gradient-to-br from-[#F6FFF8] to-[#EAF8EF] p-8 shadow-sm transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(34,197,94,0.10)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#22C55E]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">
                <motion.div
                  whileHover={{
                    rotate: -7,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                  className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#22C55E] text-white shadow-lg shadow-[#22C55E]/20"
                >
                  <Mail size={30} />
                </motion.div>

                <h3 className="text-3xl font-bold text-[#2C1A0E] sm:text-4xl">
                  {locale === "ar" ? "الدعم" : "Support"}
                </h3>

                <p className="mt-5 max-w-md text-base leading-7 text-[#6B5A4A]">
                  {locale === "ar"
                    ? "هل تحتاج إلى مساعدة أو لديك استفسار؟ فريقنا جاهز لخدمتك."
                    : "Need help with your order? Our team is here to help."}
                </p>

                <div className="mt-10 space-y-4">
                  <motion.a
                    href="mailto:info@groupsweet.com"
                    whileHover={{
                      x: locale === "ar" ? -4 : 4,
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-[#22C55E]/10 bg-white/60 px-4 py-3 transition-colors hover:bg-white"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22C55E]/10">
                      <Mail className="text-[#22C55E]" size={19} />
                    </div>

                    <span
                      dir="ltr"
                      className="text-sm text-[#2C1A0E] sm:text-base"
                    >
                      info@groupsweet.com
                    </span>
                  </motion.a>

                  <motion.a
                    href="tel:+201000000000"
                    whileHover={{
                      x: locale === "ar" ? -4 : 4,
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-[#22C55E]/10 bg-white/60 px-4 py-3 transition-colors hover:bg-white"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22C55E]/10">
                      <Phone className="text-[#22C55E]" size={19} />
                    </div>

                    <span
                      dir="ltr"
                      className="text-sm text-[#2C1A0E] sm:text-base"
                    >
                      +20 100 000 0000
                    </span>
                  </motion.a>
                </div>

                <div className="mt-8 h-1 w-12 rounded-full bg-[#22C55E] transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.div>
          </StaggerItem>

          {/* Office */}

          <StaggerItem>
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative h-full overflow-hidden rounded-[32px] border border-[#E8D7B6] bg-gradient-to-br from-[#FAF2FF] to-[#F5EBFF] p-8 shadow-sm transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(103,0,71,0.10)] sm:p-10"
            >
              <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#670047]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">
                <motion.div
                  whileHover={{
                    rotate: 7,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                  className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#670047] text-white shadow-lg shadow-[#670047]/20"
                >
                  <MapPin size={30} />
                </motion.div>

                <h3 className="text-3xl font-bold text-[#2C1A0E]">
                  {locale === "ar" ? "عنواننا" : "Our Offices"}
                </h3>

                <p className="mt-5 text-xl font-medium text-[#5E4A3A]">
                  {locale === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}
                </p>

                <p className="mt-2 text-lg text-[#7A5C3A]">
                  {locale === "ar" ? "مدينة العبور" : "Obour City"}
                </p>

                <div className="mt-10 rounded-2xl border border-[#670047]/10 bg-white/50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#670047]/10">
                      <MapPin size={19} className="text-[#670047]" />
                    </div>

                    <div>
                      <p className="font-semibold text-[#2C1A0E]">
                        {locale === "ar"
                          ? "مصنع جروب سويت"
                          : "Group Sweet Factory"}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[#7A5C3A]">
                        {locale === "ar"
                          ? "يمكنك الوصول إلينا بسهولة من خلال الخريطة بالأسفل."
                          : "You can easily find us using the map below."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 h-1 w-12 rounded-full bg-[#670047] transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}