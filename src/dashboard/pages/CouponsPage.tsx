"use client";

import { useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import P from "@/lib/dashboard/palette";
import AddCouponModal, { Coupon } from "@/dashboard/AddCouponModal";

const initialCoupons: Coupon[] = [
  {
    id: "1",
    code: "GROUP10",
    discount: 10,
    start: "2026-07-01",
    end: "2026-07-31",
    status: "نشط",
  },
  {
    id: "2",
    code: "SUMMER20",
    discount: 20,
    start: "2026-06-01",
    end: "2026-06-30",
    status: "منتهي",
  },
];

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: P.text }}>
            الكوبونات
          </h1>

          <p className="text-sm mt-1" style={{ color: P.muted }}>
            إدارة كوبونات الخصم
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
          style={{ background: P.primary }}
        >
          <Plus size={18} />
          إضافة كوبون
        </button>
      </div>

      <div className="rounded-2xl p-5" style={{ background: P.surface }}>
        <div className="relative mb-6">
          <Search
            size={18}
            color={P.muted}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />

          <input
            placeholder="ابحث..."
            className="w-full border rounded-xl py-3 pr-11 pl-4 outline-none"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-right py-4">الكود</th>
              <th className="text-right">الخصم</th>
              <th className="text-right">البداية</th>
              <th className="text-right">النهاية</th>
              <th className="text-right">الحالة</th>
              <th className="text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="border-b last:border-0">
                <td className="py-5 font-semibold">{coupon.code}</td>

                <td>{coupon.discount}%</td>

                <td>{coupon.start}</td>

                <td>{coupon.end}</td>

                <td>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background:
                        coupon.status === "نشط" ? "#DCFCE7" : "#FEE2E2",
                      color: coupon.status === "نشط" ? "#15803D" : "#DC2626",
                    }}
                  >
                    {coupon.status}
                  </span>
                </td>

                <td>
                  <div className="flex gap-2">
                    <button>
                      <Pencil size={18} color={P.primary} />
                    </button>

                    <button
                      onClick={() =>
                        setCoupons((prev) =>
                          prev.filter((c) => c.id !== coupon.id),
                        )
                      }
                    >
                      <Trash2 size={18} color="#DC2626" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddCouponModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={(coupon) => setCoupons((prev) => [coupon, ...prev])}
      />
    </div>
  );
}
