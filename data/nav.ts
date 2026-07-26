export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Quality & Process", href: "/quality-and-process" },
  { label: "Global Export", href: "/global-export" },
  { label: "About", href: "/about" },
  { label: "Facility", href: "/facility" },
  { label: "Insights", href: "/blog" },
] as const;

export const footerNav = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Quality & Process", href: "/quality-and-process" },
    { label: "Global Export", href: "/global-export" },
    { label: "Facility & Gallery", href: "/facility" },
  ],
  catalog: [
    { label: "All Products", href: "/products" },
    { label: "Basmati Rice", href: "/products?variety=1121" },
    { label: "Non-Basmati Rice", href: "/products?processing=Raw%2FWhite" },
    { label: "Private Label", href: "/global-export#private-label" },
  ],
  resources: [
    { label: "Insights", href: "/blog" },
    { label: "Request a Quote", href: "/contact" },
    { label: "Certifications", href: "/quality-and-process#certifications" },
  ],
} as const;
