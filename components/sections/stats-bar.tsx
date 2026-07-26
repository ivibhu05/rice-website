"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { company } from "@/data/company";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 24, stiffness: 60 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="border-y border-border bg-sand-100/60 px-6 py-12 md:px-10 lg:px-16">
      <div className="section-inner grid grid-cols-2 gap-8 md:grid-cols-4">
        {company.stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <div className="font-display text-4xl text-navy-950 md:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-1.5 text-sm text-navy-800/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
