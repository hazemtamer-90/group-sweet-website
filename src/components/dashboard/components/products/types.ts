export type ProductStatus = "available" | "low" | "out";

export interface Product {
  id: number;
  sku: string;
  name: string;
  category: string;
  image: string;
  price: number;
  stock: number;
  sales: number;
  status: ProductStatus;
}