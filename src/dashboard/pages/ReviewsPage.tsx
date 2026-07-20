"use client";

import { useState } from "react";
import { Search, Plus, Pencil, Trash2, Star } from "lucide-react";

import P from "@/lib/dashboard/palette";
import AddReviewModal, { Review } from "@/dashboard/AddReviewModal";

const initialReviews: Review[] = [
  {
    id: "1",
    customer: "أحمد محمد",
    product: "علبة المولد الفاخرة",
    rating: 5,
    comment: "منتج ممتاز جداً",
  },
  {
    id: "2",
    customer: "محمد علي",
    product: "ملبن بندق",
    rating: 4,
    comment: "جودة ممتازة",
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: P.text }}>
            التقييمات
          </h1>

          <p className="mt-1 text-sm" style={{ color: P.muted }}>
            إدارة تقييمات العملاء
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white"
          style={{ background: P.primary }}
        >
          <Plus size={18} />
          إضافة تقييم
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
            placeholder="ابحث عن تقييم..."
            className="w-full border rounded-xl py-3 pr-11 pl-4 outline-none"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-right py-4">العميل</th>

              <th className="text-right">المنتج</th>

              <th className="text-right">التقييم</th>

              <th className="text-right">التعليق</th>

              <th className="text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="border-b last:border-0">
                <td className="py-5 font-semibold">{review.customer}</td>

                <td>{review.product}</td>

                <td>
                  <div className="flex gap-1">
                    {Array.from({
                      length: review.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        fill="#F59E0B"
                        color="#F59E0B"
                      />
                    ))}
                  </div>
                </td>

                <td>{review.comment}</td>

                <td>
                  <div className="flex gap-2">
                    <button>
                      <Pencil size={18} color={P.primary} />
                    </button>

                    <button
                      onClick={() =>
                        setReviews((prev) =>
                          prev.filter((r) => r.id !== review.id),
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

      <AddReviewModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={(review) => setReviews((prev) => [review, ...prev])}
      />
    </div>
  );
}
