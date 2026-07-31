"use client";

interface LegendItem {
  label: string;
  color: string;
}

interface ChartLegendProps {
  items: LegendItem[];
}

export default function ChartLegend({ items }: ChartLegendProps) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full"
            style={{
              background: item.color,
            }}
          />

          <span className="text-sm font-medium text-gray-600">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
