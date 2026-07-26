import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { RiceProduct } from "@/data/products";

export function ProductCard({ product }: { product: RiceProduct }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-navy-950/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-200">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-sand-50">
          {product.varietyCode}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow text-gold-600">{product.processingType}</p>
        <h3 className="mt-1.5 font-display text-lg leading-snug text-navy-950">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/70">
          {product.descriptionShort}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-900 group-hover:text-gold-600">
          View Details
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
