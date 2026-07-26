export type ProcessingType =
  | "Raw/White"
  | "Steam"
  | "Sella"
  | "Golden Sella"
  | "Brown"
  | "Broken";

export const PROCESSING_TYPES: ProcessingType[] = [
  "Raw/White",
  "Steam",
  "Sella",
  "Golden Sella",
  "Brown",
  "Broken",
];

export interface RiceProduct {
  slug: string;
  varietyCode: string;
  name: string;
  processingType: ProcessingType;
  isBasmati: boolean;
  grainLengthMm?: number;
  originCountry: string;
  descriptionShort: string;
  descriptionLong: string;
  specs: {
    brokenPercentMax?: string;
    moisturePercentMax?: string;
    averageLengthMm?: string;
    agingYears?: string;
  };
  packagingOptions: string[];
  images: string[];
  useCases: string[];
  featured?: boolean;
}

const RETAIL_PACK = ["1kg", "5kg", "10kg", "20kg", "25kg"];
const BULK_PACK = ["50kg", "Bulk / Jumbo (1000kg)", "Private Label"];
const ALL_PACK = [...RETAIL_PACK, ...BULK_PACK];

export const riceProducts: RiceProduct[] = [
  {
    slug: "1121-steam-basmati",
    varietyCode: "1121",
    name: "1121 Steam Basmati Rice",
    processingType: "Steam",
    isBasmati: true,
    grainLengthMm: 8.3,
    originCountry: "India",
    descriptionShort:
      "Extra-long grain basmati, steam-processed for firm texture and consistent elongation on cooking.",
    descriptionLong:
      "Our 1121 Steam Basmati is sourced directly from the paddy-growing belt of Haryana and Punjab, then steam-processed to lock in grain integrity before milling. It delivers the extra-long, slender grain 1121 is known for, with clean separation and minimal stickiness after cooking — a reliable choice for HORECA kitchens and bulk retail packing alike.",
    specs: {
      brokenPercentMax: "2%",
      moisturePercentMax: "12%",
      averageLengthMm: "8.2 – 8.4 mm",
      agingYears: "1 Year",
    },
    packagingOptions: ALL_PACK,
    images: [
      "/images/products/1121-steam-1.jpg",
      "/images/products/1121-steam-2.jpg",
    ],
    useCases: ["Biryani", "Pilaf", "HORECA Bulk", "Retail Packing"],
    featured: true,
  },
  {
    slug: "1121-golden-sella",
    varietyCode: "1121",
    name: "1121 Golden Sella Basmati Rice",
    processingType: "Golden Sella",
    isBasmati: true,
    grainLengthMm: 8.3,
    originCountry: "India",
    descriptionShort:
      "Parboiled 1121 with its signature golden hue, prized for firm, non-sticky grains after cooking.",
    descriptionLong:
      "1121 Golden Sella is parboiled and sun/kiln-dried before milling, giving the grain its distinctive amber-gold colour and added nutrient retention. The parboiling process strengthens the grain, making it well suited to long-distance export and bulk container loading without compromising cooked texture.",
    specs: {
      brokenPercentMax: "2%",
      moisturePercentMax: "12%",
      averageLengthMm: "8.2 – 8.4 mm",
      agingYears: "1 Year",
    },
    packagingOptions: ALL_PACK,
    images: [
      "/images/products/1121-golden-sella-1.jpg",
      "/images/products/1121-golden-sella-2.jpg",
    ],
    useCases: ["Biryani", "Export Bulk", "Retail Packing"],
    featured: true,
  },
  {
    slug: "1121-sella-parboiled",
    varietyCode: "1121",
    name: "1121 Sella Basmati Rice (Creamy / White Sella)",
    processingType: "Sella",
    isBasmati: true,
    grainLengthMm: 8.3,
    originCountry: "India",
    descriptionShort:
      "Lightly parboiled creamy-white sella — a milder alternative to golden sella with the same grain strength.",
    descriptionLong:
      "A gentler parboiling cycle gives this 1121 Sella its creamy-white appearance rather than a deep gold, while retaining the strength and low-breakage advantage parboiling is known for. Popular with buyers who want the durability of sella rice without the golden tint on the plate.",
    specs: {
      brokenPercentMax: "2%",
      moisturePercentMax: "12%",
      averageLengthMm: "8.2 – 8.4 mm",
      agingYears: "1 Year",
    },
    packagingOptions: ALL_PACK,
    images: [
      "/images/products/1121-sella-1.jpg",
      "/images/products/1121-sella-2.jpg",
    ],
    useCases: ["Biryani", "Everyday Cooking", "Export Bulk"],
  },
  {
    slug: "1121-raw-white-basmati",
    varietyCode: "1121",
    name: "1121 Raw (White) Basmati Rice",
    processingType: "Raw/White",
    isBasmati: true,
    grainLengthMm: 8.3,
    originCountry: "India",
    descriptionShort:
      "Unparboiled, milled-white 1121 basmati with natural aroma and classic elongation.",
    descriptionLong:
      "Milled directly from raw paddy without parboiling, this 1121 raw white basmati carries the natural aroma buyers associate with premium basmati. Best suited to markets and kitchens that prefer traditionally milled, non-parboiled rice.",
    specs: {
      brokenPercentMax: "2%",
      moisturePercentMax: "12%",
      averageLengthMm: "8.2 – 8.4 mm",
      agingYears: "1 Year",
    },
    packagingOptions: ALL_PACK,
    images: [
      "/images/products/1121-raw-1.jpg",
      "/images/products/1121-raw-2.jpg",
    ],
    useCases: ["Biryani", "Retail Packing", "Everyday Cooking"],
  },
  {
    slug: "1509-sella-new-crop",
    varietyCode: "1509",
    name: "1509 Sella Basmati Rice (New Crop)",
    processingType: "Sella",
    isBasmati: true,
    grainLengthMm: 7.9,
    originCountry: "India",
    descriptionShort:
      "Slender extra-long grain from the current harvest, parboiled for a firmer bite and easy handling.",
    descriptionLong:
      "1509 is a shorter-duration basmati variety with a notably slender grain profile. This new-crop sella lot is parboiled shortly after harvest, giving buyers a fresher, more price-competitive alternative to 1121 while still meeting extra-long-grain specifications.",
    specs: {
      brokenPercentMax: "2%",
      moisturePercentMax: "12%",
      averageLengthMm: "7.8 – 8.0 mm",
      agingYears: "New Crop",
    },
    packagingOptions: ALL_PACK,
    images: [
      "/images/products/1509-sella-1.jpg",
      "/images/products/1509-sella-2.jpg",
    ],
    useCases: ["Biryani", "Export Bulk", "Retail Packing"],
    featured: true,
  },
  {
    slug: "1718-sella-basmati",
    varietyCode: "1718",
    name: "1718 Sella Basmati Rice",
    processingType: "Sella",
    isBasmati: true,
    grainLengthMm: 8.1,
    originCountry: "India",
    descriptionShort:
      "Indian-origin 1718 sella, a dependable mid-tier basmati for volume export programmes.",
    descriptionLong:
      "1718 sella basmati offers a balance of grain length and consistent cooking quality at a competitive price point, making it a common choice for volume container programmes into Africa and the Middle East.",
    specs: {
      brokenPercentMax: "5%",
      moisturePercentMax: "13%",
      averageLengthMm: "8.0 – 8.2 mm",
      agingYears: "1 Year",
    },
    packagingOptions: ALL_PACK,
    images: [
      "/images/products/1718-sella-1.jpg",
      "/images/products/1718-sella-2.jpg",
    ],
    useCases: ["Export Bulk", "Everyday Cooking", "Retail Packing"],
  },
  {
    slug: "1847-steam-basmati",
    varietyCode: "1847",
    name: "1847 Steam Basmati Rice",
    processingType: "Steam",
    isBasmati: true,
    grainLengthMm: 8.0,
    originCountry: "India",
    descriptionShort:
      "Steam-processed 1847 basmati offering firm grain structure for large-scale catering use.",
    descriptionLong:
      "1847 is steam-processed to reduce breakage during milling and transit, giving caterers and distributors a consistent, firm grain that holds up well in large-batch cooking.",
    specs: {
      brokenPercentMax: "5%",
      moisturePercentMax: "13%",
      averageLengthMm: "7.9 – 8.1 mm",
      agingYears: "1 Year",
    },
    packagingOptions: ALL_PACK,
    images: [
      "/images/products/1847-steam-1.jpg",
      "/images/products/1847-steam-2.jpg",
    ],
    useCases: ["HORECA Bulk", "Export Bulk", "Everyday Cooking"],
  },
  {
    slug: "1885-golden-sella",
    varietyCode: "1885",
    name: "1885 Golden Sella Basmati Rice",
    processingType: "Golden Sella",
    isBasmati: true,
    grainLengthMm: 8.2,
    originCountry: "India",
    descriptionShort:
      "Golden-hued parboiled 1885 basmati with strong grain integrity for long-haul export.",
    descriptionLong:
      "1885 Golden Sella carries the same parboiling advantages as our 1121 Golden Sella — added durability and a warm amber colour — in a variety offered at a more accessible price point for high-volume buyers.",
    specs: {
      brokenPercentMax: "5%",
      moisturePercentMax: "13%",
      averageLengthMm: "8.1 – 8.3 mm",
      agingYears: "1 Year",
    },
    packagingOptions: ALL_PACK,
    images: [
      "/images/products/1885-golden-sella-1.jpg",
      "/images/products/1885-golden-sella-2.jpg",
    ],
    useCases: ["Biryani", "Export Bulk", "Retail Packing"],
    featured: true,
  },
  {
    slug: "1885-raw-white",
    varietyCode: "1885",
    name: "1885 Raw / White Basmati Rice",
    processingType: "Raw/White",
    isBasmati: true,
    grainLengthMm: 8.2,
    originCountry: "India",
    descriptionShort:
      "Naturally milled white 1885 basmati, a value extra-long-grain option for everyday retail.",
    descriptionLong:
      "This raw, unparboiled 1885 lot is milled straight from paddy for buyers who want extra-long-grain basmati characteristics without the parboiling process, at a competitive landed cost.",
    specs: {
      brokenPercentMax: "5%",
      moisturePercentMax: "13%",
      averageLengthMm: "8.1 – 8.3 mm",
      agingYears: "1 Year",
    },
    packagingOptions: ALL_PACK,
    images: [
      "/images/products/1885-raw-1.jpg",
      "/images/products/1885-raw-2.jpg",
    ],
    useCases: ["Retail Packing", "Everyday Cooking"],
  },
  {
    slug: "1121-broken-basmati",
    varietyCode: "1121 Broken",
    name: "1121 Broken Basmati Rice",
    processingType: "Broken",
    isBasmati: true,
    originCountry: "India",
    descriptionShort:
      "Cost-efficient broken basmati graded for bulk institutional and food-processing use.",
    descriptionLong:
      "Sorted from the same premium 1121 milling line, our broken basmati is graded for consistent particle size and is popular with institutional caterers, food processors, and price-sensitive retail programmes.",
    specs: {
      brokenPercentMax: "100%",
      moisturePercentMax: "13%",
    },
    packagingOptions: ["25kg", "50kg", "Bulk / Jumbo (1000kg)"],
    images: ["/images/products/1121-broken-1.jpg"],
    useCases: ["Food Processing", "Institutional / Government Supply"],
  },
  {
    slug: "irri-6-non-basmati",
    varietyCode: "IRRI-6",
    name: "IRRI-6 Long Grain Non-Basmati Rice",
    processingType: "Raw/White",
    isBasmati: false,
    grainLengthMm: 6.6,
    originCountry: "India",
    descriptionShort:
      "High-yield long grain non-basmati, a staple bulk-supply variety for price-sensitive markets.",
    descriptionLong:
      "IRRI-6 is a widely traded long-grain non-basmati variety, well suited to government tenders, food-aid programmes, and high-volume retail supply where cost per tonne is the primary driver.",
    specs: {
      brokenPercentMax: "5%",
      moisturePercentMax: "14%",
      averageLengthMm: "6.4 – 6.8 mm",
    },
    packagingOptions: [
      "25kg",
      "50kg",
      "Bulk / Jumbo (1000kg)",
      "Private Label",
    ],
    images: ["/images/products/irri-6-1.jpg"],
    useCases: ["Institutional / Government Supply", "Everyday Cooking"],
  },
  {
    slug: "pk-386-non-basmati",
    varietyCode: "PK-386",
    name: "PK-386 Long Grain Non-Basmati Rice",
    processingType: "Raw/White",
    isBasmati: false,
    grainLengthMm: 6.8,
    originCountry: "Pakistan",
    descriptionShort:
      "Pakistani long-grain non-basmati offering good aroma at a non-basmati price point.",
    descriptionLong:
      "Sourced from Pakistan's Sindh growing belt, PK-386 offers a longer grain and lighter aroma than typical non-basmati varieties, making it a popular mid-tier alternative across East and West Africa.",
    specs: {
      brokenPercentMax: "5%",
      moisturePercentMax: "14%",
      averageLengthMm: "6.6 – 7.0 mm",
    },
    packagingOptions: [
      "25kg",
      "50kg",
      "Bulk / Jumbo (1000kg)",
      "Private Label",
    ],
    images: ["/images/products/pk-386-1.jpg"],
    useCases: ["Everyday Cooking", "Export Bulk"],
  },
  {
    slug: "1121-brown-basmati",
    varietyCode: "1121",
    name: "1121 Brown Basmati Rice",
    processingType: "Brown",
    isBasmati: true,
    grainLengthMm: 8.3,
    originCountry: "India",
    descriptionShort:
      "Unpolished 1121 basmati retaining its bran layer, for health-focused retail programmes.",
    descriptionLong:
      "Milled to remove only the husk, this 1121 brown basmati retains its bran layer and nutritional profile, meeting growing demand from health-focused retail and specialty grocery buyers.",
    specs: {
      brokenPercentMax: "3%",
      moisturePercentMax: "12%",
      averageLengthMm: "8.2 – 8.4 mm",
      agingYears: "1 Year",
    },
    packagingOptions: RETAIL_PACK.concat(["Private Label"]),
    images: ["/images/products/1121-brown-1.jpg"],
    useCases: ["Retail Packing", "Everyday Cooking"],
  },
];

export function getProductBySlug(slug: string) {
  return riceProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: RiceProduct, limit = 3) {
  return riceProducts
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.varietyCode === product.varietyCode ||
          p.processingType === product.processingType),
    )
    .slice(0, limit);
}

export const varietyCodes = Array.from(
  new Set(riceProducts.map((p) => p.varietyCode)),
).sort();
