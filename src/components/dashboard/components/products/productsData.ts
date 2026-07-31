import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    sku: "GS-001",
    name: "علبة مولد فاخرة",
    category: "حلويات المولد",
    image: "/images/products/product-1.png",
    price: 420,
    stock: 125,
    sales: 520,
    status: "available",
  },
  {
    id: 2,
    sku: "GS-002",
    name: "بوكس مكسرات",
    category: "المكسرات",
    image: "/images/products/product-2.png",
    price: 315,
    stock: 38,
    sales: 340,
    status: "low",
  },
  {
    id: 3,
    sku: "GS-003",
    name: "ملبن بريميوم",
    category: "الملبن",
    image: "/images/products/product-3.png",
    price: 255,
    stock: 0,
    sales: 190,
    status: "out",
  },
];