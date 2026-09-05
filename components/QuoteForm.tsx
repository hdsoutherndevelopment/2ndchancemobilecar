"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Phone, Send } from "lucide-react";
import { packages, site, vehicleTypes } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors({});

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as {
        ok: boolean;
        demo?: boolean;
        errors?: Record<string, string>;
        error?: string;
      };

      if (!json.ok) {
        setErrors(json.errors ?? {});
        setMessage(json.error ?? "Please check the highlighted fields.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setMessage("Something went wrong. Please call us instead.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card flex flex-col items-center px-8 py-16 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-aqua" strokeWidth={1.5} />
        <h3 className="h2 mt-6">Request received</h3>
        <p className="lede mt-4 max-w-md">
          Thanks — we will come back to you with a fixed price, usually the same day. If it is
          urgent, give us a ring on{" "}
          <a href={site.phoneHref} className="text-aqua hover:underline">
            {site.phone}
          </a>
          .
        </p>
        <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-chrome-muted">
          Demo site — no message has actually been sent
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-7 sm:p-9" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Your name
          </label>
          <input id="name" name="name" className="field" placeholder="Jane Smith" required />
          {errors.name ? <p className="mt-1.5 text-xs text-red-400">{errors.name}</p> : null}
        </div>

        <div>
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="field"
            placeholder="07700 900000"
          />
          {errors.phone ? <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p> : null}
        </div>

        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="field"
            placeholder="you@example.com"
          />
          {errors.email ? <p className="mt-1.5 text-xs text-red-400">{errors.email}</p> : null}
        </div>

        <div>
          <label className="label" htmlFor="postcode">
            Postcode
          </label>
          <input id="postcode" name="postcode" className="field" placeholder="SO14" required />
          {errors.postcode ? (
            <p className="mt-1.5 text-xs text-red-400">{errors.postcode}</p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="vehicle">
            Vehicle
          </label>
          <select id="vehicle" name="vehicle" className="field" defaultValue={vehicleTypes[1]}>
            {vehicleTypes.map((v) => (
              <option key={v} value={v} className="bg-ink-800">
                {v}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label" htmlFor="service">
            Interested in
          </label>
          <select id="service" name="service" className="field" defaultValue={packages[1].name}>
            {packages.map((p) => (
              <option key={p.name} value={p.name} className="bg-ink-800">
                {p.name}
              </option>
            ))}
            <option value="Not sure yet" className="bg-ink-800">
              Not sure yet
            </option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="label" htmlFor="message">
          Anything we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="field resize-none"
          placeholder="Pet hair in the boot, spilled coffee on the back seat, van needs to be ready for Friday…"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && message ? (
        <p className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {message}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
              Sending
            </>
          ) : (
            <>
              <Send className="h-4 w-4" strokeWidth={1.9} />
              Request my quote
            </>
          )}
        </button>
        <a href={site.phoneHref} className="btn-ghost">
          <Phone className="h-4 w-4" strokeWidth={1.8} />
          Or call {site.phone}
        </a>
      </div>

      <p className="mt-5 text-xs text-chrome-muted">
        We only use your details to reply to this enquiry.
      </p>
    </form>
  );
}
