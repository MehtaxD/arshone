import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/site-data";
import { getPublishedBlogBySlug, getPublishedBlogs } from "@/lib/actions/blog";

export async function generateStaticParams() {
  const posts = await getPublishedBlogs();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt || undefined,
    alternates: { canonical: `${site.domain}/blog/${post.slug}` },
    openGraph: post.featuredImage ? { images: [post.featuredImage] } : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const tags = post.tags
    ? post.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <main>
      <section className="bg-[#101114] py-16 text-white industrial-grid">
        <div className="container-shell">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white"
          >
            <ArrowLeft size={16} /> Back to blog
          </Link>

          {post.category && (
            <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-[#d71920]">
              {post.category}
            </p>
          )}
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-black md:text-5xl">
            {post.title}
          </h1>
          {post.author && (
            <p className="mt-4 text-sm text-neutral-400">By {post.author}</p>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container-shell max-w-3xl">
          {post.featuredImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.featuredImage}
              alt={post.imageAlt || post.title}
              className="mb-10 w-full rounded-lg object-cover"
            />
          )}

          <div
            className="prose max-w-none prose-headings:font-black prose-headings:text-[#101114] prose-a:text-[#d71920]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2 border-t pt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
