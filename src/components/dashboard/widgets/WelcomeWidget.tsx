"use client";

import { ArrowLeft, Building2, ShoppingCart, TrendingUp } from "lucide-react";

import GradientCard from "../cards/GradientCard";
import Button from "../design-system/Button";

export default function WelcomeWidget() {
  return (
    <GradientCard className="relative overflow-hidden rounded-3xl min-h-[340px] xl:min-h-[360px]">
      <div className="absolute -top-16 -left-16 h-52 w-52 rounded-full bg-[#ffb6ec]/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#ffb6ec]/10 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between text-right">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            👋 أهلاً بعودتك
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white">
            لوحة تحكم مصنع
            <span className="mt-2 block text-5xl">جروب سويت</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/90">
            تابع المبيعات والطلبات والمخزون وطلبات الشركات من لوحة تحكم موحدة،
            مع تحديثات لحظية وإحصاءات تساعدك على متابعة أداء المصنع واتخاذ
            القرارات بسرعة.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            className="
              rounded-3xl
              border
              border-white/15
              bg-white/10
              p-5
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/15
            "
          >
            <div className="mb-4 flex flex-row-reverse items-center justify-between">
              <TrendingUp size={22} />

              <span className="text-sm text-white/80">المبيعات</span>
            </div>

            <h3 className="text-3xl font-bold text-white">٢٤٥٬٠٠٠</h3>

            <p className="mt-2 text-sm text-white/70">جنيه هذا الشهر</p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/15
              bg-white/10
              p-5
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/15
            "
          >
            <div className="mb-4 flex flex-row-reverse items-center justify-between">
              <ShoppingCart size={22} />

              <span className="text-sm text-white/80">طلبات اليوم</span>
            </div>

            <h3 className="text-3xl font-bold text-white">١٢٨</h3>

            <p className="mt-2 text-sm text-white/70">طلب جديد</p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/15
              bg-white/10
              p-5
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/15
            "
          >
            <div className="mb-4 flex flex-row-reverse items-center justify-between">
              <Building2 size={22} />

              <span className="text-sm text-white/80">طلبات الشركات</span>
            </div>

            <h3 className="text-3xl font-bold text-white">١٨</h3>

            <p className="mt-2 text-sm text-white/70">طلب قيد التنفيذ</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            variant="secondary"
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-white
              px-6
              py-3
              font-semibold
              text-[#670047]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-gray-100
            "
          >
            <ArrowLeft size={18} />
            عرض لوحة التقارير
          </Button>
        </div>
      </div>
    </GradientCard>
  );
}
