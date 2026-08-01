"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";

import PageHero from "@/components/common/PageHero";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

import {
  Package,
  Users,
  Calendar,
  Palette,
  CheckCircle2,
  Send,
  Sparkles,
  ArrowDown,
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

  const packages = [
    {
      title: locale === "ar" ? "الباقة الصغيرة" : "Small Package",

      units: locale === "ar" ? "100 - 299 وحدة" : "100 - 299 Units",

      price: locale === "ar" ? "من 90 جنيه / الوحدة" : "From 90 EGP / Unit",

      color: "#4A6741",

      features:
        locale === "ar"
          ? ["تغليف مخصص", "شعار الشركة", "توصيل مجاني"]
          : ["Custom Packaging", "Company Logo", "Free Delivery"],
    },

    {
      title: locale === "ar" ? "الباقة المتوسطة" : "Medium Package",

      units: locale === "ar" ? "300 - 999 وحدة" : "300 - 999 Units",

      price: locale === "ar" ? "من 75 جنيه / الوحدة" : "From 75 EGP / Unit",

      color: "#C9942A",
      featured: true,

      features:
        locale === "ar"
          ? ["تغليف فاخر", "رسالة مطبوعة", "توصيل مجاني", "أولوية التنفيذ"]
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
          ? ["تصميم حصري", "مدير حساب", "التوصيل والتوزيع", "خصومات إضافية"]
          : [
              "Exclusive Design",
              "Dedicated Manager",
              "Delivery & Distribution",
              "Extra Discount",
            ],
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (submitted) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FAF5E9] p-6">
        <motion.div
          className="absolute left-[-100px] top-20 h-80 w-80 rounded-full bg-[#C9942A]/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-10 right-[-100px] h-96 w-96 rounded-full bg-[#670047]/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 w-full max-w-lg rounded-[32px] border border-[#E8D7B6] bg-white p-8 text-center shadow-[0_25px_80px_rgba(44,26,14,0.10)] sm:p-10"
        >
          <motion.div
            initial={{
              scale: 0,
              rotate: -30,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 220,
              damping: 14,
            }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#4A6741]/10"
          >
            <CheckCircle2 size={42} className="text-[#4A6741]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-3xl font-bold text-[#2C1A0E]"
          >
            {locale === "ar"
              ? "تم إرسال طلبك بنجاح"
              : "Request Sent Successfully"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-4 leading-7 text-[#7A5C3A]"
          >
            {locale === "ar"
              ? "سيقوم فريقنا بالتواصل معك خلال 24 ساعة."
              : "Our team will contact you within 24 hours."}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSubmitted(false)}
            className="mt-8 rounded-2xl bg-[#670047] px-8 py-3 font-semibold text-white shadow-lg shadow-[#670047]/10 transition-colors hover:bg-[#7D0056]"
          >
            {locale === "ar" ? "إرسال طلب جديد" : "Send New Request"}
          </motion.button>
        </motion.div>
      </main>
    );
  }
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF5E9]">
      {/* Hero */}
      <Reveal direction="down" duration={0.8}>
        <PageHero title={t("heading")} subtitle={t("subtext")} />
      </Reveal>
      {/* Features */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#C9942A]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#670047]/5 blur-3xl" />

        <StaggerContainer className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {(
            t.raw("features") as {
              title: string;
              desc: string;
            }[]
          ).map((feature, index) => {
            const Icon = featureIcons[index];
            const color = featureColors[index];

            return (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-[#E8D7B6] bg-white p-6 shadow-sm"
                >
                  <motion.div
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: `${color}20`,
                    }}
                  />

                  <motion.div
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${color}15`,
                    }}
                  >
                    <Icon size={24} style={{ color }} />
                  </motion.div>

                  <h3 className="relative text-xl font-bold text-[#2C1A0E]">
                    {feature.title}
                  </h3>

                  <p className="relative mt-3 leading-7 text-[#7A5C3A]">
                    {feature.desc}
                  </p>

                  <div
                    className="mt-6 h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-20"
                    style={{
                      backgroundColor: color,
                    }}
                  />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>
      {/* Packages */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 lg:pb-28">
        <Reveal direction="up">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9942A]" />

              <Sparkles size={16} className="text-[#C9942A]" />

              <span className="h-px w-10 bg-[#C9942A]" />
            </div>

            <h2 className="text-3xl font-bold text-[#2C1A0E] sm:text-4xl">
              {locale === "ar" ? "باقات الشركات" : "Corporate Packages"}
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#7A5C3A]">
              {locale === "ar"
                ? "اختر الباقة المناسبة لحجم طلبك وسنتولى تجهيز كل التفاصيل."
                : "Choose the package that matches your order size and we'll handle the details."}
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid items-stretch gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.title}>
              <motion.div
                whileHover={{
                  y: -12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 p-7 transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(44,26,14,0.12)] sm:p-8 ${
                  pkg.featured
                    ? "border-[#C9942A] bg-[#FFF8E7]"
                    : "border-[#E8D7B6] bg-white"
                }`}
              >
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-[0.07] blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-[0.12]"
                  style={{
                    backgroundColor: pkg.color,
                  }}
                />

                {pkg.featured && (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.25,
                      type: "spring",
                    }}
                    className={`absolute -top-px ${
                      locale === "ar" ? "right-7" : "left-7"
                    } rounded-b-2xl bg-[#C9942A] px-5 py-2 text-xs font-bold text-white shadow-lg`}
                  >
                    {locale === "ar" ? "الأكثر طلباً" : "Most Popular"}
                  </motion.div>
                )}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${pkg.color}20`,
                  }}
                >
                  <Package style={{ color: pkg.color }} size={24} />
                </motion.div>

                <h3 className="relative text-2xl font-bold text-[#2C1A0E] sm:text-3xl">
                  {pkg.title}
                </h3>

                <p className="relative mt-2 text-[#7A5C3A]">{pkg.units}</p>

                <p
                  className="relative mt-5 text-xl font-bold sm:text-2xl"
                  style={{
                    color: pkg.color,
                  }}
                >
                  {pkg.price}
                </p>

                <div className="relative mt-8 flex-1 space-y-4">
                  {pkg.features.map((item, featureIndex) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: locale === "ar" ? 15 : -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: featureIndex * 0.08,
                      }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0"
                        style={{
                          color: pkg.color,
                        }}
                      />

                      <span className="text-[#2C1A0E]">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={scrollToQuote}
                  className="relative mt-10 flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-semibold text-white shadow-sm"
                  style={{
                    backgroundColor: pkg.color,
                  }}
                >
                  <span>
                    {locale === "ar" ? "اطلب عرض سعر" : "Request Quote"}
                  </span>

                  <motion.span
                    animate={{
                      y: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowDown size={16} />
                  </motion.span>
                </motion.button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>{" "}
      {/* Quote Form */}
      <section
        id="quote-form"
        className="relative scroll-mt-28 px-6 pb-24 lg:pb-28"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#EFE4C8]/40 to-transparent" />

        <Reveal direction="up" duration={0.7}>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-[#E8D7B6] bg-white p-6 shadow-[0_25px_80px_rgba(44,26,14,0.07)] sm:p-10">
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#C9942A]/5 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#670047]/5 blur-3xl" />

            <div className="relative">
              <div className="mb-4 flex justify-center">
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#670047]/10"
                >
                  <Send size={21} className="text-[#670047]" />
                </motion.div>
              </div>

              <h2 className="text-center text-3xl font-bold text-[#2C1A0E] sm:text-4xl lg:text-5xl">
                {locale === "ar" ? "اطلب عرض سعر" : "Request Quote"}
              </h2>

              <p className="mb-10 mt-3 text-center leading-7 text-[#7A5C3A]">
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
                      className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition-all duration-300 placeholder:text-[#A58A6B] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
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
                      placeholder={
                        locale === "ar" ? "أحمد محمد" : "Ahmed Mohamed"
                      }
                      className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition-all duration-300 placeholder:text-[#A58A6B] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
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
                      className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition-all duration-300 placeholder:text-[#A58A6B] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
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
                      className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition-all duration-300 placeholder:text-[#A58A6B] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
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
                      className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition-all duration-300 focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
                    >
                      <option value="">
                        {locale === "ar" ? "اختر الكمية" : "Select Quantity"}
                      </option>

                      <option value="100-299">100 - 299</option>
                      <option value="300-499">300 - 499</option>
                      <option value="500-999">500 - 999</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-[#2C1A0E]">
                      {locale === "ar"
                        ? "تاريخ التسليم المطلوب"
                        : "Delivery Date"}
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
                      className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition-all duration-300 focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
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
                    className="w-full resize-none rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 outline-none transition-all duration-300 placeholder:text-[#A58A6B] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#670047] py-4 text-lg font-semibold text-white shadow-lg shadow-[#670047]/10 transition-colors hover:bg-[#7D0056]"
                >
                  <Send size={18} />

                  <span>
                    {locale === "ar" ? "إرسال الطلب" : "Send Request"}
                  </span>
                </motion.button>
              </form>

              <div className="mt-8 border-t border-[#E8D7B6] pt-8 text-center">
                <p className="mb-4 text-sm text-[#7A5C3A]">
                  {locale === "ar"
                    ? "أو تواصل معنا مباشرة"
                    : "Or contact us directly"}
                </p>

                <motion.a
                  href="https://wa.me/201000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg shadow-[#25D366]/10 transition-colors hover:bg-[#20B558]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>

                  {locale === "ar"
                    ? "تواصل مباشرة عبر واتساب"
                    : "Contact via WhatsApp"}
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
