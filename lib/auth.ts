export const SESSION_COOKIE_NAME = "arshone_admin_session";
const SESSION_VALUE = "authenticated";

function getSecret() {
  return process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD || "insecure-dev-secret-change-me";
}

async function sign(value: string): Promise<string> {
  const secret = getSecret();
  const enc = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signatureBuffer = await crypto.subtle.sign("HMAC", key, enc.encode(value));

  return Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(): Promise<string> {
  const signature = await sign(SESSION_VALUE);
  return `${SESSION_VALUE}.${signature}`;
}

export async function isValidSessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;

  const [value, signature] = token.split(".");
  if (!value || !signature) return false;

  const expected = await sign(value);
  return value === SESSION_VALUE && signature === expected;
}
