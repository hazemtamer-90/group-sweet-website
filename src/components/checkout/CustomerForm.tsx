"use client";

import { User, Phone, Mail } from "lucide-react";
import { useLocale } from "next-intl";

interface CustomerFormProps {
  value: {
    fullName: string;
    phone: string;
    alternatePhone: string;
    email: string;
  };

  onChange: (value: CustomerFormProps["value"]) => void;
}

export default function CustomerForm({ value, onChange }: CustomerFormProps) {
  const locale = useLocale();

  const isArabic = locale === "ar";

  const updateField = (
    field: keyof CustomerFormProps["value"],
    fieldValue: string,
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  const inputClass =
    "mt-2 w-full rounded-2xl border border-[#E8D7B6] bg-white px-4 py-3 outline-none transition focus:border-[#670047]";

  return (
    <div className="rounded-3xl border border-[#E8D7B6] bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold text-[#2C1A0E]">
        {isArabic ? "بيانات العميل" : "Customer Information"}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="flex items-center gap-2 font-medium text-[#2C1A0E]">
            <User size={18} />
            {isArabic ? "الاسم بالكامل" : "Full Name"} *
          </label>

          <input
            value={value.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            placeholder={
              isArabic ? "أدخل اسمك بالكامل" : "Enter your full name"
            }
            className={inputClass}
            required
            aria-label="Full Name"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 font-medium text-[#2C1A0E]">
            <Phone size={18} />
            {isArabic ? "رقم الهاتف" : "Phone Number"} *
          </label>

          <input
            type="tel"
            value={value.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="01xxxxxxxxx"
            className={inputClass}
            required
            aria-label="Phone Number"
            autoComplete="tel"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 font-medium text-[#2C1A0E]">
            <Phone size={18} />
            {isArabic ? "رقم هاتف احتياطي" : "Alternative Phone"}
          </label>

          <input
            type="tel"
            value={value.alternatePhone}
            onChange={(e) => updateField("alternatePhone", e.target.value)}
            placeholder={isArabic ? "اختياري" : "Optional"}
            className={inputClass}
            aria-label="Alternative Phone"
            autoComplete="tel-national"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 font-medium text-[#2C1A0E]">
            <Mail size={18} />
            {isArabic ? "البريد الإلكتروني" : "Email"}
          </label>

          <input
            type="email"
            value={value.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="example@email.com"
            className={inputClass}
            required
            aria-label="Email Address"
            autoComplete="email"
          />
        </div>
      </div>
    </div>
  );
}
