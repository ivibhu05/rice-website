import type { Metadata } from "next";
import { fraunces, manrope } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { company } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danagulfrice.com"),
  title: {
    default: `${company.name} — Basmati & Non-Basmati Rice Exporters, Dubai`,
    template: `%s — ${company.name}`,
  },
  description: company.tagline,
  openGraph: {
    title: company.name,
    description: company.tagline,
    siteName: company.name,
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.tagline,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  description: company.tagline,
  url: "https://www.danagulfrice.com",
  logo: "https://www.danagulfrice.com/opengraph-image.jpg",
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressCountry: company.address.country,
  },
  sameAs: [company.social.linkedin, company.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
