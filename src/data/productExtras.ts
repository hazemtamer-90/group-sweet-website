export interface ProductExtra {
  ingredients: {
    ar: string[];
    en: string[];
  };

  highlights: {
    ar: string[];
    en: string[];
  };

  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };

  storage: {
    ar: string[];
    en: string[];
  };

  faq: {
    ar: {
      question: string;
      answer: string;
    }[];

    en: {
      question: string;
      answer: string;
    }[];
  };

  reviews: {
    ar: {
      name: string;
      rating: number;
      comment: string;
    }[];

    en: {
      name: string;
      rating: number;
      comment: string;
    }[];
  };
}
const defaultExtras = {
  highlights: {
    ar: ["طازج يوميًا", "بدون مواد حافظة", "مناسب للهدايا", "خامات ممتازة"],
    en: [
      "Fresh Daily",
      "No Preservatives",
      "Perfect for Gifts",
      "Premium Ingredients",
    ],
  },

  ingredients: {
    ar: ["دقيق فاخر", "سكر", "سمن بلدي", "فانيليا طبيعية"],
    en: ["Premium Flour", "Sugar", "Pure Ghee", "Natural Vanilla"],
  },

  nutrition: {
    calories: 510,
    protein: 8,
    carbs: 55,
    fat: 24,
  },

  storage: {
    ar: [
      "يحفظ في مكان بارد وجاف.",
      "بعيدًا عن أشعة الشمس.",
      "يفضل استهلاكه خلال 30 يومًا.",
    ],
    en: [
      "Store in a cool dry place.",
      "Keep away from direct sunlight.",
      "Best consumed within 30 days.",
    ],
  },

  faq: {
    ar: [
      {
        question: "هل المنتج طازج؟",
        answer: "يتم تصنيعه يوميًا داخل المصنع.",
      },
      {
        question: "هل يوجد شحن للمحافظات؟",
        answer: "نعم، لجميع المحافظات.",
      },
    ],

    en: [
      {
        question: "Is it freshly made?",
        answer: "Yes, made fresh daily.",
      },
      {
        question: "Do you ship nationwide?",
        answer: "Yes, all over Egypt.",
      },
    ],
  },

  reviews: {
    ar: [
      {
        name: "محمد",
        rating: 5,
        comment: "جودة ممتازة جدًا.",
      },
      {
        name: "أحمد",
        rating: 5,
        comment: "أنصح به.",
      },
    ],

    en: [
      {
        name: "Mohamed",
        rating: 5,
        comment: "Excellent quality.",
      },
      {
        name: "Ahmed",
        rating: 5,
        comment: "Highly recommended.",
      },
    ],
  },
};

export const productExtras: Record<string, ProductExtra> = {
  basima: {
    ingredients: {
      ar: ["دقيق فاخر", "سمن بلدي", "سكر", "سمسم", "جوز هند", "فانيليا طبيعية"],

      en: [
        "Premium Flour",
        "Pure Ghee",
        "Sugar",
        "Sesame",
        "Coconut",
        "Natural Vanilla",
      ],
    },

    highlights: {
      ar: ["طازج يوميًا", "بدون مواد حافظة", "مناسب للهدايا", "خامات ممتازة"],

      en: [
        "Fresh Daily",
        "No Preservatives",
        "Perfect for Gifts",
        "Premium Ingredients",
      ],
    },

    nutrition: {
      calories: 510,
      protein: 8,
      carbs: 55,
      fat: 24,
    },

    storage: {
      ar: [
        "يحفظ في مكان بارد وجاف.",
        "بعيدًا عن أشعة الشمس.",
        "يفضل استهلاكه خلال 30 يومًا.",
      ],

      en: [
        "Store in a cool, dry place.",
        "Keep away from direct sunlight.",
        "Best consumed within 30 days.",
      ],
    },

    faq: {
      ar: [
        {
          question: "هل المنتج طازج؟",
          answer: "يتم تصنيع المنتج يوميًا داخل المصنع.",
        },
        {
          question: "هل يوجد شحن للمحافظات؟",
          answer: "نعم، لجميع المحافظات.",
        },
      ],

      en: [
        {
          question: "Is it freshly made?",
          answer: "Yes, prepared fresh every day.",
        },
        {
          question: "Do you ship nationwide?",
          answer: "Yes, we deliver all over Egypt.",
        },
      ],
    },

    reviews: {
      ar: [
        {
          name: "محمد",
          rating: 5,
          comment: "جودة ممتازة وطعم رائع.",
        },
        {
          name: "أحمد",
          rating: 5,
          comment: "أفضل بسيمة جربتها.",
        },
      ],

      en: [
        {
          name: "Mohamed",
          rating: 5,
          comment: "Amazing quality.",
        },
        {
          name: "Ahmed",
          rating: 5,
          comment: "Very fresh and delicious.",
        },
      ],
    },
  },

  coconut: defaultExtras,
  cream: defaultExtras,
  dry: defaultExtras,
  malban: defaultExtras,
  nougat: defaultExtras,
  round: defaultExtras,
};
