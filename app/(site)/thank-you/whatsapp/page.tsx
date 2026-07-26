import { redirect } from "next/navigation";

export default function WhatsAppPage() {
  redirect(
    "https://api.whatsapp.com/send?phone=919173173919&text=Hello%20Arshone%20Fire%20Safety,%20I%20want%20to%20enquire%20about%20fire%20safety%20services."
  );
}