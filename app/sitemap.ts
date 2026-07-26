import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site-data";
import { getPublishedBlogs } from "@/lib/actions/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  const posts = await getPublishedBlogs();

  return [
    ...routes.map((route) => ({
      url: `${site.domain}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),

    ...services.map((service) => ({
      url: `${site.domain}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    ...posts.map((post: Awaited<ReturnType<typeof getPublishedBlogs>>[number]) => ({
      url: `${site.domain}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}