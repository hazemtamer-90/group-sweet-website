"use client";

import { useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import P from "@/lib/dashboard/palette";
import AddOfferModal, { Offer } from "@/dashboard/AddOfferModal";

const initialOffers: Offer[] = [
  {
    id: "1",
    title: "خصم المولد",
    discount: 15,
    start: "2026-07-01",
    end: "2026-07-31",
    status: "نشط",
  },
  {
    id: "2",
    title: "عرض الصيف",
    discount: 20,
    start: "2026-06-01",
    end: "2026-06-30",
    status: "منتهي",
  },
];

export default function OffersPage() {
  const [offers, setOffers] = useState<Offer[]>(initialOffers);

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: P.text }}>
            العروض
          </h1>

          <p className="text-sm mt-1" style={{ color: P.muted }}>
            إدارة عروض المتجر
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
          style={{ background: P.primary }}
        >
          <Plus size={18} />
          إضافة عرض
        </button>
      </div>

      <div className="rounded-2xl p-5" style={{ background: P.surface }}>
        <div className="relative mb-6">
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2"
            size={18}
            color={P.muted}
          />

          <input
            placeholder="ابحث..."
            className="w-full border rounded-xl py-3 pr-11 pl-4 outline-none"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-right py-4">العرض</th>
              <th className="text-right">الخصم</th>
              <th className="text-right">البداية</th>
              <th className="text-right">النهاية</th>
              <th className="text-right">الحالة</th>
              <th className="text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {offers.map((offer) => (
              <tr key={offer.id} className="border-b last:border-0">
                <td className="py-5 font-semibold">{offer.title}</td>

                <td>{offer.discount}%</td>

                <td>{offer.start}</td>

                <td>{offer.end}</td>

                <td>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background:
                        offer.status === "نشط" ? "#DCFCE7" : "#FEE2E2",

                      color: offer.status === "نشط" ? "#15803D" : "#DC2626",
                    }}
                  >
                    {offer.status}
                  </span>
                </td>

                <td>
                  <div className="flex gap-2">
                    <button>
                      <Pencil size={18} color={P.primary} />
                    </button>

                    <button
                      onClick={() =>
                        setOffers((prev) =>
                          prev.filter((o) => o.id !== offer.id),
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

      <AddOfferModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={(offer) => setOffers((prev) => [offer, ...prev])}
      />
    </div>
  );
}
