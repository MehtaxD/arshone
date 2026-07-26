import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { whatsappUrl } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Fire Safety Company in Surat, Gujarat",
  description: "Contact Arshone Fire Safety Pvt Ltd in Surat for fire safety inspection, fire protection installation, equipment quotes, audits, refilling and AMC across Gujarat.",
  alternates: { canonical: `${site.domain}/contact` }
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#101114] py-20 text-white industrial-grid">
        <div className="container-shell">
          <h1 className="max-w-4xl text-balance text-4xl font-black md:text-6xl">Request a fire safety inspection in Surat or Gujarat</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">Call, WhatsApp or submit the form for fire safety systems, audits, NOC consultancy and maintenance support.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Talk to Arshone Fire Safety" />
            <div className="mt-5 grid gap-4">
              <a className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 font-bold text-neutral-800 shadow-sm" href={site.phoneHref}>
                <Phone className="text-[#d71920]" aria-hidden />
                {site.phone}
              </a>
              <a className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 font-bold text-neutral-800 shadow-sm" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle className="text-[#25d366]" aria-hidden />
                WhatsApp enquiry
              </a>
              <a className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 font-bold text-neutral-800 shadow-sm" href={site.emailHref}>
                <Mail className="text-[#d71920]" aria-hidden />
                {site.email}
              </a>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 font-bold text-neutral-800 shadow-sm">
                <MapPin className="text-[#d71920]" aria-hidden />
                {site.address}
              </div>
            </div>
          </div>
          <ContactForm title="Send Enquiry" />
        </div>
      </section>
    </main>
  );
}
