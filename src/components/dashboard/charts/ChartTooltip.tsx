"use client";

interface TooltipItem {
  color?: string;
  name?: string;
  value?: string | number;
}

interface ChartTooltipProps {
  active?: boolean;
  label?: string;
  payload?: TooltipItem[];
}

export default function ChartTooltip({
  active,
  label,
  payload,
}: ChartTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
      {label && (
        <p className="mb-2 text-sm font-semibold text-gray-500">{label}</p>
      )}

      <div className="space-y-2">
        {payload.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-6">
            <span className="font-medium" style={{ color: item.color }}>
              {item.name}
            </span>

            <span className="font-bold text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
