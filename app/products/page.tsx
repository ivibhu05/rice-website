import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProductsExplorer } from "@/components/products/products-explorer";
import type { ProcessingType } from "@/data/products";

export const metadata: Metadata = {
  title: "Rice Products",
  description:
    "Basmati and non-basmati rice varieties available for export — 1121, 1509, 1718, 1847, 1885, and more, in raw, steam, sella, golden sella, brown, and broken grades.",
};

type Props = {
  searchParams: Promise<{ variety?: string; processing?: string }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Our Catalog"
        title="Basmati &amp; Non-Basmati Rice, Graded to Export Spec"
        subtitle="Filter by variety, processing type, or grain length to find the right lot for your market."
        image="/images/hero/products-hero.jpg"
        imageAlt="Rice grain catalog"
        size="compact"
      />
      <section className="section">
        <div className="section-inner">
          <ProductsExplorer
            initialVariety={params.variety}
            initialProcessing={params.processing as ProcessingType | undefined}
          />
        </div>
      </section>
    </>
  );
}
