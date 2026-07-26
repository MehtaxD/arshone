import { format } from "date-fns";
import type { Blog } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ActivityFeed({ posts }: { posts: Blog[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity</CardTitle>
      </CardHeader>

      <CardContent>
        {posts.length === 0 ? (
          <p className="text-sm text-slate-500">No activity yet.</p>
        ) : (
          <ul className="space-y-3 text-sm">
            {posts.map((post) => (
              <li key={post.id} className="flex justify-between text-slate-600">
                <span className="truncate">
                  {post.title} was {post.published ? "published" : "last saved as a draft"}
                </span>
                <span className="ml-4 shrink-0 text-slate-400">
                  {format(new Date(post.updatedAt), "MMM d")}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
