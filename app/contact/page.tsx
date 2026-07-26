import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Request a quote or sample from Dana Gulf Rice Trading LLC — Dubai-based exporters of basmati and non-basmati rice.",
};

type Props = {
  searchParams: Promise<{ product?: string; type?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Request a Quote or Sample"
        subtitle="Tell us what you need and our export team will respond within one business day."
        image="/images/hero/contact-hero.jpg"
        imageAlt="Dana Gulf Rice contact"
        size="compact"
      />

      <section className="section">
        <div className="section-inner grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="rounded-lg border border-border bg-card p-6 md:p-10">
            <ContactForm
              defaultProduct={params.product}
              defaultType={params.type === "sample" ? "sample" : "quote"}
            />
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <h3 className="text-sm font-semibold text-navy-950">
                    Office &amp; Warehouse
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-800/70">
                    {company.address.line1}
                    <br />
                    {company.address.line2}, {company.address.city}
                    <br />
                    {company.address.country}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <h3 className="text-sm font-semibold text-navy-950">
                    Phone &amp; WhatsApp
                  </h3>
                  <p className="mt-1 text-sm text-navy-800/70">
                    {company.phone}
                    <br />
                    {company.whatsapp} (WhatsApp)
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <h3 className="text-sm font-semibold text-navy-950">
                    Email
                  </h3>
                  <p className="mt-1 text-sm text-navy-800/70">
                    {company.email}
                    <br />
                    {company.salesEmail}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <h3 className="text-sm font-semibold text-navy-950">
                    Business Hours
                  </h3>
                  <p className="mt-1 text-sm text-navy-800/70">
                    {company.businessHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <iframe
                src={company.mapEmbedUrl}
                title="Dana Gulf Rice Trading location map"
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
