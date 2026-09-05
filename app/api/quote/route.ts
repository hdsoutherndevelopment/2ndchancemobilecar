import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { getSupabase } from "@/lib/supabase";
import { getResend } from "@/lib/resend";
import { business } from "@/lib/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILES = 3;
const MAX_TOTAL_BYTES = 4.5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

// Simple in-memory rate limit. Good enough for a single-region deployment;
// swap for Upstash/Vercel KV if traffic grows.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_HITS;
}

function esc(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please call us on " + business.phone + "." },
      { status: 429 }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  const raw = {
    name: String(form.get("name") ?? ""),
    phone: String(form.get("phone") ?? ""),
    email: String(form.get("email") ?? ""),
    vehicle: String(form.get("vehicle") ?? ""),
    vehicleSize: String(form.get("vehicleSize") ?? ""),
    service: String(form.get("service") ?? ""),
    location: String(form.get("location") ?? ""),
    preferredDate: String(form.get("preferredDate") ?? ""),
    message: String(form.get("message") ?? ""),
    company: String(form.get("company") ?? ""),
  };

  const parsed = quoteSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    // Honeypot tripped — pretend nothing happened, but never record it.
    if (fieldErrors.company) {
      return NextResponse.json({ ok: false, error: "Submission rejected." }, { status: 400 });
    }
    return NextResponse.json({ ok: false, fieldErrors, error: "Please check the highlighted fields." }, { status: 422 });
  }

  const data = parsed.data;

  // ---- Attachments -------------------------------------------------------
  const attachments: { filename: string; content: string }[] = [];
  let total = 0;
  const files = form.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
  for (const file of files.slice(0, MAX_FILES)) {
    if (!ALLOWED_TYPES.includes(file.type)) continue;
    total += file.size;
    if (total > MAX_TOTAL_BYTES) break;
    const buf = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name.replace(/[^\w.\-]/g, "_"), content: buf.toString("base64") });
  }

  const submittedAt = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });
  let stored = false;
  let emailed = false;

  // ---- Persist -----------------------------------------------------------
  const supabase = getSupabase();
  if (supabase) {
    const { error } = await supabase.from("enquiries").insert({
      name: data.name,
      email: data.email || null,
      phone: data.phone,
      service: data.service,
      message:
        [
          data.message,
          data.vehicle && `Vehicle: ${data.vehicle}`,
          data.vehicleSize && `Size: ${data.vehicleSize}`,
          data.location && `Location: ${data.location}`,
          data.preferredDate && `Preferred date: ${data.preferredDate}`,
          attachments.length ? `${attachments.length} photo(s) attached to the email` : "",
        ]
          .filter(Boolean)
          .join("\n") || null,
      source: "website-quote-form",
      status: "new",
    });
    if (!error) stored = true;
    else console.error("[quote] supabase insert failed:", error.message);
  }

  // ---- Notify ------------------------------------------------------------
  const resend = getResend();
  const to = process.env.BUSINESS_EMAIL;
  const from = process.env.RESEND_FROM || "2nd Chance Website <onboarding@resend.dev>";

  if (resend && to) {
    const rows: [string, string][] = [
      ["Name", data.name],
      ["Phone", data.phone],
      ["Email", data.email || "—"],
      ["Vehicle", data.vehicle || "—"],
      ["Vehicle size", data.vehicleSize || "—"],
      ["Service required", data.service],
      ["Location", data.location],
      ["Preferred date", data.preferredDate || "As soon as possible"],
      ["Photos", attachments.length ? `${attachments.length} attached` : "None"],
      ["Submitted", submittedAt],
    ];

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#0b0d11;padding:28px;color:#e8ecf1">
        <h2 style="margin:0 0 4px;color:#fff;font-size:20px">New quote request — ${esc(business.legalName)}</h2>
        <p style="margin:0 0 20px;color:#93a0af;font-size:13px">Sent from the website quote form</p>
        <table style="border-collapse:collapse;width:100%;max-width:560px;background:#12161c;border-radius:10px;overflow:hidden">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:11px 14px;border-bottom:1px solid #1e242e;color:#8f98a5;font-size:12px;text-transform:uppercase;letter-spacing:.08em;width:150px">${esc(
                  k
                )}</td><td style="padding:11px 14px;border-bottom:1px solid #1e242e;color:#fff;font-size:14px">${esc(v)}</td></tr>`
            )
            .join("")}
        </table>
        ${
          data.message
            ? `<p style="margin:20px 0 6px;color:#8f98a5;font-size:12px;text-transform:uppercase;letter-spacing:.08em">Additional information</p>
               <p style="margin:0;color:#fff;font-size:14px;white-space:pre-wrap">${esc(data.message)}</p>`
            : ""
        }
        <p style="margin:24px 0 0"><a href="tel:${data.phone.replace(/\s/g, "")}" style="background:#fff;color:#0b0d11;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:bold;font-size:13px">Call ${esc(
      data.name
    )} back</a></p>
      </div>`;

    try {
      const res = await resend.emails.send({
        from,
        to: [to],
        replyTo: data.email || undefined,
        subject: `Quote request — ${data.service} — ${data.name} (${data.location})`,
        html,
        attachments: attachments.length ? attachments : undefined,
      });
      if (!res.error) emailed = true;
      else console.error("[quote] resend failed:", res.error);
    } catch (err) {
      console.error("[quote] resend threw:", err);
    }

    // Customer confirmation (best effort, never blocks the response)
    if (emailed && data.email) {
      try {
        await resend.emails.send({
          from,
          to: [data.email],
          subject: `We've got your request — ${business.legalName}`,
          html: `<div style="font-family:Arial,Helvetica,sans-serif;color:#111;line-height:1.6">
            <p>Hi ${esc(data.name)},</p>
            <p>Thanks for getting in touch with <strong>2nd Chance Mobile Car &amp; Van Valet</strong>. We've received your request for a <strong>${esc(
              data.service
            )}</strong> in ${esc(data.location)} and we'll come back to you with a price shortly.</p>
            <p>If it's urgent, give us a ring on <a href="tel:+447718799720">${esc(business.phone)}</a> — we're around ${esc(
            business.hours
          )}.</p>
            <p>Thanks,<br/>2nd Chance<br/>Ferndown, Dorset</p>
          </div>`,
        });
      } catch (err) {
        console.error("[quote] confirmation email failed:", err);
      }
    }
  }

  if (!stored && !emailed) {
    console.error("[quote] no delivery channel configured (RESEND_API_KEY/BUSINESS_EMAIL or SUPABASE_URL/KEY)");
    return NextResponse.json(
      {
        ok: false,
        error: `We couldn't send that just now. Please call us on ${business.phone} — we'll sort it straight away.`,
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true, stored, emailed });
}
