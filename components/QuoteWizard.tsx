"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Phone, Send } from "lucide-react";
import {
  conditions,
  packages,
  site,
  vehicleSizes,
  type ConditionKey,
  type SizeKey,
} from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const steps = ["Vehicle", "Job", "Contact"] as const;

export default function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [size, setSize] = useState<SizeKey>("medium");
  const [condition, setCondition] = useState<ConditionKey>("average");
  const [service, setService] = useState(packages[1].name);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [company, setCompany] = useState("");

  const summary = useMemo(
    () => ({
      vehicle: vehicleSizes.find((v) => v.key === size)?.label ?? "",
      condition: conditions.find((c) => c.key === condition)?.label ?? "",
    }),
    [size, condition],
  );

  function validateContact() {
    const errs: Record<string, string> = {};
    if (name.trim().length < 2) errs.name = "Please enter your name.";
    if (postcode.trim().length < 3) errs.postcode = "Please enter your postcode.";
    if (phone.trim().length < 7 && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      errs.phone = "Leave a phone number or a valid email address.";
    }
    if (email.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      errs.email = "That email address does not look right.";
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function submit() {
    if (!validateContact()) return;
    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          postcode,
          vehicle: summary.vehicle,
          condition: summary.condition,
          service,
          message,
          company,
        }),
      });
      const json = (await res.json()) as {
        ok: boolean;
        errors?: Record<string, string>;
        error?: string;
      };

      if (!json.ok) {
        setFieldErrors(json.errors ?? {});
        setServerError(json.error ?? "Please check the highlighted fields.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setServerError("Something went wrong. Please call us instead.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card flex flex-col items-center px-8 py-20 text-center"
      >
        <span className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-forest/25" />
          <CheckCircle2 className="relative h-14 w-14 text-forest" strokeWidth={1.4} />
        </span>
        <h3 className="h2 mt-7 !text-[2rem]">Request received</h3>
        <p className="lede mt-4 max-w-md">
          Thanks {name.split(" ")[0] || "—"}. We will come back with a fixed price, usually
          the same day. If it is urgent, ring{" "}
          <a href={site.phoneHref} className="text-forest underline underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
        <p className="mt-9 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-mute">
          Demo site — no message has actually been sent
        </p>
      </motion.div>
    );
  }

  return (
    <div className="card p-7 sm:p-9">
      {/* progress */}
      <div className="mb-8 flex items-center gap-3">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-extrabold transition ${
                  i <= step ? "bg-forest text-paper" : "border border-ink/15 text-ink-mute"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`hidden text-[11px] font-bold uppercase tracking-[0.16em] sm:block ${
                  i <= step ? "text-ink" : "text-ink-mute"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 ? (
              <span className="h-px flex-1 bg-ink/[0.12]">
                <motion.span
                  className="block h-px bg-forest"
                  initial={false}
                  animate={{ scaleX: i < step ? 1 : 0 }}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.35 }}
                />
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="s0"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-7"
          >
            <div>
              <span className="label">What are we cleaning?</span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {vehicleSizes.map((v) => (
                  <button
                    key={v.key}
                    type="button"
                    onClick={() => setSize(v.key)}
                    className={`chip !flex-col !items-start !gap-0.5 !text-left ${
                      size === v.key ? "chip-active" : ""
                    }`}
                  >
                    <span>{v.label}</span>
                    <span className="text-[11px] font-medium text-ink-mute">
                      {v.example}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="label">What state is it in?</span>
              <div className="grid gap-2 sm:grid-cols-3">
                {conditions.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setCondition(c.key)}
                    className={`chip !flex-col !items-start !gap-0.5 !text-left ${
                      condition === c.key ? "chip-active" : ""
                    }`}
                  >
                    <span>{c.label}</span>
                    <span className="text-[11px] font-medium text-ink-mute">{c.detail}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}

        {step === 1 ? (
          <motion.div
            key="s1"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-7"
          >
            <div>
              <span className="label">Which package?</span>
              <div className="grid gap-2 sm:grid-cols-2">
                {[...packages.map((p) => p.name), "Not sure yet"].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setService(n)}
                    className={`chip ${service === n ? "chip-active" : ""}`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label" htmlFor="message">
                Anything we should know?
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="field resize-none"
                placeholder="Pet hair in the boot, spilled coffee on the back seat, van needs to be ready for Friday…"
              />
            </div>
          </motion.div>
        ) : null}

        {step === 2 ? (
          <motion.div
            key="s2"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <div className="rounded-xl border border-ink/10 bg-paper-dark px-4 py-3 text-[13px] text-ink-soft">
              <span className="font-semibold text-ink">{summary.vehicle}</span> ·{" "}
              {summary.condition} · {service}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="name">
                  Your name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field"
                  placeholder="Jane Smith"
                />
                {fieldErrors.name ? (
                  <p className="mt-1.5 text-xs text-red-600">{fieldErrors.name}</p>
                ) : null}
              </div>
              <div>
                <label className="label" htmlFor="postcode">
                  Postcode
                </label>
                <input
                  id="postcode"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="field"
                  placeholder="SO14"
                />
                {fieldErrors.postcode ? (
                  <p className="mt-1.5 text-xs text-red-600">{fieldErrors.postcode}</p>
                ) : null}
              </div>
              <div>
                <label className="label" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="field"
                  placeholder="07700 900000"
                />
                {fieldErrors.phone ? (
                  <p className="mt-1.5 text-xs text-red-600">{fieldErrors.phone}</p>
                ) : null}
              </div>
              <div>
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field"
                  placeholder="you@example.com"
                />
                {fieldErrors.email ? (
                  <p className="mt-1.5 text-xs text-red-600">{fieldErrors.email}</p>
                ) : null}
              </div>
            </div>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {serverError ? (
              <p className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                {serverError}
              </p>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-7">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="btn-ghost !px-5"
            disabled={status === "sending"}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
            Back
          </button>
        ) : null}

        {step < 2 ? (
          <button type="button" onClick={() => setStep((s) => s + 1)} className="btn-primary ml-auto">
            Continue
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            className="btn-primary ml-auto"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.2} />
                Sending
              </>
            ) : (
              <>
                <Send className="h-4 w-4" strokeWidth={2} />
                Request my quote
              </>
            )}
          </button>
        )}
      </div>

      <p className="mt-5 flex items-center gap-2 text-xs text-ink-mute">
        <Phone className="h-3.5 w-3.5" strokeWidth={2} />
        Prefer to talk?{" "}
        <a href={site.phoneHref} className="font-semibold text-forest underline underline-offset-4">
          {site.phone}
        </a>
      </p>
    </div>
  );
}
