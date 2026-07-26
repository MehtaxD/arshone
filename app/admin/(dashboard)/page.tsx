import { getBlogs } from "@/lib/actions/blog";
import Dashboard from "@/components/admin/dashboard/dashboard";

export default async function DashboardPage() {
  const blogs = await getBlogs();
  return <Dashboard blogs={blogs} />;
}
