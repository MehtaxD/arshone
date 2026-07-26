import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, CheckCircle2, Clock3, Headphones, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CtaButtons } from "@/components/cta-buttons";
import { JsonLd } from "@/components/schema";
import { industries, projects, services, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
  default: "Fire Safety Company in Surat | Fire Extinguishers & Fire Systems",
  template: "%s | Arshone Fire Safety"
},

description:
  "Leading fire safety company in Surat offering fire extinguishers, refilling, hydrant systems, fire alarms, sprinkler systems, Fire NOC consultancy, fire safety audits and maintenance services across Gujarat.",
  alternates: { canonical: site.domain },
  openGraph: {
  title: "Fire Safety Company in Surat | Arshone Fire Safety",
  description:
    "Fire extinguishers, refilling services, fire alarm systems, hydrant systems, sprinkler systems, Fire NOC consultancy and fire safety equipment across Surat and Gujarat.",
  url: "https://arshone.com",
  siteName: "Arshone Fire Safety",
  locale: "en_IN",
  type: "website",
  images: [
    {
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Arshone Fire Safety"
    }
  ]
},
  }
keywords: [
"Fire Safety Company Surat",
"Fire Extinguisher Supplier Surat",
"Fire Extinguisher Refilling Surat",
"Fire Alarm System Surat",
"Smoke Detector Installation Surat",
"Fire Hydrant System Surat",
"Fire Sprinkler System Surat",
"Fire NOC Consultant Surat",
"Fire Safety Audit Surat",
"Fire Fighting Equipment Surat",
"Industrial Fire Safety Surat",
"Commercial Fire Safety Surat",
"Fire Safety Products Surat",
"Safety Equipment Supplier Surat",
"Fire Protection System Gujarat"
]
const advantages = [
  { title: "Certified Professionals", icon: ShieldCheck },
  { title: "Fast Response", icon: Clock3 },
  { title: "Quality Equipment", icon: BadgeCheck },
  { title: "AMC Support", icon: Headphones },
  { title: "Compliance Expertise", icon: CheckCircle2 },
  { title: "Experienced Team", icon: Wrench }
];

const keyAreas = ["Surat", "Hazira", "Sachin GIDC", "Pandesara", "Bharuch", "Ankleshwar", "Ahmedabad", "Vadodara", "Vapi"];

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Arshone Fire Safety",
    url: site.domain,
    description: site.description,
    about: services.map((service) => service.title),
    areaServed: keyAreas
  };

  return (
    <main>
      <JsonLd data={homeSchema} />

      <section className="relative overflow-hidden bg-[#0f0f10] text-white">
        <div className="absolute inset-0">
          <Image src="/images/project-industrial.webp" alt="Industrial fire protection pump room and hydrant installation" fill priority className="object-cover opacity-55" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0c] via-[#0b0b0c]/88 to-[#0b0b0c]/25" />
        </div>
<div className="container-shell relative grid min-h-[620px] items-center py-24 lg:min-h-[700px]">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-md border border-white/15 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-100">
              Arshone Fire Safety Pvt. Ltd - Surat
            </p>
<h1 className="mt-5 text-balance text-5xl font-black leading-[1.05] md:text-7xl">
              Complete Fire Safety Systems For Industrial, Commercial & Residential Projects
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-200">
              Fire alarm, hydrant, sprinkler, extinguisher, audit, Fire NOC and AMC support for Surat and Gujarat.
            </p>
            <div className="mt-5">
              <CtaButtons />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white py-5">
        <div className="container-shell grid gap-3 sm:grid-cols-3">
          {["Surat-based service response", "Industrial-grade fire systems", "Installation, audit and AMC"].map((item) => (
            <div className="flex items-center gap-3 rounded-md border border-neutral-200 px-4 py-3" key={item}>
              <span className="h-2.5 w-2.5 rounded-full bg-[#d71920]" />
              <span className="text-sm font-black text-[#151515]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className=" text-lg font-black uppercase tracking-[0.25em] text-[#d71920]">Core Services</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#111] md:text-4xl">Fire safety systems built for real sites</h2>
            </div>
            <Link className="focus-ring inline-flex items-center gap-2 rounded-md bg-[#d71920] px-4 py-3 text-sm font-black text-white" href="/services">
              All Services <ArrowRight aria-hidden size={17} />
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl" href={`/services/${service.slug}`} key={service.slug}>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image src={service.image} alt={`${service.title} in Surat and Gujarat`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">Surat & Gujarat</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-black text-[#111]">{service.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600">{service.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-12 text-white industrial-grid">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">Project Gallery</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Installation-focused fire protection work</h2>
          </div>

          <div className="mt-5 grid gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] md:grid md:grid-cols-2" key={project.title}>
                <div className={`relative min-h-[280px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-red-300">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
                  <p className="mt-2 text-sm font-bold text-neutral-400">{project.location}</p>
                  <p className="mt-4 max-w-xl leading-7 text-neutral-300">{project.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-5 text-center">
  <Link
    href="/projects"
    className="inline-flex rounded-md bg-[#d71920] px-6 py-3 font-bold text-white"
  >
    View All Projects
  </Link>
</div>

   <section className="py-12">
  <div className="container-shell">
    <div className="text-center">
      <p className=" text-lg font-black uppercase tracking-[0.25em] text-[#d71920]">
        WHY ARSHONE
      </p>

      <h2 className="mt-3 text-3xl font-black text-[#111] md:text-4xl">
        Why Choose Arshone?
      </h2>

      <p className="mt-3 text-lg text-neutral-600">
        Practical fire safety backed by site experience.
      </p>
    </div>

    <div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
      {advantages.map(({ title, icon: Icon }) => (
        <div
          className="rounded-lg border border-neutral-200 bg-white p-4 text-center shadow-sm"
          key={title}
        >
          <Icon className="mx-auto text-[#d71920]" aria-hidden />

          <h3 className="mt-3 text-sm font-black text-[#111]">
            {title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="bg-neutral-50 py-12">
  <div className="container-shell">
    <div className="text-center">
      <p className=" text-lg font-black uppercase tracking-[0.25em] text-[#d71920]">
        Industries Served
      </p>

      <h2 className="mt-3 text-3xl font-black text-[#111] md:text-4xl">
        Industries We Serve
      </h2>

      <p className="mt-3 text-lg text-neutral-600">
        Fire protection solutions for industrial, commercial and residential sectors.
      </p>
    </div>

    <div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-4">
      {industries.slice(0, 7).map(({ title, icon: Icon }) => (
        <div
          className="rounded-lg border border-neutral-200 bg-white p-4 text-center shadow-sm"
          key={title}
        >
          <Icon
            className="mx-auto text-[#d71920]"
            aria-hidden
            size={28}
          />

          <h3 className="mt-4 font-black text-[#111]">
            {title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="hidden">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className=" text-lg font-black uppercase tracking-[0.25em] text-[#d71920]">Service Areas</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111] md:text-4xl">Fire safety services across Surat and Gujarat</h2>
            <p className="mt-4 leading-7 text-neutral-600">Focused response for Surat, nearby industrial estates and major Gujarat business regions.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {keyAreas.map((area) => (
              <Link className="focus-ring rounded-md border border-neutral-200 bg-white px-4 py-3 text-sm font-black text-[#111] shadow-sm hover:border-[#d71920] hover:text-[#d71920]" href="/contact" key={area}>
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>
<section className="bg-white py-8">
  <div className="container-shell">
    <div className="text-center">
      <p className=" text-lg font-black uppercase tracking-[0.25em] text-[#d71920]">
        Our Location
      </p>

      <h2 className="mt-3 text-3xl font-black text-[#111] md:text-4xl">
        Visit Arshone Fire Safety
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
        Visit our office in Surat for fire safety consultation, inspections,
        project planning and support.
      </p>
    </div>

    <div className="mt-8 overflow-hidden rounded-xl border border-neutral-200 shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3227023166964!2d72.7961203!3d21.1395522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05378904b1bef%3A0x501a617c61365fbc!2sARSHONE%20Fire%20Safety%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1781281714379!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>
      <section className="bg-[#f6f6f6] py-12">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-lg bg-[#111] p-8 text-white">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">Get Started</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Request a fire safety inspection or quote</h2>
            <p className="mt-4 leading-7 text-neutral-300">Share your site type, location and required system. Arshone will respond for inspection, quotation or maintenance support in Surat and Gujarat.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-[#202226] px-5 py-3 font-black text-white" href={site.phoneHref}>
                <PhoneCall aria-hidden size={18} />
                Call Now
              </a>
              <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-[#d71920] px-5 py-3 font-black text-white" href="/contact">
                Get Free Quote
              </a>
            </div>
          </div>
          <ContactForm title="Send Enquiry" />
        </div>
      </section>
    </main>
  );
}
