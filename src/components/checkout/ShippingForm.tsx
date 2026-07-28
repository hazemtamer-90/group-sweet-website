"use client";

import { MapPin, Home } from "lucide-react";
import { useLocale } from "next-intl";

interface ShippingFormProps {
  value: {
    governorate: string;
    city: string;
    district: string;
    street: string;
    building: string;
    floor: string;
    apartment: string;
    landmark: string;
  };

  onChange: (value: ShippingFormProps["value"]) => void;
}

export default function ShippingForm({ value, onChange }: ShippingFormProps) {
  const locale = useLocale();

  const ar = locale === "ar";

  const update = (field: keyof ShippingFormProps["value"], val: string) => {
    onChange({
      ...value,
      [field]: val,
    });
  };

  const input =
    "mt-2 w-full rounded-2xl border border-[#E8D7B6] px-4 py-3 outline-none transition focus:border-[#670047]";

  return (
    <div className="rounded-3xl border border-[#E8D7B6] bg-white p-8 shadow-sm">
      <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-[#2C1A0E]">
        <MapPin size={24} />
        {ar ? "عنوان الشحن" : "Shipping Address"}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label>{ar ? "المحافظة *" : "Governorate *"}</label>

          <select
            className={input}
            value={value.governorate}
            onChange={(e) => update("governorate", e.target.value)}
            required
            aria-label="Governorate"
            autoComplete="address-level1"
          >
            <option value="">
              {ar ? "اختر المحافظة" : "Select Governorate"}
            </option>

            <option>القاهرة</option>
            <option>الجيزة</option>
            <option>الإسكندرية</option>
            <option>القليوبية</option>
            <option>الدقهلية</option>
            <option>الشرقية</option>
            <option>الغربية</option>
            <option>المنوفية</option>
            <option>البحيرة</option>
            <option>كفر الشيخ</option>
            <option>الفيوم</option>
            <option>بني سويف</option>
            <option>المنيا</option>
            <option>أسيوط</option>
            <option>سوهاج</option>
            <option>قنا</option>
            <option>الأقصر</option>
            <option>أسوان</option>
          </select>
        </div>

        <div>
          <label>{ar ? "المدينة *" : "City *"}</label>

          <input
            type="text"
            className={input}
            value={value.city}
            onChange={(e) => update("city", e.target.value)}
            required
            aria-label="City"
            autoComplete="address-level2"
          />
        </div>

        <div>
          <label>{ar ? "المنطقة *" : "District *"}</label>

          <input
            type="text"
            className={input}
            value={value.district}
            onChange={(e) => update("district", e.target.value)}
            required
            aria-label="District"
            autoComplete="address-level3"
          />
        </div>

        <div>
          <label>{ar ? "الشارع *" : "Street *"}</label>

          <input
            type="text"
            className={input}
            value={value.street}
            onChange={(e) => update("street", e.target.value)}
            required
            aria-label="Street Address"
            autoComplete="street-address"
          />
        </div>

        <div>
          <label>{ar ? "رقم المبنى" : "Building"}</label>

          <input
            type="text"
            className={input}
            value={value.building}
            onChange={(e) => update("building", e.target.value)}
            aria-label="Building"
          />
        </div>

        <div>
          <label>{ar ? "الدور" : "Floor"}</label>

          <input
            type="text"
            className={input}
            value={value.floor}
            onChange={(e) => update("floor", e.target.value)}
            aria-label="Floor"
          />
        </div>

        <div>
          <label>{ar ? "رقم الشقة" : "Apartment"}</label>

          <input
            type="text"
            className={input}
            value={value.apartment}
            onChange={(e) => update("apartment", e.target.value)}
            aria-label="Apartment"
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="flex items-center gap-2">
          <Home size={18} />
          {ar ? "علامة مميزة" : "Landmark"}
        </label>

        <textarea
          rows={4}
          className={input}
          value={value.landmark}
          onChange={(e) => update("landmark", e.target.value)}
          placeholder={
            ar
              ? "مثال: أمام مسجد - بجوار محطة مترو..."
              : "Near mosque, metro station..."
          }
          aria-label="Landmark"
          autoComplete="off"
        />
      </div>
    </div>
  );
}
