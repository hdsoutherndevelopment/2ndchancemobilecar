import { Check, ArrowRight } from "lucide-react";
import { packages } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-28 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Packages"
          title="Clear pricing, fixed before we start"
          lede="Guide prices for a standard family car. Larger, dirtier or long-neglected vehicles are quoted individually — always before any work begins."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  pkg.featured
                    ? "border-forest bg-forest text-paper shadow-lift"
                    : "card card-hover"
                }`}
              >
                {pkg.featured ? (
                  <span className="absolute -top-3 left-8 rounded-md bg-copper px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-paper">
                    Most booked
                  </span>
                ) : null}

                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className={`font-display text-[28px] leading-tight tracking-tight ${
                      pkg.featured ? "text-paper" : "text-ink"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <span
                    className={`index-num ${pkg.featured ? "!text-copper-400" : ""}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className={`mt-3 text-[14px] leading-relaxed ${
                    pkg.featured ? "text-paper/75" : "text-ink-soft"
                  }`}
                >
                  {pkg.summary}
                </p>

                <div
                  className={`mt-7 flex flex-col items-start gap-1.5 border-y py-5 ${
                    pkg.featured ? "border-paper/20" : "border-ink/10"
                  }`}
                >
                  <span
                    className={`whitespace-nowrap font-display text-[44px] leading-none tracking-tightest ${
                      pkg.featured ? "text-paper" : "text-ink"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-[12px] font-semibold uppercase tracking-wider ${
                      pkg.featured ? "text-paper/60" : "text-ink-mute"
                    }`}
                  >
                    {pkg.duration}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-[13.5px] ${
                        pkg.featured ? "text-paper/85" : "text-ink-soft"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          pkg.featured ? "text-copper-400" : "text-forest"
                        }`}
                        strokeWidth={2.4}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className={`mt-8 w-full ${pkg.featured ? "btn-copper" : "btn-ghost"}`}
                >
                  Book {pkg.name}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-[13px] text-ink-mute">
            Vans, 4x4s and 7-seaters are priced on size and condition —{" "}
            <a href="#estimate" className="font-semibold text-forest underline underline-offset-4">
              try the estimator
            </a>{" "}
            for a ballpark before you call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
