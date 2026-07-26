import type { Metadata } from "next";
import Image from "next/image";
import { Anchor, Boxes, Clock3, Ship } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { exportRegions, logisticsInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Global Export & Markets",
  description:
    "Container-load rice export from Dubai to the GCC, Africa, South Asia, and Europe — Incoterms, MOQ, lead times, and private-label packaging capability.",
};

const logisticsCards = [
  { icon: Anchor, label: "Incoterms", values: logisticsInfo.incoterms },
  {
    icon: Boxes,
    label: "Minimum Order Quantity",
    values: [logisticsInfo.minOrderQuantity],
  },
  {
    icon: Clock3,
    label: "Standard Lead Time",
    values: [logisticsInfo.standardLeadTime],
  },
  {
    icon: Ship,
    label: "Container Capacity",
    values: [logisticsInfo.containerCapacity],
  },
];

export default function GlobalExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Export"
        title="Shipping From Dubai to Over 30 Markets"
        subtitle="Container-load basmati and non-basmati rice, with flexible Incoterms and packaging for every destination market."
        image="/images/hero/global-export-hero.jpg"
        imageAlt="Container port logistics"
        size="compact"
      />

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Markets We Serve"
            title="A trading desk built around four core regions."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {exportRegions.map((region, i) => (
              <Reveal key={region.region} delay={i * 0.07}>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-display text-lg text-navy-950">
                    {region.region}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-navy-800/70">
                    {region.countries.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-950">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Shipping & Logistics"
            title="What to expect on your first order."
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {logisticsCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.07}>
                <card.icon
                  className="h-6 w-6 text-gold-400"
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-sand-50">
                  {card.label}
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-sand-200/75">
                  {card.values.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="private-label" className="section scroll-mt-24">
        <div className="section-inner grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-gold-600">Private Label</p>
            <h2 className="mt-3 text-balance text-3xl leading-tight text-navy-950 md:text-4xl">
              Your brand, our packing line.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-800/75">
              Beyond generic bulk sacks, we run private-label packaging
              programmes for distributors and retailers who want to sell
              rice under their own brand — from 1kg and 5kg consumer retail
              bags to 25kg and 50kg bulk formats.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-800/80">
              <li className="flex gap-2.5">
                <span className="mt-0.5 text-gold-600">01</span>
                Artwork review and pre-production sample approval before a
                full packing run.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-0.5 text-gold-600">02</span>
                Retail and bulk formats packed to your specification,
                including multilingual labelling where required.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-0.5 text-gold-600">03</span>
                Minimum order quantities apply for custom-printed packaging
                — ask for current thresholds by pack size.
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand-200">
            <Image
              src="/images/facility/warehouse-3.jpg"
              alt="Private-label branded rice bags on pallets"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Planning your first container?"
        subtitle="Send us your destination port, target variety, and pack size — we'll confirm MOQ, lead time, and pricing."
      />
    </>
  );
}
