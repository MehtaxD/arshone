import { MessageCircle, PhoneCall } from "lucide-react";
import { site } from "@/lib/site-data";
import { FaWhatsapp } from "react-icons/fa";

type CtaButtonsProps = {
  compact?: boolean;
};

export function whatsappUrl(message = "Hello Arshone Fire Safety, I want to enquire about fire safety services.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function CtaButtons({ compact = false }: CtaButtonsProps) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-md font-bold transition hover:-translate-y-0.5";
  const size = compact ? "px-4 py-3 text-sm" : "px-5 py-3.5 text-sm sm:text-base";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a className={`${base} ${size} bg-[#d71920] text-white shadow-lg shadow-red-900/20`} href="/contact">
        Get Free Quote
      </a>
      <a className={`${base} ${size} bg-[#25D366] text-white hover:bg-[#1ebe5d]`} href={whatsappUrl()} target="_blank" rel="noreferrer">
        <FaWhatsapp size={19} />
        WhatsApp Now
      </a>
      <a className={`${base} ${size} border border-white/20 bg-[#202226] text-white`} href={site.phoneHref}>
        <PhoneCall aria-hidden size={19} />
        Call Now
      </a>
    </div>
  );
}
