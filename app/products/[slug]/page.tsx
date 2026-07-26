import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ProductCard } from "@/components/products/product-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  getProductBySlug,
  getRelatedProducts,
  riceProducts,
} from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return riceProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.descriptionShort,
  };
}

const SPEC_LABELS: Record<string, string> = {
  brokenPercentMax: "Broken % (Max)",
  moisturePercentMax: "Moisture % (Max)",
  averageLengthMm: "Average Grain Length",
  agingYears: "Aging",
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const specEntries = Object.entries(product.specs).filter(([, v]) => v);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.descriptionShort,
    image: product.images.map(
      (img) => `https://www.danagulfrice.com${img}`
    ),
    brand: { "@type": "Brand", name: "Dana Gulf Rice Trading LLC" },
    category: product.isBasmati ? "Basmati Rice" : "Non-Basmati Rice",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="section pb-0">
        <div className="section-inner">
          <nav className="text-sm text-navy-800/60">
            <Link href="/products" className="hover:text-navy-950">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy-950">{product.name}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand-200">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {product.images.slice(1).map((img) => (
                    <div
                      key={img}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand-200"
                    >
                      <Image
                        src={img}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 22vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="eyebrow text-gold-600">
                {product.varietyCode} &middot; {product.processingType}
              </p>
              <h1 className="mt-2 text-balance font-display text-3xl text-navy-950 md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-navy-800/75">
                {product.descriptionLong}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.useCases.map((u) => (
                  <span
                    key={u}
                    className="rounded-full bg-sand-200 px-3 py-1 text-xs font-medium text-navy-900"
                  >
                    {u}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  render={
                    <Link
                      href={`/contact?product=${encodeURIComponent(
                        product.name
                      )}&type=quote`}
                    />
                  }
                  nativeButton={false}
                  size="lg"
                  className="bg-navy-900 text-sand-50 hover:bg-navy-800"
                >
                  Request a Quote for This Product
                </Button>
                <Button
                  render={
                    <Link
                      href={`/contact?product=${encodeURIComponent(
                        product.name
                      )}&type=sample`}
                    />
                  }
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                >
                  Request a Sample
                </Button>
              </div>

              <Tabs defaultValue="specs" className="mt-10">
                <TabsList>
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                  <TabsTrigger value="packaging">Packaging</TabsTrigger>
                </TabsList>
                <TabsContent value="specs" className="pt-5">
                  <dl className="divide-y divide-border border-y border-border">
                    <div className="flex justify-between py-3 text-sm">
                      <dt className="text-navy-800/60">Variety Code</dt>
                      <dd className="font-medium text-navy-950">
                        {product.varietyCode}
                      </dd>
                    </div>
                    <div className="flex justify-between py-3 text-sm">
                      <dt className="text-navy-800/60">Origin</dt>
                      <dd className="font-medium text-navy-950">
                        {product.originCountry}
                      </dd>
                    </div>
                    <div className="flex justify-between py-3 text-sm">
                      <dt className="text-navy-800/60">Processing Type</dt>
                      <dd className="font-medium text-navy-950">
                        {product.processingType}
                      </dd>
                    </div>
                    {specEntries.map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 text-sm">
                        <dt className="text-navy-800/60">
                          {SPEC_LABELS[key] ?? key}
                        </dt>
                        <dd className="font-medium text-navy-950">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </TabsContent>
                <TabsContent value="packaging" className="pt-5">
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {product.packagingOptions.map((pack) => (
                      <li
                        key={pack}
                        className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-navy-900"
                      >
                        <CircleCheck className="h-4 w-4 shrink-0 text-gold-600" />
                        {pack}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section-inner">
            <h2 className="font-display text-2xl text-navy-950">
              Related Varieties
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title={`Ready to order ${product.name}?`}
        subtitle="Share your target volume and destination port and we'll send a formal quotation within one business day."
      />
    </>
  );
}
