import type { Metadata } from "next";
import Image from "next/image";
import { Building2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fire Safety Projects in Surat and Gujarat",
  description: "Sample industrial, commercial, warehouse and healthcare fire safety project experience by Arshone Fire Safety in Surat and Gujarat.",
  alternates: { canonical: `${site.domain}/projects` }
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-[#101114] py-20 text-white industrial-grid">
        <div className="container-shell">
          <h1 className="max-w-4xl text-balance text-4xl font-black md:text-6xl">Project-ready fire protection for demanding Gujarat sites</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">Representative project cards for installation, audit, sprinkler, hydrant and alarm system scopes in Surat and nearby regions.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Projects" title="Sample work categories" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm" key={project.title}>
                <div className="relative aspect-[16/10] bg-neutral-100">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-6">
                  <Building2 className="text-[#d71920]" aria-hidden />
                  <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-[#d71920]">{project.type}</p>
                  <h2 className="mt-3 text-2xl font-black text-[#101114]">{project.title}</h2>
                  <p className="mt-2 font-bold text-neutral-500">{project.location}</p>
                  <p className="mt-4 leading-7 text-neutral-600">{project.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
