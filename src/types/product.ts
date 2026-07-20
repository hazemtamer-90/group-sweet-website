export interface Product {
  name: string;
  sku: string;
  rev: number;
  stock: number;
  img: string;
  sales: number;
  trend: number[];
  description?: string;
}
