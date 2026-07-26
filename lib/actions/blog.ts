"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { BlogSchema } from "@/lib/validators/blog";

export async function getBlogs() {
  return prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getBlogById(id: string) {
  return prisma.blog.findUnique({ where: { id } });
}

export async function getPublishedBlogs() {
  return prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getPublishedBlogBySlug(slug: string) {
  return prisma.blog.findFirst({ where: { slug, published: true } });
}

export async function createBlog(data: unknown) {
  const values = BlogSchema.parse(data);

  const existing = await prisma.blog.findUnique({
    where: { slug: values.slug },
  });

  if (existing) {
    throw new Error(
      "A blog post with this slug already exists. Please choose a different slug."
    );
  }

  const blog = await prisma.blog.create({ data: values });

  revalidatePath("/admin/blogs");
  revalidatePath("/admin");
  revalidatePath("/blog");

  return blog;
}

export async function updateBlog(id: string, data: unknown) {
  const values = BlogSchema.parse(data);

  const existing = await prisma.blog.findFirst({
    where: { slug: values.slug, NOT: { id } },
  });

  if (existing) {
    throw new Error(
      "A blog post with this slug already exists. Please choose a different slug."
    );
  }

  const blog = await prisma.blog.update({
    where: { id },
    data: values,
  });

  revalidatePath("/admin/blogs");
  revalidatePath("/admin");
  revalidatePath("/blog");
  revalidatePath(`/blog/${values.slug}`);

  return blog;
}

export async function deleteBlog(id: string) {
  const blog = await prisma.blog.delete({ where: { id } });

  revalidatePath("/admin/blogs");
  revalidatePath("/admin");
  revalidatePath("/blog");

  return blog;
}

export async function togglePublish(id: string, published: boolean) {
  const blog = await prisma.blog.update({
    where: { id },
    data: { published },
  });

  revalidatePath("/admin/blogs");
  revalidatePath("/admin");
  revalidatePath("/blog");

  return blog;
}
