import { Button } from "@/components/ui/Button";

export default function CorporateOrders() {
  return (
    <section className="py-24 bg-[#670047]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-[#E9C46A] font-semibold">
              طلبات الشركات
            </span>

            <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
              هدايا شركات
              <br />
              بتصميم فاخر وجودة عالية
            </h2>

            <p className="text-white/80 mt-6 leading-8 text-lg">
              نوفر حلول متكاملة للشركات والمؤسسات تشمل علب هدايا
              مخصصة، تغليف فاخر، وطباعة الهوية التجارية على العبوات،
              مع إمكانية تنفيذ كميات كبيرة في وقت قياسي.
            </p>

            <div className="flex gap-5 mt-10">
              <Button size="lg">
                اطلب عرض سعر
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#670047]"
              >
                تواصل معنا
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[450px] h-[380px] rounded-[40px] bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl">
              صورة علب الهدايا
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}