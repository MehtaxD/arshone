import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/products", "/projects", "/industries", "/blog", "/contact"];
  return [
    ...routes.map((route) => ({
      url: `${site.domain}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...services.map((service) => ({
      url: `${site.domain}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9
    }))
  ];
}
