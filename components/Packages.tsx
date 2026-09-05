import { Check, ArrowRight, Clock } from "lucide-react";
import { packages } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-24 border-y border-white/[0.06] bg-ink-900/60 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Packages"
          title="Clear pricing, fixed before we start"
          lede="Prices are guides based on a standard family car. Larger, dirtier or long-neglected vehicles are quoted individually — always before any work begins."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08} className="h-full">
              <article
                className={`card relative flex h-full flex-col p-7 ${
                  pkg.featured ? "border-aqua/35 bg-aqua/[0.04] shadow-glow" : ""
                }`}
              >
                {pkg.featured ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-aqua px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
                    Most booked
                  </span>
                ) : null}

                <h3 className="font-display text-xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-chrome-muted">{pkg.summary}</p>

                <div className="mt-6 flex items-end gap-3">
                  <span className="font-display text-3xl font-extrabold text-white">
                    {pkg.price}
                  </span>
                </div>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-chrome-muted">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {pkg.duration}
                </span>

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/[0.06] pt-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-chrome">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={2.2} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className={`mt-7 w-full ${pkg.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  Book {pkg.name}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-chrome-muted">
            Vans, 4x4s and 7-seaters are priced on size and condition. Ask for a fixed quote
            before booking.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
