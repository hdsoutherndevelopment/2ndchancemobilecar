import { Check, ArrowRight, Clock } from "lucide-react";
import { packages } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";
import Reveal from "./Reveal";

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Packages"
          title="Clear pricing, fixed before we start"
          lede="Guide prices for a standard family car. Larger, dirtier or long-neglected vehicles are quoted individually — always before any work begins."
        />

        <StaggerGroup className="mt-16 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.name} className="h-full">
              <article
                className={`panel relative flex h-full flex-col p-8 ${
                  pkg.featured
                    ? "border-aqua/35 bg-aqua/[0.05] shadow-glow"
                    : "panel-hover"
                }`}
              >
                {pkg.featured ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-aqua px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink-950">
                    Most booked
                  </span>
                ) : null}

                <h3 className="font-display text-xl font-extrabold tracking-tight text-white">
                  {pkg.name}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-chrome-muted">
                  {pkg.summary}
                </p>

                <div className="mt-7">
                  <span className="font-display text-4xl font-extrabold tracking-tightest text-white">
                    {pkg.price}
                  </span>
                  <span className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-chrome-muted">
                    <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                    {pkg.duration}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3 border-t border-white/[0.07] pt-7">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[13.5px] text-chrome">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={2.4} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className={`mt-8 w-full ${pkg.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  Book {pkg.name}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </a>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-9 text-center text-xs text-chrome-muted">
            Vans, 4x4s and 7-seaters are priced on size and condition —{" "}
            <a href="#estimate" className="text-aqua hover:underline">
              try the estimator
            </a>{" "}
            for a ballpark before you call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
