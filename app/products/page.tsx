import type { Metadata } from "next";
import Image from "next/image";
import { MessageSquareQuote } from "lucide-react";
import { whatsappUrl } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { products, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fire Safety Products in Surat, Gujarat",
  description: "Fire extinguishers, smoke detectors, alarm panels, hydrant accessories, sprinkler systems, emergency lights and safety signage in Surat and Gujarat.",
  alternates: { canonical: `${site.domain}/products` }
};

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-[#101114] py-20 text-white industrial-grid">
        <div className="container-shell">
          <h1 className="max-w-4xl text-balance text-4xl font-black md:text-6xl">Fire safety equipment supply in Surat and Gujarat</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">Request quotes for equipment selected around your site risk, occupancy and compliance needs, with supply support for industrial, commercial and residential facilities.</p>
        </div>
      </section>
      <section className="py-16 border-b border-neutral-200">
  <div className="container-shell">
    <div className="text-center">
      <p className=" text-lg font-black uppercase tracking-[0.25em] text-[#d71920]">
        Authorized Distributor Of
      </p>
  <h2 className="mt-3 text-3xl font-black text-[#111] md:text-4xl">
    Trusted Fire Safety Brands
  </h2>
</div>

<div className="mt-10 flex gap-4 overflow-x-auto pb-4">

  <div className="min-w-[240px] rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
    <Image
      src="/images/fuel.webp"
      alt="Fuel Safety Shoes"
      width={180}
      height={80}
      className="mx-auto h-16 w-auto object-contain"
    />
  </div>

  <div className="min-w-[240px] rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
    <Image
      src="/images/payuh.png"
      alt="Payuh"
      width={180}
      height={80}
      className="mx-auto h-16 w-auto object-contain"
    />
  </div>

  <div className="min-w-[240px] rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
    <Image
      src="/images/gfo.jpg"
      alt="GFO"
      width={180}
      height={80}
      className="mx-auto h-16 w-auto object-contain"
    />
  </div>

  <div className="min-w-[240px] rounded-xl border border-neutral-200 bg-white p-6 shadow-sm flex items-center justify-center">
    <span className="text-lg font-black text-[#111]">
      All Major Brands Worldwide
    </span>
  </div>

</div>

<div className="mt-14 text-center">
  <p className=" text-lg font-black uppercase tracking-[0.25em] text-[#d71920]">
    Product Gallery
  </p>

  <h2 className="mt-3 text-3xl font-black text-[#111] md:text-4xl">
    Safety Equipment Range
  </h2>
</div>

<div className="mt-10 flex gap-5 overflow-x-auto pb-4">

  <div className="min-w-[320px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
    <Image
      src="/images/hydrant.jpg"
      alt="Hydrant System"
      width={500}
      height={400}
      className="h-52 w-full object-contain p-4"
    />
  </div>

  <div className="min-w-[320px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
    <Image
      src="/images/fireball.png"
      alt="Fire Ball"
      width={500}
      height={400}
      className="h-52 w-full object-contain p-4"
    />
  </div>

  <div className="min-w-[320px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
    <Image
      src="/images/safety.webp"
      alt="Safety Equipment"
      width={500}
      height={400}
      className="h-52 w-full object-contain p-4"
    />
  </div>

  <div className="min-w-[320px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
    <Image
      src="/images/shoe1.jpeg"
      alt="Safety Shoes"
      width={500}
      height={400}
      className="h-52 w-full object-contain p-4"
    />
  </div>

</div>

<div className="mt-10 text-center">
  <a
  href="https://drive.google.com/drive/folders/1rPIfDiS_4OS-crarHScVWdAmTjpEYf37?usp=sharing"
  target="_blank"
  rel="noreferrer"
className="inline-flex rounded-md bg-[#d71920] px-6 py-3 font-bold text-white"
  >
    View Complete Product Catalogue
  </a>
</div>
  </div>
</section>

      <section className="py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Products" title="Equipment for complete fire readiness" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm" key={product.title}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-100">
                  <Image src={product.image} alt={product.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <h2 className="mt-5 text-xl font-black text-[#101114]">{product.title}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{product.description}</p>
                <a className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md bg-[#d71920] px-4 py-3 font-bold text-white" href={whatsappUrl(`Hello Arshone Fire Safety, please share a quote for ${product.title}.`)} target="_blank" rel="noreferrer">
                  <MessageSquareQuote aria-hidden size={18} />
                  Request Quote
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
