import { serviceAreas, site } from "@/lib/site-data";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "IN"
    },
    areaServed: serviceAreas,
    serviceArea: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Gujarat`
    })),
    priceRange: "$$",
    description: site.description
  };
}
