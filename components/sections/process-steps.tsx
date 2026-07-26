import Image from "next/image";
import type { ProcessStep } from "@/data/process";
import { cn } from "@/lib/utils";

export function ProcessSteps({
  steps,
  variant = "full",
}: {
  steps: ProcessStep[];
  variant?: "full" | "compact";
}) {
  return (
    <div
      className={cn(
        "grid gap-6",
        variant === "compact"
          ? "grid-cols-2 sm:grid-cols-4 lg:grid-cols-8"
          : "sm:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {steps.map((step) => (
        <div key={step.step} className="group">
          {variant === "full" && (
            <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-sand-200">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
          <div className="flex items-baseline gap-2.5">
            <span className="font-display text-xl text-gold-600">
              {String(step.step).padStart(2, "0")}
            </span>
            <h3 className="font-display text-base text-navy-950">
              {step.title}
            </h3>
          </div>
          {variant === "full" && (
            <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
              {step.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
