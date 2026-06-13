import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, services, site } from "@/lib/site-data";
import { whatsappUrl } from "@/components/cta-buttons";

export function Footer() {
  return (
    <footer className="bg-[#101114] pb-24 text-white md:pb-0">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        
        <div>
          <span className="relative block h-28 w-[140px] overflow-hidden">
            <Image
              src="/images/arshone-logo.png"
              alt={site.shortName}
              width={500}
              height={500}
              className="absolute left-1/2 top-1/2 h-[148px] w-[148px] -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </span>

          <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-300">
            Protecting industrial, commercial and residential properties with
            reliable fire safety systems, audits, compliance support and
            maintenance services across Surat and Gujarat.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={site.domain}
              className="grid size-10 place-items-center rounded-md border border-white/10 text-neutral-300 hover:bg-white/10"
            >
              <Globe size={18} />
            </a>

            <a
              href={site.emailHref}
              className="grid size-10 place-items-center rounded-md border border-white/10 text-neutral-300 hover:bg-white/10"
            >
              <Mail size={18} />
            </a>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-md border border-white/10 text-neutral-300 hover:bg-white/10"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href={site.domain}
              className="grid size-10 place-items-center rounded-md border border-white/10 text-neutral-300 hover:bg-white/10"
            >
              <Share2 size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black">Quick Links</h3>

          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black">Services</h3>

          <div className="mt-4 grid gap-2">
            {services.slice(0, 7).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm text-neutral-300 hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black">Contact Us</h3>

          <div className="mt-4 grid gap-4 text-sm text-neutral-300">
            <a
              href="tel:+919310063662"
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone size={17} />
              +91 9173173919
            </a>

            <a
              href="mailto:info@arshone.com | sandhu@arshone.com"
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail size={17} />
              info@arshone.com | sandhu@arshone.com
            </a>

            <a
              href="https://maps.app.goo.gl/geYiWdowQZsd9bzH7"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-white"
            >
              <MapPin size={17} />
              <span>
                UG-15, Raj Dream Complex
                <br />
                Second VIP Road, Near Kalamandir
                <br />
                Althan, Surat, Gujarat 395017
              </span>
            </a>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 py-3 font-bold text-[#101114]"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-shell flex flex-col items-center gap-3 text-center text-sm text-neutral-400">
          <p>
            © {new Date().getFullYear()} Arshone Fire Safety Pvt. Ltd. All Rights Reserved.
          </p>

          <p className="max-w-4xl">
            UG-15, Raj Dream Complex, Second VIP Road, Near Kalamandir,
            Althan, Surat, Gujarat 395017 | +91 9173173919 | info@arshone.com | sandhu@arshone.com
          </p>

          <p className="font-semibold text-neutral-300">
            Built by MEHTA MEDIA © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}