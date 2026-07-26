import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { StatsBar } from "@/components/sections/stats-bar";
import { CtaBanner } from "@/components/sections/cta-banner";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dana Gulf Rice Trading LLC is a Dubai-based exporter of basmati and non-basmati rice, sourcing direct from India and Pakistan and shipping to over 30 markets.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Trading Desk Built on Direct Sourcing"
        subtitle={`Founded in ${company.foundedYear}, ${company.name} has grown from a single-container operation into a full-catalog rice exporter trading out of Dubai.`}
        image="/images/hero/about-hero.jpg"
        imageAlt="Dana Gulf Rice facility"
        size="compact"
      />

      <section className="section">
        <div className="section-inner grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold-600">Our Story</p>
            <h2 className="mt-3 text-balance text-3xl leading-tight text-navy-950 md:text-4xl">
              From a single container to a full catalog.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-800/75">
              <p>
                {company.name} started as a small trading desk moving single
                containers of basmati into the GCC. Over {company.foundedYear ? new Date().getFullYear() - company.foundedYear : 13} years, direct
                relationships with mills and growers across Haryana, Punjab,
                and Sindh have let us expand into a full catalog spanning raw,
                steam, sella, golden sella, brown, and broken grades — both
                basmati and non-basmati.
              </p>
              <p>
                We remain a trading and export company, not a mill — which
                means our focus stays on sourcing the right lot for each
                buyer&apos;s specification, running our own quality checks, and
                managing logistics end-to-end from Dubai.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-gold-600">Mission &amp; Vision</p>
            <h2 className="mt-3 text-balance text-3xl leading-tight text-navy-950 md:text-4xl">
              Consistency buyers can plan around.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-800/75">
              <p>
                <strong className="text-navy-950">Mission —</strong> deliver
                graded, export-ready rice at a consistent specification, lot
                after lot, so buyers can plan their own supply chains around
                us rather than working around variability.
              </p>
              <p>
                <strong className="text-navy-950">Vision —</strong> become
                the first call for distributors and retailers entering a new
                rice market, backed by flexible private-label packaging and
                dependable container-load supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="section bg-sand-100/60">
        <div className="section-inner grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand-200 lg:order-2">
            <Image
              src="/images/facility/exterior-1.jpg"
              alt="Dana Gulf Rice facility exterior"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <p className="eyebrow text-gold-600">Our Facility</p>
            <h2 className="mt-3 text-balance text-3xl leading-tight text-navy-950 md:text-4xl">
              Warehousing built for container-load turnaround.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-800/75">
              Our Ras Al Khor warehouse handles bulk storage, private-label
              repacking, and quality control testing under one roof, with
              direct road access for container loading. Partner milling
              facilities across the sourcing belt handle husking, parboiling,
              and polishing before rice reaches Dubai.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner max-w-3xl">
          <SectionHeading
            eyebrow="Why Dubai"
            title="A trading hub, not just a warehouse address."
            subtitle="Operating out of Dubai gives buyers advantages a mill-side exporter can't offer on its own."
          />
          <div className="mt-10 space-y-6 text-base leading-relaxed text-navy-800/75">
            <p>
              Dubai&apos;s position as a re-export hub means faster access to
              global shipping lines, consolidated freight options, and
              banking infrastructure suited to international trade finance —
              all of which shorten the path between order confirmation and
              container loading.
            </p>
            <p>
              Proximity to Jebel Ali Port and Dubai&apos;s broader logistics
              network also lets us hold buffer stock locally for regional
              buyers who need faster turnaround than a direct-from-India
              shipment would allow.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
