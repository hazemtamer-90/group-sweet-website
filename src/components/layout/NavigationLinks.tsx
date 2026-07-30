export type NavigationItem = {
  href: "/" | "/products" | "/corporate" | "/about" | "/contact";
  translationKey: "home" | "products" | "corporate" | "about" | "contact";
};

export const navigationLinks: NavigationItem[] = [
  {
    href: "/",
    translationKey: "home",
  },
  {
    href: "/products",
    translationKey: "products",
  },
  {
    href: "/corporate",
    translationKey: "corporate",
  },
  {
    href: "/about",
    translationKey: "about",
  },
  {
    href: "/contact",
    translationKey: "contact",
  },
];
