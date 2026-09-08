export type ProductCategory = "curtains-drapes" | "blinds-shades" | "motorized";

export interface Product {
  slug: string;
  category: ProductCategory;
  badge: string;
  title: string;
  description: string;
  image: string;
}

export const productCategories: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "curtains-drapes", label: "Curtains & Drapes" },
  { key: "blinds-shades", label: "Blinds & Shades" },
  { key: "motorized", label: "Motorized" },
];

export const products: Product[] = [
  {
    slug: "sheer-curtains",
    category: "curtains-drapes",
    badge: "CURTAINS & DRAPES",
    title: "Sheer Curtains",
    description:
      "Soft, light-filtering panels that keep your view and your privacy - the UAE living-room essential.",
    image: "/images/curtain-1.png",
  },
  {
    slug: "sheer-blackout-curtains",
    category: "curtains-drapes",
    badge: "CURTAINS & DRAPES",
    title: "Sheer & Blackout Curtains",
    description:
      "The complete window: airy sheers for daytime, full blackout for night - two layers on one neat track.",
    image: "/products/sheer-blackout-curtains.png",
  },
  {
    slug: "wave-curtains",
    category: "curtains-drapes",
    badge: "CURTAINS & DRAPES",
    title: "Wave Curtains",
    description:
      "The heading style from the design magazines - fabric that falls in smooth, even S-folds, in sheer, blackout or both.",
    image: "/products/wave-curtains.png",
  },
  {
    slug: "premium-roller-blinds",
    category: "blinds-shades",
    badge: "BLINDS & SHADES",
    title: "Premium Roller Blinds",
    description:
      "Designer fabrics and sunscreen weaves that tame glare while keeping your view - rollers, upgraded.",
    image: "/products/blinds4.png",
  },
  {
    slug: "roman-blinds",
    category: "blinds-shades",
    badge: "BLINDS & SHADES",
    title: "Roman Blinds",
    description:
      "The warmth of curtains, the tidiness of blinds - real fabric folds that stack into a soft pelmet of colour.",
    image: "/products/roman-blinds-dubai.png",
  },
  {
    slug: "zebra-blinds",
    category: "blinds-shades",
    badge: "BLINDS & SHADES",
    title: "Zebra Blinds",
    description:
      "Alternating sheer and solid bands you align at will - from open view to full privacy in half a turn.",
    image: "/products/zebra-blinds-dubai.png",
  },
  {
    slug: "wooden-blinds",
    category: "blinds-shades",
    badge: "BLINDS & SHADES",
    title: "Wooden Blinds",
    description:
      "Warm timber slats that tilt from sunlight to shade - natural texture for studies, majlis and villas.",
    image: "/products/blinds5.png",
  },
  {
    slug: "motorized-curtains",
    category: "motorized",
    badge: "MOTORIZED",
    title: "Motorized Curtains",
    description:
      "Silent tracks that open at sunrise and close at a tap - remote, app or voice controlled. No wiring needed.",
    image: "/images/curtain-2.png",
  },
];
