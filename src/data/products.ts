export interface Product {
  id: number;
  slug: string;

  name: string;
  nameEn: string;

  description: string;
  descriptionEn: string;

  price: number;
  originalPrice?: number;

  quarterPrice: number;
  halfPrice: number;

  image: string;

  badge: string;
  badgeEn: string;
  badgeColor: string;

  rating: number;
  reviews: number;

  category: string;
  categoryEn: string;

  weight: string[];
  weightEn: string[];

}
import { coconutProducts } from "./products/coconut";
import { malbanProducts } from "./products/malban";
import { nougatProducts } from "./products/nougat";
import { dryProducts } from "./products/dry";
import { roundProducts } from "./products/round";
import { boxesProducts } from "./products/boxes";
import { creamProducts } from "./products/cream";

export const products: Product[] = [
  ...coconutProducts,
  ...malbanProducts,
  ...nougatProducts,
  ...dryProducts,
  ...roundProducts,
  ...boxesProducts,
  ...creamProducts,
];
