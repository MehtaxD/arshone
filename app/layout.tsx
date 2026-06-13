import type { Metadata } from "next";
import "./globals.css";
import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd, localBusinessSchema } from "@/components/schema";
import { site } from "@/lib/site-data";
import { ScrollTop } from "@/components/scroll-top";

export const metadata: Metadata = {
metadataBase: new URL(site.domain),
title: {
default: "Arshone Fire Safety | Fire Safety Company in Surat, Gujarat",
template: "%s | Arshone Fire Safety"
},
description: site.description,
openGraph: {
title: "Arshone Fire Safety",
description: site.description,
url: site.domain,
siteName: site.shortName,
images: [
{
url: "/images/project-industrial.webp",
width: 1200,
height: 600
}
],
locale: "en_IN",
type: "website"
},
alternates: {
canonical: site.domain
},
robots: {
index: true,
follow: true
},
icons: {
icon: "/favicon.png"
}
};

export default function RootLayout({
children
}: Readonly<{ children: React.ReactNode }>) {
return ( <html lang="en-IN"> <body> <ScrollTop /> <JsonLd data={localBusinessSchema()} /> <Header />
{children} <Footer /> <FloatingActions /> </body> </html>
);
}
