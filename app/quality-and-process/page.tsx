import type { Metadata } from "next";
import { Download, FileCheck2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { certifications } from "@/data/company";
import { processSteps, qcChecks } from "@/data/process";

export const metadata: Metadata = {
  title: "Quality & Process",
  description:
    "From paddy sourcing to container loading — the eight-step process, quality control checks, and certifications behind every Dana Gulf Rice shipment.",
};

export default function QualityAndProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Process"
        title="Every Lot, Traceable From Paddy to Port"
        subtitle="A controlled, repeatable process — sourcing, drying, milling, parboiling, sorting, and grading — before any rice is approved for loading."
        image="/images/hero/quality-hero.jpg"
        imageAlt="Rice processing facility"
        size="compact"
      />

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="The Process"
            title="Eight controlled steps, every shipment."
            subtitle="Each lot moves through the same pipeline regardless of order size, so quality doesn't vary between a sample bag and a full container."
          />
          <div className="mt-12">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="section bg-sand-100/60">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Lab & QC"
            title="Tested before it's approved for loading."
            subtitle="Every incoming and outgoing lot passes through the same set of checks."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qcChecks.map((check, i) => (
              <Reveal key={check.title} delay={i * 0.06}>
                <div className="rounded-lg border border-border bg-card p-6">
                  <FileCheck2
                    className="h-6 w-6 text-gold-600"
                    strokeWidth={1.75}
                  />
                  <h3 className="mt-4 font-display text-base text-navy-950">
                    {check.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                    {check.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section scroll-mt-24">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Certifications & Compliance"
            title="Documentation ready for customs, every shipment."
            subtitle="Certificates are issued per shipment where applicable (e.g. phytosanitary) and available on request for buyer due diligence."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card p-5"
              >
                <div>
                  <h3 className="font-display text-base text-navy-950">
                    {cert.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-800/70">
                    {cert.description}
                  </p>
                </div>
                <a
                  href={cert.fileHref}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-600"
                  aria-label={`Download ${cert.name} certificate`}
                >
                  <Download className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-navy-800/50">
            Certificate files shown are placeholders pending upload of scanned
            originals.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Need certificates for a specific shipment?"
        subtitle="We'll share phytosanitary, quality, and compliance documentation ahead of loading."
      />
    </>
  );
}
