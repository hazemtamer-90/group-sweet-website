"use client";

export default function ProductFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3">

      <select className="h-12 rounded-2xl border border-gray-200 bg-white px-4 text-sm">
        <option>كل التصنيفات</option>
        <option>حلويات المولد</option>
        <option>المكسرات</option>
        <option>الملبن</option>
      </select>

      <select className="h-12 rounded-2xl border border-gray-200 bg-white px-4 text-sm">
        <option>كل الحالات</option>
        <option>متوفر</option>
        <option>منخفض</option>
        <option>غير متوفر</option>
      </select>

      <select className="h-12 rounded-2xl border border-gray-200 bg-white px-4 text-sm">
        <option>الأحدث</option>
        <option>الأقدم</option>
        <option>الأعلى مبيعاً</option>
      </select>

    </div>
  );
}