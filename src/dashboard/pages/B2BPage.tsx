"use client";

import { Search, Building2, Plus, Pencil } from "lucide-react";
import { useState } from "react";
import P from "@/lib/dashboard/palette";
import { b2bOrders } from "@/lib/dashboard/data";
import type { B2BOrder } from "@/types/b2b";
import AddB2BModal from "../AddB2BModal";

export default function B2BPage() {
  const [open, setOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState<B2BOrder | null>(null);
  const [items, setItems] = useState<B2BOrder[]>(b2bOrders);

  const addOrder = (order: B2BOrder) => {
    if (editingOrder) {
      setItems(
        items.map((item) => (item.id === editingOrder.id ? order : item)),
      );
    } else {
      setItems([order, ...items]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: P.text }}>
            طلبات الشركات
          </h1>

          <p className="text-sm mt-1" style={{ color: P.muted }}>
            إدارة طلبات B2B
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setEditingOrder(null);
              setOpen(true);
            }}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
            style={{ background: P.primary }}
          >
            <Plus size={18} />
            إضافة طلب
          </button>

          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: P.primaryLt }}
          >
            <Building2 color={P.primary} />
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-5" style={{ background: P.surface }}>
        <div className="relative mb-6">
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2"
            size={18}
            color={P.muted}
          />

          <input
            placeholder="ابحث عن شركة..."
            className="w-full border rounded-xl py-3 pr-11 pl-4 outline-none"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-right py-4">الشركة</th>
              <th className="text-right">المسؤول</th>
              <th className="text-right">الهاتف</th>
              <th className="text-right">الكمية</th>
              <th className="text-right">الحالة</th>
              <th className="text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {items.map((order) => (
              <tr key={order.id} className="border-b last:border-0">
                <td className="py-5 font-semibold">{order.company}</td>

                <td>{order.contact}</td>

                <td>{order.phone}</td>

                <td>{order.quantity}</td>

                <td>
                  <span
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background:
                        order.status === "تم التسليم"
                          ? "#DCFCE7"
                          : order.status === "قيد التنفيذ"
                            ? "#FEF3C7"
                            : "#DBEAFE",
                      color:
                        order.status === "تم التسليم"
                          ? "#15803D"
                          : order.status === "قيد التنفيذ"
                            ? "#B45309"
                            : "#1D4ED8",
                    }}
                  >
                    {order.status}
                  </span>
                </td>

                <td>
                  <button
                    onClick={() => {
                      setEditingOrder(order);
                      setOpen(true);
                    }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: P.primaryLt,
                      color: P.primary,
                    }}
                  >
                    <Pencil size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddB2BModal
        open={open}
        order={editingOrder}
        onClose={() => {
          setOpen(false);
          setEditingOrder(null);
        }}
        onSave={addOrder}
      />
    </div>
  );
}
