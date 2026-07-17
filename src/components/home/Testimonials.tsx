export default function Testimonials() {
  const reviews = [
    {
      name: "شركة النيل للتجارة",
      text: "جودة ممتازة والتغليف احترافي جدًا، والتسليم كان في الموعد.",
    },
    {
      name: "أحمد محمد",
      text: "أفضل حلاوة مولد اشتريتها، والطعم ممتاز.",
    },
    {
      name: "فندق رويال",
      text: "تعامل راقٍ وأسعار مناسبة للكميات الكبيرة.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold text-[#670047] mb-14">
          آراء عملائنا
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-[#E9C46A] text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="leading-8 text-gray-600">
                {review.text}
              </p>

              <h4 className="font-bold mt-8 text-[#670047]">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}