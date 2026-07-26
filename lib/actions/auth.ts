"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionToken, SESSION_COOKIE_NAME } from "@/lib/auth";

export async function login(
  _prevState: { error?: string } | undefined,
  formData: FormData
) {
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

 const adminPassword = "arshidip@9999@1111";

  console.log("==================================");
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("ENV PASSWORD:", JSON.stringify(adminPassword));
  console.log("USER PASSWORD:", JSON.stringify(password));
  console.log("MATCH:", password === adminPassword);
  console.log("==================================");

  if (!adminPassword) {
    return {
      error: "ADMIN_PASSWORD is not set on the server.",
    };
  }

  if (password !== adminPassword) {
    return {
      error: "Incorrect password. Please try again.",
    };
  }

  const token = await createSessionToken();
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect(next.startsWith("/admin") ? next : "/admin");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/admin/login");
}