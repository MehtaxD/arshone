import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CtaButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { site, whyChoose } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Arshone Fire Safety in Surat, Gujarat",
  description: "Learn about Arshone Fire Safety Pvt Ltd, a Surat-based fire safety company serving Gujarat with protection systems, equipment, audits, NOC consultancy and maintenance.",
  alternates: { canonical: `${site.domain}/about` }
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#101114] py-20 text-white industrial-grid">
        <div className="container-shell">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">About Arshone</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black leading-tight md:text-6xl">Fire safety engineering support for safer buildings in Surat and Gujarat</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">{site.description}</p>
          <div className="mt-5"><CtaButtons /></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Company" title="Practical fire protection from inspection to maintenance" text="Arshone Fire Safety Pvt Ltd helps property owners, builders, factories and facility teams in Surat and across Gujarat plan, install and maintain dependable fire safety systems." />
          <div className="grid gap-4">
            {["Fire protection system supply and installation", "Fire extinguisher supply, refilling and servicing", "Fire safety audits and Fire NOC consultancy", "Annual maintenance contracts and emergency support"].map((item) => (
              <div className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-4" key={item}>
                <CheckCircle2 className="shrink-0 text-[#d71920]" aria-hidden />
                <p className="font-bold text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <section className="bg-white py-20">
  <div className="container-shell">
    <div className="flex flex-col lg:flex-row items-center gap-16">

      <div className="w-full lg:w-[35%]">
        <Image
          src="/images/directorpic.jpeg"
          alt="Arshdeep G Sandhu"
          width={600}
          height={800}
          className="w-full max-w-md mx-auto rounded-xl border border-neutral-200 shadow-lg object-cover"
        />
      </div>

      <div className="w-full lg:w-[85%]">
<p className="text-base font-black uppercase tracking-[0.25em] text-[#d71920]">
          Director's Message
        </p>
<h2 className="mt-3 text-5xl font-black text-[#111] leading-tight">
          Arshdeep G. Sandhu
        </h2>
<p className="mt-3 text-2xl font-bold text-[#d71920]">
          Director, Arshone Fire Safety Pvt. Ltd.
        </p>
<p className="mt-8 text-xl leading-10 text-neutral-700">
          Arshdeep G. Sandhu is a young entrepreneur and visionary leader dedicated
          to raising fire safety standards across Gujarat. With a strong MBA
          background and practical industry experience, he combines business
          leadership with hands-on field expertise.
        </p>
<p className="mt-6 text-xl leading-10 text-neutral-700">
          His vision for Arshone Fire Safety is built on quality, compliance,
          innovation and long-term client relationships. Under his leadership,
          the company continues to provide reliable fire protection solutions for
          industrial, commercial and residential projects.
        </p>
<div className="mt-12 grid grid-cols-3 gap-5 max-w-2xl">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center">
            <p className="text-xl font-black text-[#d71920]">MBA,Fire Safety</p>
            <p className="text-sm font-bold">Business Leadership</p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center">
            <p className="text-xl font-black text-[#d71920]">Field</p>
            <p className="text-sm font-bold">Industry Experience</p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center">
            <p className="text-xl font-black text-[#d71920]">Vision</p>
            <p className="text-sm font-bold">Future Focused</p>
          </div>
        </div>
      </div>
      </div>
</div>
</section>
</section>
      <section className="bg-neutral-50 py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Values" title="Why clients choose Arshone" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ title, text, icon: Icon }) => (
              <div className="rounded-lg border border-neutral-200 bg-white p-6" key={title}>
                <Icon className="text-[#d71920]" aria-hidden />
                <h2 className="mt-4 text-xl font-black">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
