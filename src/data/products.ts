export interface Product {
  id: number;
  slug: string;

  name: string;
  nameEn: string;

  description: string;
  descriptionEn: string;

  price: number;
  originalPrice?: number;

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

export const products: Product[] = [
  {
    id: 1,
    name: "ملبن بالمكسرات",
    slug: "malban-with-nuts",
    nameEn: "Malban with Nuts",
    description: "ملبن طازج بالجوز والفستق",
    descriptionEn: "Fresh malban with walnuts and pistachios",
    price: 85,
    originalPrice: 100,
    image: "/images/products/malban.png",
    badge: "الأكثر مبيعاً",
    badgeEn: "Best Seller",
    badgeColor: "#670047",
    rating: 4.9,
    reviews: 312,
    category: "ملبن ومكسرات",
    categoryEn: "Malban",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 2,
    name: "حمصية",
    slug: "homsya",
    nameEn: "Homsiya",
    description: "حمصية مقرمشة من أجود الحمص",
    descriptionEn: "Crunchy chickpea candy",
    price: 65,
    image: "/images/products/homsya.png",
    badge: "طازج",
    badgeEn: "Fresh",
    badgeColor: "#4A6741",
    rating: 4.8,
    reviews: 198,
    category: "مشبك وسمسمية",
    categoryEn: "Homsiya",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 3,
    name: "سمسمية",
    slug: "sesame-bar",
    nameEn: "Sesame Bar",
    description: "سمسمية مصرية أصيلة",
    descriptionEn: "Traditional Egyptian sesame bar",
    price: 60,
    originalPrice: 75,
    image: "/images/products/semsmya.png",
    badge: "عرض",
    badgeEn: "Offer",
    badgeColor: "#C9942A",
    rating: 4.9,
    reviews: 256,
    category: "مشبك وسمسمية",
    categoryEn: "Sesame",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 4,
    name: "حلاوة فول",
    slug: "peanut-candy",
    nameEn: "Peanut Candy",
    description: "فول وسمسم مصري أصيل",
    descriptionEn: "Traditional peanut candy",
    price: 55,
    image: "/images/products/foul.png",
    badge: "هدايا",
    badgeEn: "Gift",
    badgeColor: "#7A5C3A",
    rating: 4.7,
    reviews: 145,
    category: "مشبك وسمسمية",
    categoryEn: "Peanut",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 5,
    name: "علبة هدايا فاخرة",
    slug: "luxury-gift-box",
    nameEn: "Luxury Gift Box",
    description: "تشكيلة متنوعة من الحلويات",
    descriptionEn: "Luxury assorted sweets",
    price: 185,
    originalPrice: 220,
    image: "/images/products/halawa1.png",
    badge: "الأكثر مبيعاً",
    badgeEn: "Best Seller",
    badgeColor: "#670047",
    rating: 5,
    reviews: 267,
    category: "علب حلاوة المولد",
    categoryEn: "Gift Box",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 6,
    name: "بوكس حلويات",
    slug: "sweet-box",
    nameEn: "Sweet Box",
    description: "تشكيلة متنوعة",
    descriptionEn: "Mixed sweets",
    price: 150,
    image: "/images/products/halawa2.png",
    badge: "جديد",
    badgeEn: "New",
    badgeColor: "#4A6741",
    rating: 4.8,
    reviews: 101,
    category: "مشبك وسمسمية",
    categoryEn: "Gift Box",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 7,
    name: "تشكيلة المولد",
    slug: "mawlid-mix",
    nameEn: "Mawlid Mix",
    description: "أفضل منتجات الموسم",
    descriptionEn: "Season collection",
    price: 210,
    image: "/images/products/halawa3.png",
    badge: "جديد",
    badgeEn: "New",
    badgeColor: "#C9942A",
    rating: 4.9,
    reviews: 176,
    category: "مشبك وسمسمية",
    categoryEn: "Sweets",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["Medium - 500g", "Large - 1kg", "Extra Large - 2kg"],
  },

  {
    id: 8,
    name: "بوكس فاخر",
    slug: "premium-box",
    nameEn: "Premium Box",
    description: "علبة هدايا فاخرة",
    descriptionEn: "Premium gift box",
    price: 250,
    image: "/images/products/halawa4.png",
    badge: "فاخر",
    badgeEn: "Premium",
    badgeColor: "#7A5C3A",
    rating: 5,
    reviews: 214,
    category: "ملبن ومكسرات",
    categoryEn: "Gift",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },
  {
    id: 9,
    name: "حمصية أقراص المولد",
    slug: "mawlid-chickpea-rounds",
    nameEn: "Mawlid Chickpea Rounds",
    description: "أقراص حمصية مقرمشة بالعسل الطبيعي",
    descriptionEn: "Crunchy chickpea rounds with natural honey",
    price: 75,
    image: "/images/products/homsya.png",
    badge: "الأكثر مبيعاً",
    badgeEn: "Best Seller",
    badgeColor: "#670047",
    rating: 4.8,
    reviews: 241,
    category: "مشبك وسمسمية",
    categoryEn: "Homsiya",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 10,
    name: "فستقية المولد الفاخرة",
    slug: "luxury-pistachio",
    nameEn: "Luxury Pistachio",
    description: "فستق حلبي فاخر بالعسل",
    descriptionEn: "Premium pistachio sweet",
    price: 120,
    originalPrice: 145,
    image: "/images/products/malban.png",
    badge: "فاخر",
    badgeEn: "Premium",
    badgeColor: "#4A6741",
    rating: 4.9,
    reviews: 178,
    category: "ملبن ومكسرات",
    categoryEn: "Malban",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 11,
    name: "لوزية المولد",
    slug: "almond-sweet",
    nameEn: "Almond Sweet",
    description: "لوزية بالعسل والسمسم",
    descriptionEn: "Almond sweet with honey",
    price: 110,
    image: "/images/products/semsmya.png",
    badge: "للمناسبات",
    badgeEn: "For Events",
    badgeColor: "#C9942A",
    rating: 4.8,
    reviews: 134,
    category: "ملبن ومكسرات",
    categoryEn: "Sweets",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 12,
    name: "كاجو المولد",
    slug: "cashew-sweet",
    nameEn: "Cashew Sweet",
    description: "كاجو محمص بالعسل الطبيعي",
    descriptionEn: "Roasted cashew with honey",
    price: 115,
    originalPrice: 135,
    image: "/images/products/halawa3.png",
    badge: "جديد",
    badgeEn: "New",
    badgeColor: "#7A5C3A",
    rating: 4.7,
    reviews: 96,
    category: "ملبن ومكسرات",
    categoryEn: "Sweets",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },

  {
    id: 13,
    name: "بندقية المولد",
    slug: "hazelnut-sweet",
    nameEn: "Hazelnut Sweet",
    description: "بندق محمص بالعسل الطبيعي",
    descriptionEn: "Roasted hazelnut with honey",
    price: 105,
    image: "/images/products/halawa4.png",
    badge: "طازج",
    badgeEn: "Fresh",
    badgeColor: "#4A6741",
    rating: 4.8,
    reviews: 112,
    category: "ملبن ومكسرات",
    categoryEn: "Sweets",
    weight: ["وسط - 500جم", "كبير - 1كجم", "كبير جداً - 2كجم"],

    weightEn: ["500g", "1kg", "2kg"],
  },
];
