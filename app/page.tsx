import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { StatsBar } from "@/components/sections/stats-bar";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProductCard } from "@/components/products/product-card";
import { Reveal } from "@/components/motion/reveal";
import { company, whyUs, clientTypes, exportRegions } from "@/data/company";
import { riceProducts } from "@/data/products";
import { processSteps } from "@/data/process";

const featuredProducts = riceProducts.filter((p) => p.featured);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-navy-950">
        <Image
          src="/images/hero/home-hero.jpg"
          alt="Basmati rice grain from Dana Gulf Rice Trading"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/20" />
        <div className="section-inner relative w-full px-6 pb-20 pt-32 md:px-10 lg:px-16">
          <p className="eyebrow text-gold-400">
            Dubai-Based Rice Exporters &amp; Traders
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl leading-[1.05] text-sand-50 md:text-6xl lg:text-7xl">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand-200/85 md:text-lg">
            {company.heroPromise}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="bg-gold-500 text-navy-950 hover:bg-gold-400"
            >
              Request a Quote
            </Button>
            <Button
              render={<Link href="/products" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="border-sand-50/30 bg-transparent text-sand-50 hover:bg-sand-50/10"
            >
              View Products
            </Button>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Why us */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Why Dana Gulf Rice"
            title="Built for buyers who need consistency, not just a container."
            subtitle="We work as an extension of your procurement team — direct sourcing, in-house quality control, and packaging that matches your brand."
          />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => {
              const Icon = Icons[item.icon as keyof typeof Icons] as Icons.LucideIcon;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section bg-sand-100/60">
        <div className="section-inner">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The Catalog"
              title="Basmati &amp; non-basmati rice, graded to spec."
              subtitle="From extra-long-grain 1121 to volume non-basmati staples — every lot is graded for grain length, breakage, and moisture before it ships."
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-gold-600"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process snapshot */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Quality & Process"
            title="From paddy to port, in eight controlled steps."
            subtitle="Every lot moves through the same sourcing, milling, and grading pipeline before it's approved for loading."
          />
          <div className="mt-12">
            <ProcessSteps steps={processSteps} variant="compact" />
          </div>
          <Link
            href="/quality-and-process"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-gold-600"
          >
            See the full process &amp; certifications
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Global reach */}
      <section className="section bg-navy-950">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Global Reach"
            title="Shipping from Dubai to over 30 markets."
            subtitle="Container-load supply across the GCC, Africa, South Asia, and Europe — with FOB, CIF, and CFR terms available."
            light
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {exportRegions.map((region, i) => (
              <Reveal key={region.region} delay={i * 0.07}>
                <h3 className="font-display text-lg text-gold-400">
                  {region.region}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-sand-200/75">
                  {region.countries.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Link
            href="/global-export"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-sand-50 hover:text-gold-400"
          >
            Explore export markets &amp; logistics
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Client types */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Who We Supply"
            title="Trusted by buyers across the supply chain."
            align="center"
          />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {clientTypes.map((client) => {
              const Icon = Icons[client.icon as keyof typeof Icons] as Icons.LucideIcon;
              return (
                <div
                  key={client.label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <Icon
                    className="h-7 w-7 text-navy-800"
                    strokeWidth={1.5}
                  />
                  <span className="max-w-[9rem] text-sm text-navy-800/80">
                    {client.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
