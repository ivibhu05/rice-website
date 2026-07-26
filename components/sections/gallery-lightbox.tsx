"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;
  const active = activeIndex !== null ? images[activeIndex] : null;

  const show = (delta: number) => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + delta + images.length) % images.length);
  };

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={cn(
              "group relative mb-4 block w-full overflow-hidden rounded-lg bg-sand-200",
              i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-navy-950/70 px-2.5 py-1 text-[11px] font-medium text-sand-50">
              {img.category}
            </span>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(v) => !v && setActiveIndex(null)}>
        <DialogContent
          showCloseButton
          className="max-w-4xl border-none bg-navy-950 p-0 sm:max-w-4xl"
        >
          <DialogTitle className="sr-only">
            {active?.alt ?? "Facility photo"}
          </DialogTitle>
          {active && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => show(-1)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy-950/70 text-sand-50 hover:bg-navy-950/90"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => show(1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy-950/70 text-sand-50 hover:bg-navy-950/90"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
          {active && (
            <p className="px-4 pb-4 text-sm text-sand-200/80">{active.alt}</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
