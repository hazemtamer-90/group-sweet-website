"use client";

import { useState } from "react";
import { Search, Plus, Pencil, Trash2, UserRound } from "lucide-react";
import P from "@/lib/dashboard/palette";
import AddSalesMemberModal, {
  SalesMember,
} from "../AddSalesMemberModal";

const initialMembers: SalesMember[] = [
  {
    id: "1",
    name: "أحمد محمد",
    phone: "01012345678",
    area: "القاهرة",
    sales: 145000,
  },
  {
    id: "2",
    name: "محمد علي",
    phone: "01198765432",
    area: "الجيزة",
    sales: 112500,
  },
  {
    id: "3",
    name: "محمود حسن",
    phone: "01211111111",
    area: "الإسكندرية",
    sales: 98500,
  },
];

export default function SalesTeamPage() {
  const [open, setOpen] = useState(false);
  const [members, setMembers] =
    useState<SalesMember[]>(initialMembers);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-3xl font-bold"
            style={{ color: P.text }}
          >
            فريق المبيعات
          </h1>

          <p
            className="text-sm mt-1"
            style={{ color: P.muted }}
          >
            إدارة أعضاء فريق المبيعات
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
          style={{ background: P.primary }}
        >
          <Plus size={18} />
          إضافة عضو
        </button>
      </div>

      <div
        className="rounded-2xl p-5"
        style={{ background: P.surface }}
      >
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
              <th className="text-right py-4">الاسم</th>
              <th className="text-right">الهاتف</th>
              <th className="text-right">المنطقة</th>
              <th className="text-right">إجمالي المبيعات</th>
              <th className="text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr
                key={member.id}
                className="border-b last:border-0"
              >
                <td className="py-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: P.primaryLt,
                      }}
                    >
                      <UserRound color={P.primary} />
                    </div>

                    <span>{member.name}</span>
                  </div>
                </td>

                <td>{member.phone}</td>

                <td>{member.area}</td>

                <td>{member.sales.toLocaleString()} ج</td>

                <td>
                  <div className="flex gap-2">
                    <button
                      className="w-9 h-9 flex items-center justify-center rounded-lg"
                      style={{
                        background: P.primaryLt,
                      }}
                    >
                      <Pencil
                        size={18}
                        color={P.primary}
                      />
                    </button>

                    <button
                      onClick={() =>
                        setMembers((prev) =>
                          prev.filter(
                            (m) => m.id !== member.id
                          )
                        )
                      }
                      className="w-9 h-9 flex items-center justify-center rounded-lg"
                      style={{
                        background: "#FEE2E2",
                      }}
                    >
                      <Trash2
                        size={18}
                        color="#DC2626"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddSalesMemberModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={(member) => {
          setMembers((prev) => [member, ...prev]);
        }}
      />
    </div>
  );
}