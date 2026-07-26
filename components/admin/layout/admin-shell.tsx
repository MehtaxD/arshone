"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return (
      <>
        {children}
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}
