import Script from "next/script";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { ScrollTop } from "@/components/scroll-top";
import { JsonLd, localBusinessSchema } from "@/components/schema";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollTop />

      <JsonLd data={localBusinessSchema()} />

      <Header />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8R8P0HQG09"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8R8P0HQG09');
        `}
      </Script>

      {children}

      <Footer />

      <FloatingActions />
    </>
  );
}