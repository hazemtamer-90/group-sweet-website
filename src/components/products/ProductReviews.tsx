"use client";

import { Star } from "lucide-react";

import { useLocale } from "next-intl";

interface Props {
  reviews: {
    ar: {
      name: string;

      rating: number;

      comment: string;
    }[];

    en: {
      name: string;

      rating: number;

      comment: string;
    }[];
  };
}

export default function ProductReviews({ reviews }: Props) {
  const locale = useLocale();

  const data = locale === "en" ? reviews.en : reviews.ar;

  const average = (
    data.reduce(
      (sum, review) => sum + review.rating,

      0,
    ) / data.length
  ).toFixed(1);

  return (
    <section className="mt-20">
      <div className="mb-10 rounded-3xl border border-[#E8D7B6] bg-[#FFFDF8] p-8">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-[#670047]">{average}</h2>

            <div className="mt-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className="fill-[#C9942A] text-[#C9942A]"
                />
              ))}
            </div>

            <p className="mt-4 text-[#7A5C3A]">
              {data.length}{" "}
              {locale === "en" ? "Customer Reviews" : "تقييمات العملاء"}
            </p>
          </div>

          <div className="space-y-4">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = data.filter((r) => r.rating === star).length;

              const percentage =
                data.length === 0 ? 0 : (count / data.length) * 100;

              return (
                <div key={star} className="flex items-center gap-4">
                  <span className="w-8 font-semibold">{star}★</span>

                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#ECE5D6]">
                    <div
                      className="h-full rounded-full bg-[#670047]"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  <span className="w-10 text-sm text-[#7A5C3A]">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {data.map((review, index) => (
          <div
            key={index}
            className="rounded-3xl border border-[#E8D7B6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#670047] text-xl font-bold text-white">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-[#2C1A0E]">{review.name}</h3>

                  <div className="mt-2 flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#C9942A] text-[#C9942A]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 leading-8 text-[#7A5C3A]">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
