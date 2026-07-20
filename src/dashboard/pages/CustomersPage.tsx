"use client";

import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import P from "@/lib/dashboard/palette";
import { customers } from "@/lib/dashboard/data";
import type { Customer } from "@/types/customer";
import AddCustomerModal from "../AddCustomerModal";

export default function CustomersPage() {
  const [items, setItems] = useState<Customer[]>(customers);
  const [open, setOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

  const saveCustomer = (customer: Customer) => {
    if (editingCustomer) {
      setItems(
        items.map((item) =>
          item.id === editingCustomer.id ? customer : item
        )
      );
    } else {
      setItems([
        {
          ...customer,
          id: Date.now(),
        },
        ...items,
      ]);
    }
  };

  const deleteCustomer = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-3xl font-bold"
            style={{ color: P.text }}
          >
            العملاء
          </h1>

          <p
            className="text-sm mt-1"
            style={{ color: P.muted }}
          >
            إدارة جميع العملاء
          </p>
        </div>

        <button
          onClick={() => {
            setEditingCustomer(null);
            setOpen(true);
          }}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
          style={{ background: P.primary }}
        >
          <Plus size={18} />
          إضافة عميل
        </button>
      </div>

      <div
        className="rounded-2xl p-5"
        style={{ background: P.surface }}
      >
        <div className="relative mb-6">
          <Search
            size={18}
            color={P.muted}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />

          <input
            placeholder="ابحث عن عميل..."
            className="w-full border rounded-xl py-3 pr-11 px-4 outline-none"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-right py-4">الاسم</th>
              <th className="text-right">الهاتف</th>
              <th className="text-right">المدينة</th>
              <th className="text-right">الطلبات</th>
              <th className="text-right">الإجمالي</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {items.map((customer) => (
              <tr
                key={customer.id}
                className="border-b last:border-0"
              >
                <td className="py-5 font-semibold">
                  {customer.name}
                </td>

                <td>{customer.phone}</td>

                <td>{customer.city}</td>

                <td>{customer.orders}</td>

                <td>{customer.totalSpent} ج</td>

                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingCustomer(customer);
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

                    <button
                      onClick={() => deleteCustomer(customer.id)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: "#FEE2E2",
                        color: "#DC2626",
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddCustomerModal
        open={open}
        customer={editingCustomer}
        onClose={() => {
          setOpen(false);
          setEditingCustomer(null);
        }}
        onSave={saveCustomer}
      />
    </div>
  );
}