import Image from "next/image";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  size = "default",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  size?: "default" | "compact";
}) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-navy-950",
        size === "compact" ? "h-[46vh] min-h-[340px]" : "h-[58vh] min-h-[440px]"
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/10" />
      <div className="section-inner relative w-full px-6 pb-14 md:px-10 lg:px-16">
        <p className="eyebrow text-gold-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl leading-[1.08] text-sand-50 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sand-200/85 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
