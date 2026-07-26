import Link from "next/link";
import { format } from "date-fns";
import type { Blog } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecentPosts({ posts }: { posts: Blog[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Posts</CardTitle>
      </CardHeader>

      <CardContent>
        {posts.length === 0 ? (
          <div className="rounded-lg border border-dashed p-10 text-center text-slate-500">
            No posts yet.
          </div>
        ) : (
          <div className="divide-y">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/admin/blogs/${post.id}/edit`}
                className="flex items-center justify-between py-3 hover:opacity-70"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium">{post.title}</p>
                  <p className="text-xs text-slate-500">
                    {format(new Date(post.updatedAt), "MMM d, yyyy")}
                  </p>
                </div>
                <span
                  className={`ml-4 shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                    post.published
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {post.published ? "Published" : "Draft"}
                </span>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
