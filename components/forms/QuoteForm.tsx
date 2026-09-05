"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ImagePlus, Loader2, Phone, X } from "lucide-react";
import { business, services, vehicleSizes } from "@/lib/config";

type Status = "idle" | "sending" | "success" | "error";

const MAX_FILES = 3;
const MAX_TOTAL = 4.5 * 1024 * 1024;

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);

  function onFiles(list: FileList | null) {
    if (!list) return;
    const next = [...files, ...Array.from(list)].slice(0, MAX_FILES);
    const total = next.reduce((n, f) => n + f.size, 0);
    if (total > MAX_TOTAL) {
      setError("Those photos are a bit large — please keep them under 4MB in total.");
      return;
    }
    setError("");
    setFiles(next);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    setFieldErrors({});

    const fd = new FormData(e.currentTarget);
    fd.delete("photos");
    files.forEach((f) => fd.append("photos", f));

    try {
      const res = await fetch("/api/quote", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setFieldErrors(json.fieldErrors || {});
        setError(json.error || "Something went wrong. Please call us instead.");
        setStatus("error");
        return;
      }
      setStatus("success");
      formRef.current?.reset();
      setFiles([]);
    } catch {
      setError(`We couldn't send that. Please call us on ${business.phone}.`);
      setStatus("error");
    }
  }

  const err = (k: string) =>
    fieldErrors[k] ? (
      <p className="mt-1.5 text-[12.5px] text-red-400" role="alert">
        {fieldErrors[k]}
      </p>
    ) : null;

  return (
    <div className="card-surface p-6 sm:p-9">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-10 text-center"
          >
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent-soft">
              <CheckCircle2 size={30} aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-[26px] font-bold uppercase tracking-tight text-white">
              Request Received
            </h3>
            <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-steel-400">
              Thanks — we&apos;ve got your details and we&apos;ll come back to you with a price shortly. If it&apos;s
              urgent, give us a ring and we&apos;ll sort it now.
            </p>
            <a href={business.phoneHref} className="btn-primary mt-8">
              <Phone size={16} aria-hidden="true" /> Call {business.phone}
            </a>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 block w-full text-[12px] font-semibold uppercase tracking-[0.16em] text-steel-500 hover:text-white"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-5"
          >
            <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="company">Company (leave blank)</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="name">
                  Name *
                </label>
                <input id="name" name="name" required autoComplete="name" className="field" placeholder="Your name" />
                {err("name")}
              </div>
              <div>
                <label className="label" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  className="field"
                  placeholder="07…"
                />
                {err("phone")}
              </div>
            </div>

            <div>
              <label className="label" htmlFor="email">
                Email <span className="normal-case tracking-normal text-steel-600">(optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                className="field"
                placeholder="you@email.com"
              />
              {err("email")}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="vehicle">
                  Vehicle Make &amp; Model
                </label>
                <input id="vehicle" name="vehicle" className="field" placeholder="e.g. Ford Transit Custom" />
              </div>
              <div>
                <label className="label" htmlFor="vehicleSize">
                  Vehicle Size
                </label>
                <select id="vehicleSize" name="vehicleSize" className="field" defaultValue="">
                  <option value="">Select size</option>
                  {vehicleSizes.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="label" htmlFor="service">
                Service Required *
              </label>
              <select id="service" name="service" required className="field" defaultValue="">
                <option value="">Choose a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title} — {s.price}
                    {s.priceNote ? ` ${s.priceNote}` : ""}
                  </option>
                ))}
                <option value="Not sure — please advise">Not sure — please advise</option>
              </select>
              {err("service")}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="location">
                  Location *
                </label>
                <input
                  id="location"
                  name="location"
                  required
                  className="field"
                  placeholder="Town or postcode"
                  autoComplete="postal-code"
                />
                {err("location")}
              </div>
              <div>
                <label className="label" htmlFor="preferredDate">
                  Preferred Date
                </label>
                <input id="preferredDate" name="preferredDate" type="date" className="field" />
              </div>
            </div>

            <div>
              <label className="label" htmlFor="message">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="field resize-y"
                placeholder="Anything we should know — pet hair, spillages, how long since the last clean, access to water…"
              />
            </div>

            <div>
              <span className="label">
                Vehicle Photos <span className="normal-case tracking-normal text-steel-600">(optional)</span>
              </span>
              <input
                ref={fileRef}
                id="photos"
                name="photos"
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(e) => onFiles(e.target.files)}
              />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-dashed border-white/20 bg-ink-900/60 px-4 py-5 text-[13.5px] font-semibold text-steel-300 transition-colors hover:border-accent/50 hover:text-white"
              >
                <ImagePlus size={18} aria-hidden="true" />
                {files.length ? `${files.length} photo${files.length > 1 ? "s" : ""} added` : "Add up to 3 photos"}
              </button>
              {files.length > 0 && (
                <ul className="mt-3 grid gap-2">
                  {files.map((f, i) => (
                    <li
                      key={f.name + i}
                      className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-[13px] text-steel-300"
                    >
                      <span className="truncate">{f.name}</span>
                      <button
                        type="button"
                        onClick={() => setFiles(files.filter((_, n) => n !== i))}
                        aria-label={`Remove ${f.name}`}
                        className="shrink-0 text-steel-500 hover:text-white"
                      >
                        <X size={15} aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {status === "error" && error && (
              <p
                className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3.5 text-[14px] text-red-200"
                role="alert"
              >
                <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                {error}
              </p>
            )}

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" /> Sending…
                </>
              ) : (
                "Request My Quote"
              )}
            </button>

            <p className="text-center text-[12.5px] text-steel-500">
              Prefer to talk?{" "}
              <a href={business.phoneHref} className="font-semibold text-white underline-offset-4 hover:underline">
                Call {business.phone}
              </a>{" "}
              — {business.hours}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
