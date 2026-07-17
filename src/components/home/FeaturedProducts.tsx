import { Button } from "@/components/ui/Button";

const products = [
  {
    name: "علبة حلاوة المولد الفاخرة",
    price: "350 جنيه",
    badge: "الأكثر مبيعًا",
  },
  {
    name: "بوكس هدايا المولد",
    price: "420 جنيه",
    badge: "جديد",
  },
  {
    name: "مكسرات مشكلة",
    price: "180 جنيه",
    badge: "عرض خاص",
  },
  {
    name: "ملبن فاخر",
    price: "95 جنيه",
    badge: "مفضل",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#670047]">
            أفضل المنتجات
          </h2>

          <p className="text-gray-500 mt-4">
            اكتشف أشهر منتجات جروب سويت.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl border bg-white shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-56 bg-[#F8F3EE] flex items-center justify-center">
                صورة المنتج
              </div>

              <div className="p-6">

                <span className="inline-block px-3 py-1 rounded-full bg-[#670047]/10 text-[#670047] text-sm mb-3">
                  {product.badge}
                </span>

                <h3 className="font-bold text-lg mb-2">
                  {product.name}
                </h3>

                <p className="text-[#670047] font-bold text-xl mb-5">
                  {product.price}
                </p>

                <Button className="w-full">
                  أضف إلى السلة
                </Button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}