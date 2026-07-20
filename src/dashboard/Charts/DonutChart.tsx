"use client";

interface OrderStatus {
  name: string;
  value: number;
  color: string;
}

interface Props {
  data: OrderStatus[];
}

export default function DonutChart({ data }: Props) {
  const cx = 90;
  const cy = 90;

  const R = 72;
  const r = 50;

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const arcs = data.map((item, index) => {
    const percent = item.value / total;

    const start =
      -Math.PI / 2 +
      data
        .slice(0, index)
        .reduce((sum, current) => sum + current.value / total, 0) *
        Math.PI *
        2;

    const end = start + percent * Math.PI * 2;

    const largeArc = percent > 0.5 ? 1 : 0;

    const round = (n: number) => Number(n.toFixed(3));

    const x1 = round(cx + R * Math.cos(start));
    const y1 = round(cy + R * Math.sin(start));

    const x2 = round(cx + R * Math.cos(end));
    const y2 = round(cy + R * Math.sin(end));

    const ix1 = round(cx + r * Math.cos(start));
    const iy1 = round(cy + r * Math.sin(start));

    const ix2 = round(cx + r * Math.cos(end));
    const iy2 = round(cy + r * Math.sin(end));

    return {
      ...item,
      path: `
        M${x1},${y1}
        A${R},${R} 0 ${largeArc} 1 ${x2},${y2}
        L${ix2},${iy2}
        A${r},${r} 0 ${largeArc} 0 ${ix1},${iy1}
        Z
      `,
    };
  });

  return (
    <svg
      viewBox="0 0 180 180"
      style={{
        width: "100%",
        height: 180,
      }}
    >
      {arcs.map((arc) => (
        <path
          key={arc.name}
          d={arc.path}
          fill={arc.color}
          stroke="white"
          strokeWidth={2}
        />
      ))}

      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#111827"
      >
        {total.toLocaleString()}
      </text>

      <text x={cx} y={cy + 12} textAnchor="middle" fontSize="10" fill="#6B7280">
        إجمالي
      </text>
    </svg>
  );
}
