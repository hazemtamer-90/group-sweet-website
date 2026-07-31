"use client";

import clsx from "clsx";
import Progress from "../design-system/Progress";

interface MetricCardProps {
  title: string;
  value: string;
  progress: number;
  className?: string;
}

export default function MetricCard({
  title,
  value,
  progress,
  className,
}: MetricCardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-gray-200 bg-white p-6 shadow-sm",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">
          {title}
        </h3>

        <span className="text-lg font-bold text-gray-900">
          {value}
        </span>
      </div>

      <Progress
        value={progress}
        className="mt-5"
      />

      <p className="mt-3 text-sm text-gray-400">
        {progress}% completed
      </p>
    </div>
  );
}