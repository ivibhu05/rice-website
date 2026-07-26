"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/products/product-card";
import {
  riceProducts,
  varietyCodes,
  PROCESSING_TYPES,
  type ProcessingType,
} from "@/data/products";
import { cn } from "@/lib/utils";

type RiceType = "All" | "Basmati" | "Non-Basmati";

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-navy-900 bg-navy-900 text-sand-50"
          : "border-border bg-transparent text-navy-800/80 hover:border-navy-900/40"
      )}
    >
      {children}
    </button>
  );
}

export function ProductsExplorer({
  initialVariety,
  initialProcessing,
}: {
  initialVariety?: string;
  initialProcessing?: ProcessingType;
}) {
  const [riceType, setRiceType] = useState<RiceType>("All");
  const [variety, setVariety] = useState<string>(initialVariety ?? "All");
  const [processing, setProcessing] = useState<ProcessingType | "All">(
    initialProcessing ?? "All"
  );

  const filtered = useMemo(() => {
    return riceProducts.filter((p) => {
      if (riceType === "Basmati" && !p.isBasmati) return false;
      if (riceType === "Non-Basmati" && p.isBasmati) return false;
      if (variety !== "All" && p.varietyCode !== variety) return false;
      if (processing !== "All" && p.processingType !== processing)
        return false;
      return true;
    });
  }, [riceType, variety, processing]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-border pb-8">
        <div>
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-navy-800/60">
            Type
          </p>
          <div className="flex flex-wrap gap-2">
            {(["All", "Basmati", "Non-Basmati"] as RiceType[]).map((t) => (
              <FilterPill
                key={t}
                active={riceType === t}
                onClick={() => setRiceType(t)}
              >
                {t}
              </FilterPill>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-navy-800/60">
            Processing
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterPill
              active={processing === "All"}
              onClick={() => setProcessing("All")}
            >
              All
            </FilterPill>
            {PROCESSING_TYPES.map((t) => (
              <FilterPill
                key={t}
                active={processing === t}
                onClick={() => setProcessing(t)}
              >
                {t}
              </FilterPill>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-navy-800/60">
            Variety Code
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterPill
              active={variety === "All"}
              onClick={() => setVariety("All")}
            >
              All
            </FilterPill>
            {varietyCodes.map((v) => (
              <FilterPill
                key={v}
                active={variety === v}
                onClick={() => setVariety(v)}
              >
                {v}
              </FilterPill>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-navy-800/60">
        Showing {filtered.length} of {riceProducts.length} products
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-lg border border-dashed border-border py-16 text-center text-navy-800/60">
          No products match these filters. Try clearing one to see more
          options.
        </div>
      )}
    </div>
  );
}
