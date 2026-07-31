"use client";

import clsx from "clsx";
import { ProductStatus as Status } from "./types";

interface Props {
  status: Status;
}

export default function ProductStatus({
  status,
}: Props) {
  return (
    <span
      className={clsx(
        "rounded-full px-3 py-1 text-xs font-semibold",
        status === "available" &&
          "bg-green-100 text-green-700",

        status === "low" &&
          "bg-orange-100 text-orange-700",

        status === "out" &&
          "bg-red-100 text-red-700",
      )}
    >
      {status === "available" && "متوفر"}

      {status === "low" && "منخفض"}

      {status === "out" && "غير متوفر"}
    </span>
  );
}