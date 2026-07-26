import type { Blog } from "@prisma/client";
import StatsCard from "./stats-card";
import QuickActions from "./quick-actions";
import RecentPosts from "./recent-posts";
import SystemStatus from "./system-status";
import ActivityFeed from "./activity-feed";

export default function Dashboard({ blogs }: { blogs: Blog[] }) {
  const total = blogs.length;
  const published = blogs.filter((b) => b.published).length;
  const drafts = total - published;
  const featured = blogs.filter((b) => b.featured).length;

  const recent = [...blogs]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-500">Welcome back to Arshone CMS</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard label="Total Posts" value={total} />
        <StatsCard label="Published" value={published} />
        <StatsCard label="Drafts" value={drafts} />
        <StatsCard label="Featured" value={featured} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentPosts posts={recent} />
        </div>

        <div className="space-y-6">
          <QuickActions />
          <SystemStatus />
        </div>
      </div>

      <ActivityFeed posts={recent} />
    </div>
  );
}
