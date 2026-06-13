import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fire Safety Blog for Surat and Gujarat",
  description: "Fire safety guides for Surat and Gujarat commercial buildings, fire alarm systems, sprinkler systems, audits, NOC readiness and AMC planning.",
  alternates: { canonical: `${site.domain}/blog` }
};

export default function BlogPage() {
  return (
    <main>
      <section className="bg-[#101114] py-20 text-white industrial-grid">
        <div className="container-shell">
          <h1 className="max-w-4xl text-balance text-4xl font-black md:text-6xl">Fire safety guides for better decisions in Gujarat</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">Professional starter articles for facility teams, builders and property owners in Surat and Gujarat.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Blog" title="Latest fire safety insights" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm" key={post.slug}>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d71920]">Guide</p>
                <h2 className="mt-4 text-xl font-black text-[#101114]">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{post.excerpt}</p>
                <Link className="mt-5 inline-flex items-center gap-2 font-black text-[#d71920]" href="/contact">
                  Ask an expert <ArrowRight aria-hidden size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
