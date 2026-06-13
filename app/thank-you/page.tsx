import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="container-shell py-16">
      <div className="mx-auto max-w-2xl rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
        <Image
          src="/images/logo.png"
          alt="Arshone Fire Safety"
          width={140}
          height={140}
          className="mx-auto"
          priority
        />

        <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
          ✓
        </div>

        <h1 className="mt-6 text-4xl font-black text-[#111]">
          Thank You!
        </h1>

        <p className="mt-4 text-lg text-neutral-600">
          Your enquiry has been submitted successfully.
        </p>

        <p className="mt-3 text-neutral-500">
          Our team has received your request and will contact you shortly.
        </p>

        <div className="mt-8 rounded-lg bg-neutral-50 p-5 text-left">
          <h2 className="font-black text-[#111]">
            Need Immediate Assistance?
          </h2>

          <p className="mt-3 text-neutral-700">
            📞 +91 9173173919
          </p>

          <p className="mt-2 text-neutral-700">
            📍 UG-15, Raj Dream Complex,
            <br />
            Second VIP Road, Near Kalamandir,
            <br />
            Althan, Surat, Gujarat 395017
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="tel:+919173173919"
            className="rounded-md bg-[#d71920] px-6 py-3 font-bold text-white"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919173173919"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-green-500 px-6 py-3 font-bold text-green-600"
          >
            WhatsApp
          </a>

          <a
            href="https://maps.google.com/?q=ARSHONE+FIRE+SAFETY+PVT+LTD"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-300 px-6 py-3 font-bold text-[#111]"
          >
            Get Directions
          </a>
        </div>

        <Link
          href="/"
          className="mt-6 inline-block text-sm font-bold text-[#d71920]"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}