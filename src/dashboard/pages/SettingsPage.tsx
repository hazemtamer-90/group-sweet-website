"use client";

import { Save, Upload } from "lucide-react";
import P from "@/lib/dashboard/palette";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: P.text }}>
            الإعدادات
          </h1>

          <p className="text-sm mt-1" style={{ color: P.muted }}>
            إعدادات الموقع ولوحة الإدارة
          </p>
        </div>

        <button
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
          style={{ background: P.primary }}
        >
          <Save size={18} />
          حفظ التغييرات
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-2xl p-6" style={{ background: P.surface }}>
          <h2 className="text-lg font-bold mb-5" style={{ color: P.text }}>
            بيانات المصنع
          </h2>

          <div className="space-y-4">
            <input
              placeholder="اسم المصنع"
              defaultValue="Group Sweet"
              className="w-full border rounded-xl p-3"
            />

            <input
              placeholder="البريد الإلكتروني"
              defaultValue="admin@groupsweet.com"
              className="w-full border rounded-xl p-3"
            />

            <input
              placeholder="رقم الهاتف"
              defaultValue="+20 100 000 0000"
              className="w-full border rounded-xl p-3"
            />

            <textarea
              rows={4}
              placeholder="العنوان"
              defaultValue="القاهرة - مصر"
              className="w-full border rounded-xl p-3"
            />
          </div>
        </div>

        <div className="rounded-2xl p-6" style={{ background: P.surface }}>
          <h2 className="text-lg font-bold mb-5" style={{ color: P.text }}>
            شعار المصنع
          </h2>

          <div className="border-2 border-dashed rounded-2xl h-56 flex flex-col items-center justify-center">
            <Upload size={40} color={P.primary} />

            <p className="mt-4" style={{ color: P.muted }}>
              اسحب الشعار هنا أو اضغط للرفع
            </p>
          </div>
        </div>

        <div className="rounded-2xl p-6" style={{ background: P.surface }}>
          <h2 className="text-lg font-bold mb-5" style={{ color: P.text }}>
            إعدادات عامة
          </h2>

          <div className="space-y-4">
            <select className="w-full border rounded-xl p-3">
              <option>العربية</option>
              <option>English</option>
            </select>

            <select className="w-full border rounded-xl p-3">
              <option>الجنيه المصري</option>
              <option>USD</option>
            </select>

            <label className="flex items-center gap-3">
              <input type="checkbox" />

              <span>تفعيل الوضع الليلي</span>
            </label>
          </div>
        </div>

        <div className="rounded-2xl p-6" style={{ background: P.surface }}>
          <h2 className="text-lg font-bold mb-5" style={{ color: P.text }}>
            الأمان
          </h2>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="كلمة المرور الحالية"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="password"
              placeholder="كلمة المرور الجديدة"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="password"
              placeholder="تأكيد كلمة المرور"
              className="w-full border rounded-xl p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
