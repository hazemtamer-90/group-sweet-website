import {
  ShoppingBag,
  AlertTriangle,
  Star,
  CheckCircle,
  Truck,
} from "lucide-react";

import P from "./palette";

export const revenueWeek = [
  { day: "الإثنين", rev: 18500, orders: 62 },
  { day: "الثلاثاء", rev: 22300, orders: 74 },
  { day: "الأربعاء", rev: 19800, orders: 66 },
  { day: "الخميس", rev: 28400, orders: 95 },
  { day: "الجمعة", rev: 31200, orders: 104 },
  { day: "السبت", rev: 26700, orders: 89 },
  { day: "الأحد", rev: 24500, orders: 82 },
];

export const revenueMonth = [
  { day: "1", rev: 54000, orders: 180 },
  { day: "5", rev: 67000, orders: 223 },
  { day: "10", rev: 49000, orders: 163 },
  { day: "15", rev: 72000, orders: 240 },
  { day: "20", rev: 88000, orders: 293 },
  { day: "25", rev: 61000, orders: 203 },
  { day: "30", rev: 95000, orders: 317 },
];

export const revenueYear = [
  { day: "يناير", rev: 320000, orders: 1067 },
  { day: "فبراير", rev: 290000, orders: 967 },
  { day: "مارس", rev: 410000, orders: 1367 },
  { day: "أبريل", rev: 380000, orders: 1267 },
  { day: "مايو", rev: 520000, orders: 1733 },
  { day: "يونيو", rev: 460000, orders: 1533 },
  { day: "يوليو", rev: 390000, orders: 1300 },
  { day: "أغسطس", rev: 430000, orders: 1433 },
  { day: "سبتمبر", rev: 510000, orders: 1700 },
  { day: "أكتوبر", rev: 640000, orders: 2133 },
  { day: "نوفمبر", rev: 720000, orders: 2400 },
  { day: "ديسمبر", rev: 890000, orders: 2967 },
];

export const orderStatus = [
  { name: "تم التسليم", value: 1240, color: P.success },
  { name: "قيد التحضير", value: 340, color: P.primary },
  { name: "مؤكد", value: 210, color: P.info },
  { name: "في الشحن", value: 180, color: P.gold },
  { name: "معلق", value: 95, color: P.warning },
  { name: "ملغي", value: 62, color: P.danger },
];
export const bestProducts = [
  {
    img: "🍯",
    name: "سمسمية ذهبية",
    sku: "SES-001",
    sales: 847,
    rev: 50820,
    stock: 234,
    trend: [12, 18, 14, 22, 20, 28, 25],
  },
  {
    img: "🌾",
    name: "حمصية أصيلة",
    sku: "HOM-002",
    sales: 623,
    rev: 40495,
    stock: 187,
    trend: [8, 12, 10, 15, 18, 14, 20],
  },
  {
    img: "🌀",
    name: "ملبن حبل بالجوز",
    sku: "MAL-003",
    sales: 512,
    rev: 43520,
    stock: 98,
    trend: [6, 9, 11, 8, 13, 16, 14],
  },
  {
    img: "🫘",
    name: "حلاوة فول المولد",
    sku: "FUL-004",
    sales: 489,
    rev: 26895,
    stock: 312,
    trend: [5, 7, 9, 12, 10, 14, 16],
  },
  {
    img: "🎁",
    name: "بوكس هدية فاخر",
    sku: "GFT-005",
    sales: 267,
    rev: 49395,
    stock: 44,
    trend: [3, 5, 8, 6, 9, 11, 10],
  },
];

export const latestOrders = [
  {
    id: "#ORD-8821",
    customer: "أحمد محمد",
    date: "اليوم، 2:14م",
    payment: "مدفوع",
    status: "تسليم",
    total: 285,
  },
  {
    id: "#ORD-8820",
    customer: "فاطمة علي",
    date: "اليوم، 1:30م",
    payment: "مدفوع",
    status: "شحن",
    total: 520,
  },
  {
    id: "#ORD-8819",
    customer: "محمود حسن",
    date: "اليوم، 12:05م",
    payment: "معلق",
    status: "تحضير",
    total: 185,
  },
  {
    id: "#ORD-8818",
    customer: "سارة خالد",
    date: "أمس، 6:40م",
    payment: "مدفوع",
    status: "مؤكد",
    total: 740,
  },
  {
    id: "#ORD-8817",
    customer: "عمر إبراهيم",
    date: "أمس، 4:15م",
    payment: "ملغي",
    status: "ملغي",
    total: 320,
  },
  {
    id: "#ORD-8816",
    customer: "نورا سامي",
    date: "أمس، 2:00م",
    payment: "مدفوع",
    status: "تسليم",
    total: 165,
  },
];

export const topCustomers = [
  {
    name: "مجموعة النور للمقاولات",
    total: 18400,
    orders: 12,
    last: "منذ يومين",
    avatar: "م",
  },
  {
    name: "فاطمة عبد الرحمن",
    total: 7850,
    orders: 28,
    last: "اليوم",
    avatar: "ف",
  },
  {
    name: "شركة الأمل",
    total: 6200,
    orders: 9,
    last: "منذ أسبوع",
    avatar: "أ",
  },
  {
    name: "أحمد محمد الحسيني",
    total: 4990,
    orders: 19,
    last: "أمس",
    avatar: "أ",
  },
  {
    name: "مدرسة الزهور الدولية",
    total: 3740,
    orders: 6,
    last: "منذ ٣ أيام",
    avatar: "م",
  },
];

export const corporateClients = [
  {
    company: "مجموعة النور",
    rep: "خالد أحمد",
    lastOrder: "منذ يومين",
    limit: 50000,
    balance: 12400,
  },
  {
    company: "شركة الأمل",
    rep: "منى السيد",
    lastOrder: "منذ أسبوع",
    limit: 30000,
    balance: 6200,
  },
  {
    company: "مدرسة الزهور",
    rep: "سامر حسن",
    lastOrder: "منذ ٣ أيام",
    limit: 20000,
    balance: 3740,
  },
  {
    company: "فندق السلام",
    rep: "دينا محمود",
    lastOrder: "اليوم",
    limit: 80000,
    balance: 31500,
  },
];

export const notifications = [
  {
    icon: ShoppingBag,
    color: P.primary,
    bg: P.primaryLt,
    title: "طلب جديد #ORD-8821",
    time: "منذ دقيقتين",
  },
  {
    icon: AlertTriangle,
    color: P.warning,
    bg: P.warningLt,
    title: "مخزون منخفض: بوكس هدية",
    time: "منذ ١٥ دقيقة",
  },
  {
    icon: Star,
    color: P.gold,
    bg: P.goldLt,
    title: "تقييم جديد ★★★★★",
    time: "منذ ٣٠ دقيقة",
  },
  {
    icon: CheckCircle,
    color: P.success,
    bg: P.successLt,
    title: "دفعة مستلمة ٢,٨٥٠ جنيه",
    time: "منذ ساعة",
  },
  {
    icon: Truck,
    color: P.info,
    bg: P.infoLt,
    title: "تم شحن الطلب #ORD-8815",
    time: "منذ ساعتين",
  },
];
export const categories = [
  {
    id: 1,
    name: "حلويات المولد",
    image: "🍬",
    products: 18,
  },
  {
    id: 2,
    name: "علب الهدايا",
    image: "🎁",
    products: 12,
  },
  {
    id: 3,
    name: "المكسرات",
    image: "🥜",
    products: 9,
  },
  {
    id: 4,
    name: "العروض",
    image: "🔥",
    products: 6,
  },
];
export const inventory = [
  {
    sku: "SES-001",
    name: "سمسمية ذهبية",
    stock: 234,
    min: 100,
  },
  {
    sku: "HOM-002",
    name: "حمصية أصيلة",
    stock: 52,
    min: 100,
  },
  {
    sku: "MAL-003",
    name: "ملبن بالجوز",
    stock: 16,
    min: 50,
  },
  {
    sku: "GFT-005",
    name: "بوكس هدايا",
    stock: 0,
    min: 20,
  },
];
export const customers = [
  {
    id: 1,
    name: "محمد أحمد",
    phone: "01012345678",
    city: "القاهرة",
    orders: 12,
    totalSpent: 18500,
  },
  {
    id: 2,
    name: "أحمد علي",
    phone: "01123456789",
    city: "الجيزة",
    orders: 8,
    totalSpent: 12400,
  },
  {
    id: 3,
    name: "محمود السيد",
    phone: "01234567890",
    city: "الإسكندرية",
    orders: 5,
    totalSpent: 8700,
  },
  {
    id: 4,
    name: "سارة محمد",
    phone: "01598765432",
    city: "طنطا",
    orders: 16,
    totalSpent: 24600,
  },
];
export const b2bOrders = [
  {
    id: "B2B-001",
    company: "شركة النور",
    contact: "محمد أحمد",
    phone: "01012345678",
    quantity: 500,
    status: "جديد",
  },
  {
    id: "B2B-002",
    company: "شركة الهدى",
    contact: "أحمد علي",
    phone: "01198765432",
    quantity: 1200,
    status: "قيد التنفيذ",
  },
  {
    id: "B2B-003",
    company: "شركة الصفوة",
    contact: "خالد حسن",
    phone: "01234567890",
    quantity: 300,
    status: "تم التسليم",
  },
];
export const analyticsCards = [
  {
    title: "إجمالي المبيعات",
    value: "1,245,900 ج",
    growth: "+18%",
  },
  {
    title: "عدد الطلبات",
    value: "2,846",
    growth: "+12%",
  },
  {
    title: "العملاء الجدد",
    value: "418",
    growth: "+9%",
  },
  {
    title: "متوسط قيمة الطلب",
    value: "438 ج",
    growth: "+4%",
  },
];
export const monthlySales = [
  { month: "يناير", sales: 210 },
  { month: "فبراير", sales: 250 },
  { month: "مارس", sales: 320 },
  { month: "أبريل", sales: 410 },
  { month: "مايو", sales: 390 },
  { month: "يونيو", sales: 520 },
];
export const categorySales = [
  {
    name: "سمسمية",
    value: 38,
  },
  {
    name: "حمصية",
    value: 26,
  },
  {
    name: "ملبن",
    value: 19,
  },
  {
    name: "بوكسات",
    value: 17,
  },
];
