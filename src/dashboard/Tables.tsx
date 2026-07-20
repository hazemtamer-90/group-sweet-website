"use client";

import Card from "./Cards";
import SectionHeader from "./SectionHeader";
import StatusBadge from "./StatusBadge";

import {
  Eye,
  Edit2,
  MoreHorizontal,
  Filter,
  Plus,
  ChevronLeft,
} from "lucide-react";

import {
  bestProducts,
  latestOrders,
  corporateClients,
} from "@/lib/dashboard/data";

import { MiniSparkline } from "@/lib/dashboard/helpers";
import P from "@/lib/dashboard/palette";

interface Props {
  dark: boolean;
}

export default function Tables({ dark }: Props) {
  const text = dark ? P.darkText : P.text;
  const muted = dark ? P.darkMuted : P.muted;
  const border = dark ? P.darkBorder : P.border;

  return (
    <>
      <Card dark={dark}>
        <SectionHeader
          dark={dark}
          title="أكثر المنتجات مبيعاً"
          action={
            <button
              className="text-sm font-medium flex items-center gap-1"
              style={{ color: P.primary }}
            >
              عرض الكل
              <ChevronLeft size={14} />
            </button>
          }
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[650px]">
            <thead>
              <tr
                style={{
                  borderBottom: `1px solid ${border}`,
                }}
              >
                <th className="text-right py-3 px-3">المنتج</th>
                <th className="text-right py-3 px-3">SKU</th>
                <th className="text-right py-3 px-3">المبيعات</th>
                <th className="text-right py-3 px-3">الإيراد</th>
                <th className="text-right py-3 px-3">المخزون</th>
                <th className="text-right py-3 px-3">الاتجاه</th>
              </tr>
            </thead>

            <tbody>
              {bestProducts.map((product, index) => (
                <tr
                  key={index}
                  className="transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = dark ? "#2D3148" : P.bg)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: P.primaryLt }}
                      >
                        {product.img}
                      </div>

                      <span className="font-medium" style={{ color: text }}>
                        {product.name}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-3">
                    <code
                      className="px-2 py-1 rounded-md text-xs"
                      style={{
                        background: dark ? "#2D3148" : P.bg,
                        color: muted,
                      }}
                    >
                      {product.sku}
                    </code>
                  </td>

                  <td
                    className="py-3 px-3 font-semibold"
                    style={{ color: text }}
                  >
                    {product.sales.toLocaleString()}
                  </td>

                  <td
                    className="py-3 px-3 font-semibold"
                    style={{ color: P.success }}
                  >
                    {product.rev.toLocaleString()} ج
                  </td>

                  <td className="py-3 px-3">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-semibold"
                      style={{
                        color:
                          product.stock < 50
                            ? P.danger
                            : product.stock < 100
                              ? P.warning
                              : P.success,

                        background:
                          product.stock < 50
                            ? P.dangerLt
                            : product.stock < 100
                              ? P.warningLt
                              : P.successLt,
                      }}
                    >
                      {product.stock} وحدة
                    </span>
                  </td>

                  <td className="py-3 px-3">
                    <MiniSparkline data={product.trend} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card dark={dark}>
        <SectionHeader
          dark={dark}
          title="أحدث الطلبات"
          action={
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-lg"
                style={{
                  background: dark ? "#2D3148" : P.bg,
                  color: muted,
                }}
              >
                <Filter size={14} />
              </button>

              <button
                className="flex items-center gap-1 text-sm font-medium"
                style={{ color: P.primary }}
              >
                عرض الكل
                <ChevronLeft size={14} />
              </button>
            </div>
          }
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr
                style={{
                  borderBottom: `1px solid ${border}`,
                }}
              >
                <th className="text-right py-3 px-3">رقم الطلب</th>
                <th className="text-right py-3 px-3">العميل</th>
                <th className="text-right py-3 px-3">التاريخ</th>
                <th className="text-right py-3 px-3">الدفع</th>
                <th className="text-right py-3 px-3">الحالة</th>
                <th className="text-right py-3 px-3">الإجمالي</th>
                <th className="text-right py-3 px-3"></th>
              </tr>
            </thead>

            <tbody>
              {latestOrders.map((order, index) => (
                <tr
                  key={index}
                  className="transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = dark ? "#2D3148" : P.bg)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <td
                    className="py-3 px-3 font-mono text-xs font-semibold"
                    style={{ color: P.primary }}
                  >
                    {order.id}
                  </td>

                  <td className="py-3 px-3 font-medium" style={{ color: text }}>
                    {order.customer}
                  </td>

                  <td className="py-3 px-3 text-xs" style={{ color: muted }}>
                    {order.date}
                  </td>

                  <td className="py-3 px-3">
                    <StatusBadge status={order.payment} />
                  </td>

                  <td className="py-3 px-3">
                    <StatusBadge status={order.status} />
                  </td>

                  <td className="py-3 px-3 font-bold" style={{ color: text }}>
                    {order.total} ج
                  </td>

                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 rounded-lg"
                        style={{ color: P.primary }}
                      >
                        <Eye size={15} />
                      </button>

                      <button
                        className="p-2 rounded-lg"
                        style={{ color: muted }}
                      >
                        <Edit2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card dark={dark}>
        <SectionHeader
          dark={dark}
          title="عملاء الشركات (B2B)"
          action={
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-white text-sm"
              style={{ background: P.primary }}
            >
              <Plus size={15} />
              إضافة عميل
            </button>
          }
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr
                style={{
                  borderBottom: `1px solid ${border}`,
                }}
              >
                <th className="text-right py-3 px-3">اسم الشركة</th>

                <th className="text-right py-3 px-3">مندوب المبيعات</th>

                <th className="text-right py-3 px-3">آخر طلب</th>

                <th className="text-right py-3 px-3">الحد الائتماني</th>

                <th className="text-right py-3 px-3">الرصيد المستحق</th>

                <th className="text-right py-3 px-3"></th>
              </tr>
            </thead>

            <tbody>
              {corporateClients.map((company, index) => (
                <tr
                  key={index}
                  className="transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = dark ? "#2D3148" : P.bg)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        style={{
                          background: [
                            P.primary,
                            P.success,
                            P.warning,
                            "#DB2777",
                          ][index % 4],
                        }}
                      >
                        {company.company[0]}
                      </div>

                      <span className="font-medium" style={{ color: text }}>
                        {company.company}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-3" style={{ color: muted }}>
                    {company.rep}
                  </td>

                  <td className="py-3 px-3" style={{ color: muted }}>
                    {company.lastOrder}
                  </td>

                  <td
                    className="py-3 px-3 font-semibold"
                    style={{ color: text }}
                  >
                    {company.limit.toLocaleString()} ج
                  </td>

                  <td
                    className="py-3 px-3 font-bold"
                    style={{
                      color:
                        company.balance > company.limit * 0.7
                          ? P.danger
                          : P.warning,
                    }}
                  >
                    {company.balance.toLocaleString()} ج
                  </td>

                  <td className="py-3 px-3">
                    <button className="p-2 rounded-lg" style={{ color: muted }}>
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
