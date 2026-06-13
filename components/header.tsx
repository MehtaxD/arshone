"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { navLinks, site } from "@/lib/site-data";
import { whatsappUrl } from "@/components/cta-buttons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-24 items-center justify-between gap-4">
        <Link className="focus-ring flex shrink-0 items-center rounded-md" href="/" aria-label="Arshone Fire Safety home">
          <span className="relative block h-[88px] w-[110px] overflow-hidden sm:h-[92px] sm:w-[116px]">
            <Image
              src="/images/logo.png"
              alt={site.shortName}
              width={500}
              height={500}
              priority
              className="absolute left-1/2 top-1/2 h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 object-contain"
              style={{ height: "118px", width: "118px" }}
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link className="focus-ring rounded-md px-3 py-2 text-sm font-bold text-neutral-700 transition hover:bg-neutral-100 hover:text-[#d71920]" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
  className="focus-ring inline-flex items-center gap-2 rounded-md bg-[#140D40] px-5 py-3 text-sm font-bold text-white hover:bg-[#2549A3] transition-all"
  href={site.phoneHref}
>
  <Phone aria-hidden size={17} className="text-white" />
  <span className="text-white">{site.phone}</span>
</a>
          <a
  className="focus-ring inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-all"
  href={whatsappUrl()}
  target="_blank"
  rel="noreferrer"
>
  <FaWhatsapp size={18} />
  WhatsApp
</a>
        </div>

        <button className="focus-ring grid size-11 place-items-center rounded-md border border-neutral-200 lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <nav className="container-shell grid gap-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link className="focus-ring rounded-md px-3 py-3 font-bold text-neutral-800 hover:bg-neutral-100" href={link.href} key={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
