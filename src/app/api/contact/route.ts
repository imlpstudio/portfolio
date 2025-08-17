import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/mailer";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  const rl = rateLimit(ip, 60_000, 5);
  if (!rl.ok) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  const json = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { website, ...payload } = parsed.data;
  if (website) return NextResponse.json({ ok: true }); // honeypot

  try {
    await sendContactEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
