import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Variety guides, export process explainers, and logistics guidance for rice buyers and importers.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes for Rice Buyers &amp; Importers"
        subtitle="Variety guides, export process explainers, and logistics guidance drawn from our day-to-day trading desk."
        image="/images/hero/blog-hero.jpg"
        imageAlt="Dana Gulf Rice insights"
        size="compact"
      />

      <section className="section">
        <div className="section-inner grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
