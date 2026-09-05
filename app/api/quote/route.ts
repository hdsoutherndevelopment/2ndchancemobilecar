import { NextResponse } from "next/server";

export const runtime = "nodejs";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  postcode?: string;
  vehicle?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot
};

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept so bots do not learn anything useful.
  if (clean(payload.company)) {
    return NextResponse.json({ ok: true, demo: true });
  }

  const name = clean(payload.name, 120);
  const phone = clean(payload.phone, 40);
  const email = clean(payload.email, 160);
  const postcode = clean(payload.postcode, 20);
  const vehicle = clean(payload.vehicle, 80);
  const service = clean(payload.service, 120);
  const message = clean(payload.message, 2000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (phone.length < 7 && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errors.phone = "Please leave a phone number or a valid email address.";
  }
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errors.email = "That email address does not look right.";
  }
  if (postcode.length < 3) errors.postcode = "Please enter your postcode.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;

  // Demo mode: no email provider configured, so nothing is sent anywhere.
  if (!apiKey || !to || !from) {
    return NextResponse.json({ ok: true, demo: true });
  }

  const lines = [
    `Name: ${name}`,
    `Phone: ${phone || "—"}`,
    `Email: ${email || "—"}`,
    `Postcode: ${postcode}`,
    `Vehicle: ${vehicle || "—"}`,
    `Interested in: ${service || "—"}`,
    "",
    message || "(no additional details)",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email || undefined,
        subject: `Quote request — ${name} (${postcode})`,
        text: lines,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "We could not send that just now. Please call us instead." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "We could not send that just now. Please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, demo: false });
}
