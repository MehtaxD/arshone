import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <Link href="/admin/blogs/new" className={cn(buttonVariants({ variant: "default" }), "w-full")}>
          New Blog Post
        </Link>

        <Link href="/admin/blogs" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
          Manage Blog Posts
        </Link>
      </CardContent>
    </Card>
  );
}
