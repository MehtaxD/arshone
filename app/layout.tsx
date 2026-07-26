import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site-data";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Arshone Fire Safety | Fire Safety Company in Surat, Gujarat",
    template: "%s | Arshone Fire Safety",
  },
  description: site.description,
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}