import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/sections/cta-banner";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="section pb-0">
        <div className="section-inner max-w-3xl">
          <nav className="text-sm text-navy-800/60">
            <Link href="/blog" className="hover:text-navy-950">
              Insights
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy-950">{post.title}</span>
          </nav>

          <p className="eyebrow mt-8 text-gold-600">{post.category}</p>
          <h1 className="mt-3 text-balance font-display text-3xl text-navy-950 md:text-4xl">
            {post.title}
          </h1>
          <time className="mt-4 block text-sm text-navy-800/50">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-sand-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-800/80">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <h2 className="font-display text-2xl text-navy-950">
            More Insights
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
