export const company = {
  name: "Dana Gulf Rice Trading LLC",
  shortName: "Dana Gulf Rice",
  tagline: "Sourced at the Source. Trusted Across Borders.",
  heroPromise:
    "Extra-long grain basmati, sourced direct from the growing belt and shipped from Dubai to over 30 markets worldwide.",
  foundedYear: 2012,
  address: {
    line1: "Warehouse 14, Al Aweer Fruit & Vegetable Market Road",
    line2: "Ras Al Khor Industrial Area 2",
    city: "Dubai",
    country: "United Arab Emirates",
    poBox: "P.O. Box 000000",
  },
  phone: "+971 4 000 0000",
  whatsapp: "+971 50 000 0000",
  whatsappLink: "https://wa.me/971500000000",
  email: "info@danagulfrice.com",
  salesEmail: "sales@danagulfrice.com",
  businessHours: "Sunday – Thursday, 9:00 AM – 6:00 PM (GST)",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Ras+Al+Khor+Industrial+Area+2,+Dubai,+UAE&output=embed",
  social: {
    linkedin: "https://linkedin.com/company/dana-gulf-rice",
    instagram: "https://instagram.com/danagulfrice",
  },
  stats: [
    { label: "Years in Trade", value: 13, suffix: "+" },
    { label: "Export Markets", value: 30, suffix: "+" },
    { label: "Containers / Year", value: 1200, suffix: "+" },
    { label: "Rice Varieties", value: 13, suffix: "" },
  ],
} as const;

export interface Certification {
  name: string;
  description: string;
  fileHref: string;
}

export const certifications: Certification[] = [
  {
    name: "ISO 22000:2018",
    description: "Food safety management system certification.",
    fileHref: "/certifications/iso-22000-placeholder.pdf",
  },
  {
    name: "HACCP",
    description: "Hazard Analysis & Critical Control Points compliance.",
    fileHref: "/certifications/haccp-placeholder.pdf",
  },
  {
    name: "FSSAI",
    description:
      "Food Safety and Standards Authority of India registration (sourcing side).",
    fileHref: "/certifications/fssai-placeholder.pdf",
  },
  {
    name: "APEDA Registered Exporter",
    description:
      "Agricultural & Processed Food Products Export Development Authority.",
    fileHref: "/certifications/apeda-placeholder.pdf",
  },
  {
    name: "Halal Certified",
    description: "Certified Halal processing and handling.",
    fileHref: "/certifications/halal-placeholder.pdf",
  },
  {
    name: "Phytosanitary Certificate",
    description:
      "Issued per shipment in compliance with destination country requirements.",
    fileHref: "/certifications/phytosanitary-placeholder.pdf",
  },
];

export interface ExportRegion {
  region: string;
  countries: string[];
}

export const exportRegions: ExportRegion[] = [
  {
    region: "GCC & Middle East",
    countries: [
      "UAE",
      "Saudi Arabia",
      "Oman",
      "Kuwait",
      "Qatar",
      "Iraq",
      "Jordan",
      "Yemen",
    ],
  },
  {
    region: "East & West Africa",
    countries: [
      "Nigeria",
      "Ghana",
      "Senegal",
      "Ivory Coast",
      "Kenya",
      "Tanzania",
      "Benin",
    ],
  },
  {
    region: "South Asia",
    countries: ["Sri Lanka", "Bangladesh", "Maldives"],
  },
  {
    region: "Europe",
    countries: ["United Kingdom", "Netherlands", "Germany"],
  },
];

export const logisticsInfo = {
  incoterms: ["FOB Mundra / Kandla / Karachi", "CIF (destination port)", "CFR"],
  minOrderQuantity: "1 x 20ft container (approx. 25–27 MT)",
  standardLeadTime:
    "18 – 25 days ex-works to loading, subject to destination port",
  containerCapacity:
    "20ft and 40ft FCL, palletized or floor-loaded bagging available",
};

export const clientTypes = [
  { label: "Hotels & Restaurants", icon: "ChefHat" },
  { label: "Distributors & Wholesalers", icon: "Truck" },
  { label: "Supermarkets & Retail Chains", icon: "ShoppingCart" },
  { label: "Food Service & Catering", icon: "UtensilsCrossed" },
  { label: "Government & Aid Programmes", icon: "Landmark" },
] as const;

export const whyUs = [
  {
    title: "Direct Sourcing",
    description:
      "We buy directly from mills and growers across Haryana, Punjab, and Sindh, cutting out intermediary markups without cutting quality.",
    icon: "Sprout",
  },
  {
    title: "In-House Quality Control",
    description:
      "Every lot passes moisture, broken-grain, and foreign-matter testing before it's approved for loading.",
    icon: "ShieldCheck",
  },
  {
    title: "Flexible Private-Label Packaging",
    description:
      "From generic bulk sacks to fully branded consumer bags, we pack to your specification and brand.",
    icon: "PackageCheck",
  },
  {
    title: "Consistent Container Supply",
    description:
      "Dubai-based logistics and warehousing mean reliable, repeatable container-load supply year-round.",
    icon: "Ship",
  },
] as const;
