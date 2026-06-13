import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site-data";
import { whatsappUrl } from "@/components/cta-buttons";

export function FloatingActions() {
  return (
    <>
      <a
        className="focus-ring fixed bottom-24 right-4 z-50 hidden size-14 place-items-center rounded-full bg-[#25d366] text-[#101114] shadow-xl md:grid"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Arshone Fire Safety"
      >
        <MessageCircle aria-hidden />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-[#101114] p-2 md:hidden">
        <a className="focus-ring flex items-center justify-center gap-2 rounded-md bg-[#d71920] px-4 py-3 font-bold text-white" href={site.phoneHref}>
          <Phone aria-hidden size={18} />
          Call Now
        </a>
        <a className="focus-ring flex items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 py-3 font-bold text-[#101114]" href={whatsappUrl()} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
