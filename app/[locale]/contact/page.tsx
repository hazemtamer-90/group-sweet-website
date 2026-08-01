"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import GoogleMap from "@/components/contact/GoogleMap";
import PageHero from "@/components/common/PageHero";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

export default function ContactPage() {
  const locale = useLocale();
  const t = useTranslations("contactPage");

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen overflow-hidden bg-[#FAF5E9]">
        {/* Hero */}
        <PageHero title={t("heading")} subtitle={t("subtext")} />

        {/* Contact Form */}
        <section className="relative py-20 lg:py-24">
          {/* Background Decorations */}
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#C9942A]/5 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#670047]/5 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6">
            <Reveal direction="up" duration={0.7}>
              <div className="relative overflow-hidden rounded-[32px] border border-[#E8D7B6] bg-white p-6 shadow-[0_25px_80px_rgba(44,26,14,0.08)] sm:p-10 lg:p-12">
                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#C9942A]/5 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#670047]/5 blur-3xl" />

                <div className="relative">
                  {/* Form Header */}
                  <div className="mb-10 text-center">
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
                      className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#670047]/10"
                    >
                      <Mail size={23} className="text-[#670047]" />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-[#2C1A0E] sm:text-4xl">
                      {t("formHeading")}
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl leading-7 text-[#7A5C3A]">
                      {t("formSubtext")}
                    </p>
                  </div>

                  {!submitted ? (
                    <form onSubmit={handleSubmit}>
                      <StaggerContainer className="space-y-5">
                        {/* Name + Phone */}
                        <StaggerItem>
                          <div className="grid gap-5 md:grid-cols-2">
                            {/* Name */}
                            <div>
                              <label className="mb-2 block font-semibold text-[#2C1A0E]">
                                {t("name")}
                              </label>

                              <input
                                required
                                type="text"
                                value={form.name}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    name: e.target.value,
                                  })
                                }
                                placeholder={
                                  locale === "ar"
                                    ? "أدخل اسمك"
                                    : "Enter your name"
                                }
                                className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 text-[#2C1A0E] outline-none transition-all duration-300 placeholder:text-[#A58A6B] hover:border-[#C9942A] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
                              />
                            </div>

                            {/* Phone */}
                            <div>
                              <label className="mb-2 block font-semibold text-[#2C1A0E]">
                                {t("phone")}
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
                                className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 text-[#2C1A0E] outline-none transition-all duration-300 placeholder:text-[#A58A6B] hover:border-[#C9942A] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
                              />
                            </div>
                          </div>
                        </StaggerItem>

                        {/* Email */}
                        <StaggerItem>
                          <div>
                            <label className="mb-2 block font-semibold text-[#2C1A0E]">
                              {t("email")}
                            </label>

                            <input
                              required
                              type="email"
                              value={form.email}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  email: e.target.value,
                                })
                              }
                              placeholder="info@example.com"
                              dir="ltr"
                              className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 text-[#2C1A0E] outline-none transition-all duration-300 placeholder:text-[#A58A6B] hover:border-[#C9942A] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
                            />
                          </div>
                        </StaggerItem>

                        {/* Subject */}
                        <StaggerItem>
                          <div>
                            <label className="mb-2 block font-semibold text-[#2C1A0E]">
                              {t("subject")}
                            </label>

                            <input
                              required
                              type="text"
                              value={form.subject}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  subject: e.target.value,
                                })
                              }
                              placeholder={
                                locale === "ar"
                                  ? "موضوع الرسالة"
                                  : "Message Subject"
                              }
                              className="w-full rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 text-[#2C1A0E] outline-none transition-all duration-300 placeholder:text-[#A58A6B] hover:border-[#C9942A] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
                            />
                          </div>
                        </StaggerItem>

                        {/* Message */}
                        <StaggerItem>
                          <div>
                            <label className="mb-2 block font-semibold text-[#2C1A0E]">
                              {t("message")}
                            </label>

                            <textarea
                              required
                              rows={6}
                              value={form.message}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  message: e.target.value,
                                })
                              }
                              placeholder={
                                locale === "ar"
                                  ? "اكتب رسالتك هنا..."
                                  : "Write your message..."
                              }
                              className="w-full resize-none rounded-2xl border border-[#D9C6A5] bg-[#FAF5E9] px-5 py-4 text-[#2C1A0E] outline-none transition-all duration-300 placeholder:text-[#A58A6B] hover:border-[#C9942A] focus:border-[#670047] focus:bg-white focus:shadow-[0_8px_25px_rgba(103,0,71,0.06)]"
                            />
                          </div>
                        </StaggerItem>

                        {/* Submit */}
                        <StaggerItem>
                          <motion.button
                            type="submit"
                            whileHover={{
                              y: -3,
                              scale: 1.01,
                            }}
                            whileTap={{
                              scale: 0.98,
                            }}
                            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#670047] py-4 text-lg font-semibold text-white shadow-lg shadow-[#670047]/10 transition-colors duration-300 hover:bg-[#7D0056]"
                          >
                            <Send
                              size={20}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />

                            <span>{t("submit")}</span>
                          </motion.button>
                        </StaggerItem>
                      </StaggerContainer>
                    </form>
                  ) : (
                    /* Success State */
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 30,
                        scale: 0.96,
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
                      className="py-10 text-center"
                    >
                      <motion.div
                        initial={{
                          scale: 0,
                          rotate: -20,
                        }}
                        animate={{
                          scale: 1,
                          rotate: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 14,
                          delay: 0.1,
                        }}
                        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4A6741]/10"
                      >
                        <CheckCircle2 size={40} className="text-[#4A6741]" />
                      </motion.div>

                      <h3 className="mt-6 text-3xl font-bold text-[#2C1A0E]">
                        {locale === "ar"
                          ? "تم إرسال رسالتك بنجاح"
                          : "Message Sent Successfully"}
                      </h3>

                      <p className="mx-auto mt-3 max-w-md leading-7 text-[#7A5C3A]">
                        {locale === "ar"
                          ? "شكراً لتواصلك معنا. سيقوم فريق جروب سويت بالرد عليك في أقرب وقت ممكن."
                          : "Thank you for contacting us. The Group Sweet team will get back to you as soon as possible."}
                      </p>

                      <motion.button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);

                          setForm({
                            name: "",
                            phone: "",
                            email: "",
                            subject: "",
                            message: "",
                          });
                        }}
                        whileHover={{
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="mt-7 rounded-2xl border border-[#670047] px-7 py-3 font-semibold text-[#670047] transition-colors hover:bg-[#670047] hover:text-white"
                      >
                        {locale === "ar"
                          ? "إرسال رسالة أخرى"
                          : "Send Another Message"}
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact Information */}
        <ContactInfoCards />

        {/* Google Map */}
        <GoogleMap />
      </main>

      <Footer />
    </>
  );
}
