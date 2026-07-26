import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { GalleryLightbox } from "@/components/sections/gallery-lightbox";
import { CtaBanner } from "@/components/sections/cta-banner";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Facility & Gallery",
  description:
    "A look inside the Dana Gulf Rice warehouse, milling partners, and Dubai facility — storage, private-label packing, and container loading.",
};

export default function FacilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Facility & Gallery"
        title="Inside Our Dubai Warehouse & Milling Partners"
        subtitle="Storage, private-label repacking, and quality control — a look at where your order actually moves through."
        image="/images/hero/facility-hero.jpg"
        imageAlt="Dana Gulf Rice facility"
        size="compact"
      />

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Gallery"
            title="Warehouse, milling, and facility photography."
            subtitle="Click any image to view it larger."
          />
          <div className="mt-12">
            <GalleryLightbox images={galleryImages} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to see our facility in person?"
        subtitle="We welcome buyer visits to our Dubai warehouse by appointment."
      />
    </>
  );
}
