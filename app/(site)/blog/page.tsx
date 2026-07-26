import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site-data";
import { getPublishedBlogs } from "@/lib/actions/blog";

export const metadata: Metadata = {
  title: "Fire Safety Blog for Surat and Gujarat",
  description:
    "Fire safety guides for Surat and Gujarat commercial buildings, fire alarm systems, sprinkler systems, audits, NOC readiness and AMC planning.",
  alternates: { canonical: `${site.domain}/blog` },
};

export default async function BlogPage() {
  const posts = await getPublishedBlogs();

  return (
    <main>
      <section className="bg-[#101114] py-20 text-white industrial-grid">
        <div className="container-shell">
          <h1 className="max-w-4xl text-balance text-4xl font-black md:text-6xl">
            Fire safety guides for better decisions in Gujarat
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            Professional starter articles for facility teams, builders and property owners in
            Surat and Gujarat.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Blog" title="Latest fire safety insights" />

          {posts.length === 0 ? (
            <p className="mt-10 text-neutral-500">
              No articles published yet. Check back soon.
            </p>
          ) : (
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {posts.map((post) => (
                <article
                  className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
                  key={post.slug}
                >
                  {post.featuredImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.featuredImage}
                      alt={post.imageAlt || post.title}
                      className="mb-4 h-40 w-full rounded-md object-cover"
                    />
                  )}
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d71920]">
                    {post.category || "Guide"}
                  </p>
                  <h2 className="mt-4 text-xl font-black text-[#101114]">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-neutral-600">
                    {post.excerpt}
                  </p>
                  <Link
                    className="mt-5 inline-flex items-center gap-2 font-black text-[#d71920]"
                    href={`/blog/${post.slug}`}
                  >
                    Read article <ArrowRight aria-hidden size={17} />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
