import { z } from "zod";

export const BlogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters")
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers and hyphens"),

  seoTitle: z.string().optional().default(""),
  metaDescription: z.string().optional().default(""),

  excerpt: z.string().optional().default(""),

  content: z.string().default(""),

  featuredImage: z.string().optional().default(""),
  imageAlt: z.string().optional().default(""),

  category: z.string().optional().default(""),
  tags: z.string().optional().default(""),

  author: z.string().optional().default(""),

  featured: z.boolean().default(false),
  published: z.boolean().default(false),
});

export type BlogFormData = z.input<typeof BlogSchema>;
export type BlogFormOutput = z.output<typeof BlogSchema>;
