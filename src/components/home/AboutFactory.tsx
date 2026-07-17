import { Button } from "@/components/ui/Button";

export default function AboutFactory() {
  return (
    <section className="py-24 bg-[#FBF8F2]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <div className="rounded-[40px] bg-[#F3EDE4] h-[420px] flex items-center justify-center">
            صورة المصنع
          </div>
        </div>

        <div>

          <span className="text-[#670047] font-semibold">
            عن المصنع
          </span>

          <h2 className="text-5xl font-bold mt-4">
            خبرة أكثر من 25 عامًا
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            نمتلك خطوط إنتاج حديثة ونستخدم أفضل الخامات الطبيعية
            لنقدم منتجات بجودة عالية تناسب الأفراد والشركات.
          </p>

          <Button className="mt-8">
            اعرف المزيد
          </Button>

        </div>

      </div>
    </section>
  );
}