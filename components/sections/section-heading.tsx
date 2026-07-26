import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  light,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-3", light && "text-gold-400")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl leading-tight md:text-4xl",
          light ? "text-sand-50" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-sand-200/80" : "text-navy-800/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
