import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { serviceAreas, services, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fire Safety Services in Surat, Gujarat",
  description: "Fire alarm, hydrant, sprinkler, extinguisher, refilling, audit, Fire NOC consultancy and AMC services in Surat and across Gujarat.",
  alternates: { canonical: `${site.domain}/services` }
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-[#101114] py-20 text-white industrial-grid">
        <div className="container-shell">
          <h1 className="max-w-4xl text-balance text-4xl font-black md:text-6xl">Fire safety services for Surat industrial, commercial and residential projects</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">Explore dedicated services for protection systems, equipment, compliance and maintenance across Surat, South Gujarat and nearby industrial regions.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Services" title="Choose the service you need" />
          <div className="mt-5 flex flex-wrap gap-2">
            {serviceAreas.slice(0, 8).map((area) => (
              <Link className="focus-ring rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-bold text-neutral-800 hover:border-[#d71920] hover:text-[#d71920]" href="/contact" key={area}>
                {area}
              </Link>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map(({ title, slug, short, image, icon: Icon }) => (
              <Link className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:border-[#d71920] hover:shadow-xl" href={`/services/${slug}`} key={slug}>
                <div className="relative aspect-[16/10] bg-neutral-100">
                  <Image src={image} alt={`${title} service in Surat, Gujarat`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-6">
                  <Icon className="text-[#d71920]" aria-hidden />
                  <h2 className="mt-4 text-2xl font-black text-[#101114]">{title}</h2>
                  <p className="mt-3 leading-7 text-neutral-600">{short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-black text-[#d71920]">Open service <ArrowRight size={17} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
