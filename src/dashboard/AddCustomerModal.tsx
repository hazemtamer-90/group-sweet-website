"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import P from "@/lib/dashboard/palette";
import type { Customer } from "@/types/customer";

interface Props {
  open: boolean;
  onClose: () => void;
  customer?: Customer | null;
  onSave: (customer: Customer) => void;
}

export default function AddCustomerModal({
  open,
  onClose,
  customer,
  onSave,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [orders, setOrders] = useState("");
  const [totalSpent, setTotalSpent] = useState("");

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (!customer) return;

    setName(customer.name);
    setPhone(customer.phone);
    setCity(customer.city);
    setOrders(String(customer.orders));
    setTotalSpent(String(customer.totalSpent));
  }, [customer]);
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div
        className="w-[650px] rounded-2xl p-6"
        style={{ background: P.surface }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: P.text }}>
            {customer ? "تعديل العميل" : "إضافة عميل"}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="اسم العميل"
            className="w-full border rounded-xl p-3"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="رقم الهاتف"
            className="w-full border rounded-xl p-3"
          />

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="المدينة"
            className="w-full border rounded-xl p-3"
          />

          <input
            value={orders}
            onChange={(e) => setOrders(e.target.value)}
            placeholder="عدد الطلبات"
            className="w-full border rounded-xl p-3"
          />

          <input
            value={totalSpent}
            onChange={(e) => setTotalSpent(e.target.value)}
            placeholder="إجمالي المشتريات"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button onClick={onClose} className="px-5 py-3 rounded-xl border">
            إلغاء
          </button>

          <button
            onClick={() => {
              onSave({
                id: customer?.id ?? Date.now(),
                name,
                phone,
                city,
                orders: Number(orders),
                totalSpent: Number(totalSpent),
              });

              onClose();
            }}
            className="px-5 py-3 rounded-xl text-white"
            style={{ background: P.primary }}
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
