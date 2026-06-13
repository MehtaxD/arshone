import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CtaButtons, whatsappUrl } from "@/components/cta-buttons";
import { JsonLd } from "@/components/schema";
import { SectionHeading } from "@/components/section-heading";
import { serviceAreas, services, site } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Surat, Gujarat`,
    description: `${service.short} Contact Arshone Fire Safety in Surat for inspection, quotation, installation and maintenance support across Gujarat.`,
    alternates: { canonical: `${site.domain}/services/${service.slug}` },
    openGraph: {
      title: `${service.title} in Surat, Gujarat | Arshone Fire Safety`,
      description: service.short,
      url: `${site.domain}/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: { "@type": "LocalBusiness", name: site.name, url: site.domain },
    areaServed: serviceAreas,
    description: service.overview,
    url: `${site.domain}/services/${service.slug}`
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <section className="relative overflow-hidden bg-[#101114] py-20 text-white">
        <div className="absolute inset-0">
          <Image src={service.image} alt={service.title} fill className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101114] via-[#101114]/90 to-[#101114]/50" />
        </div>
        <div className="container-shell relative grid gap-6 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">Fire Safety Service</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black leading-tight md:text-6xl">{service.title} in Surat, Gujarat</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">{service.short}</p>
            <div className="mt-5"><CtaButtons /></div>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]">
            <div className="relative aspect-[4/3]">
              <Image src={service.image} alt={`${service.title} installation`} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <div className="p-6">
            <Icon className="text-red-300" size={44} aria-hidden />
            <p className="mt-5 text-sm leading-7 text-neutral-300">Request a site inspection for accurate scope, quantity, compliance gaps and project quotation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <SectionHeading eyebrow="Overview" title={service.title} text={service.overview} />
            <div className="mt-10 grid gap-6">
              <ContentBlock title="Benefits" items={service.benefits} />
              <ContentBlock title="Our Process" items={service.process} ordered />
              <ContentBlock title="Industries Served" items={service.industries} />
              <div>
                <h2 className="text-2xl font-black text-[#101114]">FAQ</h2>
                <div className="mt-4 grid gap-3">
                  {service.faqs.map((faq) => (
                    <details className="rounded-lg border border-neutral-200 bg-white p-4" key={faq.question}>
                      <summary className="cursor-pointer font-black text-[#101114]">{faq.question}</summary>
                      <p className="mt-3 text-sm leading-6 text-neutral-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-[#d71920] p-6 text-white">
                <h2 className="text-2xl font-black">Need this service in Surat or Gujarat?</h2>
                <p className="mt-2 text-red-50">Send your site details on WhatsApp and our team will respond with next steps for inspection, quote or maintenance support.</p>
                <a className="focus-ring mt-5 inline-flex rounded-md bg-white px-5 py-3 font-black text-[#101114]" href={whatsappUrl(`Hello Arshone Fire Safety, I want to enquire about ${service.title}.`)} target="_blank" rel="noreferrer">
                  WhatsApp CTA
                </a>
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#101114]">Service Areas</h2>
                <p className="mt-3 leading-7 text-neutral-600">
                  Arshone provides {service.title.toLowerCase()} support for Surat and key Gujarat regions, including industrial estates, commercial properties and residential developments.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceAreas.slice(0, 9).map((area) => (
                    <a className="focus-ring rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-bold text-neutral-800 hover:border-[#d71920] hover:text-[#d71920]" href="/contact" key={area}>
                      {area}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#101114]">Related Fire Safety Services</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {relatedServices.map((item) => (
                    <a className="focus-ring rounded-lg border border-neutral-200 bg-white p-4 font-black text-[#101114] hover:border-[#d71920] hover:text-[#d71920]" href={`/services/${item.slug}`} key={item.slug}>
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ContactForm title="Get Service Quote" service={service.title} />
          </aside>
        </div>
      </section>
    </main>
  );
}

function ContentBlock({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  const List = (ordered ? "ol" : "ul") as "ol" | "ul";
  return (
    <div>
      <h2 className="text-2xl font-black text-[#101114]">{title}</h2>
      <List className="mt-4 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-4" key={item}>
            <CheckCircle2 className="mt-0.5 shrink-0 text-[#d71920]" aria-hidden size={20} />
            <span className="font-bold text-neutral-800">{item}</span>
          </li>
        ))}
      </List>
    </div>
  );
}
