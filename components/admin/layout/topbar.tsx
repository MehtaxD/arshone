import { LogOut } from "lucide-react";
import { logout } from "@/lib/actions/auth";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div />

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            A
          </div>

          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-sm text-slate-500">Administrator</p>
          </div>
        </div>

        <form action={logout}>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
          >
            <LogOut size={16} />
            Logout
          </button>
        </form>
      </div>
    </header>
  );
}
