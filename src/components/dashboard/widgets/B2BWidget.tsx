"use client";

import { Building2, ArrowUpRight, FileText, Briefcase } from "lucide-react";

import GradientCard from "../cards/GradientCard";
import Button from "../design-system/Button";

export default function B2BWidget() {
  return (
    <GradientCard>
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/70">طلبات الشركات</p>

              <h2 className="mt-2 text-3xl font-bold text-white">B2B Portal</h2>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Building2 size={28} />
            </div>
          </div>

          <p className="mt-5 leading-7 text-white/80">
            إدارة طلبات الشركات، عروض الأسعار، والعقود الموسمية من مكان واحد.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur">
              <Briefcase size={18} className="mx-auto mb-2" />
              <p className="text-lg font-bold">48</p>
              <span className="text-xs text-white/70">عميل</span>
            </div>

            <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur">
              <FileText size={18} className="mx-auto mb-2" />
              <p className="text-lg font-bold">16</p>
              <span className="text-xs text-white/70">عقد</span>
            </div>

            <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur">
              <ArrowUpRight size={18} className="mx-auto mb-2" />
              <p className="text-lg font-bold">92%</p>
              <span className="text-xs text-white/70">نجاح</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button
            variant="secondary"
            className="w-full bg-white text-[#670047] hover:bg-gray-100"
          >
            عرض الطلبات
          </Button>
        </div>
      </div>
    </GradientCard>
  );
}
