"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import type { Blog } from "@prisma/client";
import { format } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";

import { deleteBlog, togglePublish } from "@/lib/actions/blog";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function BlogTable({ blogs }: { blogs: Blog[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleTogglePublish = (id: string, published: boolean) => {
    startTransition(async () => {
      try {
        await togglePublish(id, published);
        toast.success(published ? "Post published" : "Post unpublished");
        router.refresh();
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Failed to update post");
      }
    });
  };

  const handleDelete = (id: string, title: string) => {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;

    startTransition(async () => {
      try {
        await deleteBlog(id);
        toast.success("Post deleted");
        router.refresh();
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Failed to delete post");
      }
    });
  };

  if (blogs.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-16 text-center text-slate-500">
        No blog posts yet. Click &quot;New Post&quot; to create your first one.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead>Published</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell className="max-w-xs">
                <p className="truncate font-medium">{blog.title}</p>
                <p className="truncate text-xs text-slate-500">/blog/{blog.slug}</p>
              </TableCell>
              <TableCell className="text-slate-600">{blog.category || "—"}</TableCell>
              <TableCell className="text-slate-600">
                {format(new Date(blog.updatedAt), "MMM d, yyyy")}
              </TableCell>
              <TableCell>
                <Switch
                  checked={blog.published}
                  disabled={isPending}
                  onCheckedChange={(checked) => handleTogglePublish(blog.id, checked)}
                />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/admin/blogs/${blog.id}/edit`}
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                  >
                    <Pencil size={14} />
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    disabled={isPending}
                    onClick={() => handleDelete(blog.id, blog.title)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
