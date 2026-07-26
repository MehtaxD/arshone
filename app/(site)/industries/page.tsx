import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { industries, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries We Serve in Surat, Gujarat",
  description: "Fire safety solutions for factories, warehouses, hospitals, schools, hotels, residential projects, commercial buildings and shopping malls in Surat and Gujarat.",
  alternates: { canonical: `${site.domain}/industries` }
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="bg-[#101114] py-20 text-white industrial-grid">
        <div className="container-shell">
          <h1 className="max-w-4xl text-balance text-4xl font-black md:text-6xl">Fire safety solutions by industry and occupancy risk</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">Different buildings in Surat and Gujarat need different detection, suppression, evacuation and maintenance planning.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <SectionHeading eyebrow="Industries" title="Sites we support" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {industries.map(({ title, icon: Icon }) => (
                <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm" key={title}>
                  <Icon className="text-[#d71920]" aria-hidden />
                  <h2 className="mt-4 text-xl font-black text-[#101114]">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">Inspection, equipment selection, installation and maintenance support tailored to this site type.</p>
                </div>
              ))}
            </div>
          </div>
          <ContactForm title="Discuss Your Site" />
        </div>
      </section>
    </main>
  );
}
