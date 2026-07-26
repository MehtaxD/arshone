import LoginForm from "./login-form";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-sm rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-[#101114]">Arshone CMS</h1>
        <p className="mt-1 text-sm text-slate-500">Sign in to manage your blog.</p>

        <LoginForm next={params?.next ?? "/admin"} />
      </div>
    </div>
  );
}
