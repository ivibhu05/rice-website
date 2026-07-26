import Link from "next/link";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

export function CtaBanner({
  title = "Ready to talk container sizes and pricing?",
  subtitle = "Tell us the variety, volume, and destination port — we'll come back with a quote within one business day.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy-950 px-6 py-16 md:px-10 md:py-20 lg:px-16">
      <div className="section-inner flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl leading-tight text-sand-50 md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-sand-200/80">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="bg-gold-500 text-navy-950 hover:bg-gold-400"
          >
            Request a Quote
          </Button>
          <Button
            render={<a href={company.whatsappLink} target="_blank" rel="noreferrer" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="border-sand-50/30 bg-transparent text-sand-50 hover:bg-sand-50/10"
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
