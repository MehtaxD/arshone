import Link from "next/link";
import { Plus } from "lucide-react";
import { getBlogs } from "@/lib/actions/blog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BlogTable from "@/components/admin/blogs/blog-table";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <p className="text-slate-500">
            {blogs.length} total post{blogs.length === 1 ? "" : "s"}
          </p>
        </div>

        <Link href="/admin/blogs/new" className={cn(buttonVariants({ variant: "default" }))}>
          <Plus size={16} />
          New Post
        </Link>
      </div>

      <BlogTable blogs={blogs} />
    </div>
  );
}
