"use client";

import { Send } from "lucide-react";
import { services } from "@/lib/site-data";

type ContactFormProps = {
  title?: string;
  service?: string;
};

export function ContactForm({
  title = "Request a Callback",
  service
}: ContactFormProps) {
  return (
    <form
      className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm"
      action="https://formsubmit.co/info@arshone.com"
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Enquiry - Arshone Fire Safety"
      />

      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <input
        type="hidden"
        name="_template"
        value="table"
      />
    <input
  type="hidden"
  name="_next"
  value="https://arshone.com/thank-you"
    />
      <h3 className="text-xl font-black text-[#101114]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-neutral-600">
        Share your requirement and our team will contact you for inspection,
        quotation or consultancy.
      </p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-neutral-800">
          Name
          <input
            className="focus-ring rounded-md border border-neutral-300 px-3 py-3 font-normal"
            name="Name"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-neutral-800">
          Mobile Number
          <input
            className="focus-ring rounded-md border border-neutral-300 px-3 py-3 font-normal"
            name="Mobile"
            type="tel"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-neutral-800">
          Email
          <input
            className="focus-ring rounded-md border border-neutral-300 px-3 py-3 font-normal"
            name="Email"
            type="email"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-neutral-800">
          Company Name
          <input
            className="focus-ring rounded-md border border-neutral-300 px-3 py-3 font-normal"
            name="Company"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-neutral-800">
          Service Required
          <select
            className="focus-ring rounded-md border border-neutral-300 px-3 py-3 font-normal"
            name="Service"
            defaultValue={service || ""}
          >
            <option value="">Select service</option>

            {services.map((item) => (
              <option key={item.slug} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-bold text-neutral-800">
          Message
          <textarea
            className="focus-ring min-h-28 rounded-md border border-neutral-300 px-3 py-3 font-normal"
            name="Message"
          />
        </label>
      </div>

      <button
        className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#d71920] px-5 py-3.5 font-bold text-white transition hover:bg-[#b9141a]"
        type="submit"
      >
        <Send aria-hidden size={18} />
        Send Enquiry
      </button>
    </form>
  );
}