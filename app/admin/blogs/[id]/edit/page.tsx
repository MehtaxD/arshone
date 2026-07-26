import { notFound } from "next/navigation";
import { getBlogById } from "@/lib/actions/blog";
import BlogForm from "@/components/admin/forms/blog-form";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl">
      <BlogForm blog={blog} />
    </div>
  );
}
