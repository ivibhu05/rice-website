import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-navy-950/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow text-gold-600">{post.category}</p>
        <h3 className="mt-1.5 font-display text-lg leading-snug text-navy-950">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/70">
          {post.excerpt}
        </p>
        <time className="mt-4 text-xs text-navy-800/50">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
