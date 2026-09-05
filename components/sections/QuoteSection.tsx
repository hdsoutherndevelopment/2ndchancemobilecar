import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { business } from "@/lib/config";
import QuoteForm from "@/components/forms/QuoteForm";
import Reveal from "@/components/ui/Reveal";
import Stars from "@/components/ui/Stars";

export default function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-20 border-t border-white/10 bg-ink-950 py-24 sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent/70" aria-hidden="true" />
              Get a Quote
            </span>
            <h2 className="h-display mt-5 text-[clamp(2rem,5vw,3.4rem)]">Tell Us About Your Vehicle.</h2>
            <p className="mt-6 text-[16.5px] leading-relaxed text-steel-400">
              Fill this in and we&apos;ll come back with a straight price. The more you tell us — and a photo or two —
              the more accurate it&apos;ll be.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-10 grid gap-4">
              <li>
                <a
                  href={business.phoneHref}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-ink-850 p-5 transition-colors hover:border-accent/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/12 text-accent-soft">
                    <Phone size={19} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-500">
                      Call us direct
                    </span>
                    <span className="mt-1 block font-display text-[22px] font-bold tracking-wide text-white group-hover:text-accent-soft">
                      {business.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-white/10 bg-ink-850 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/[0.05] text-steel-300">
                  <Clock size={19} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-500">
                    Opening hours
                  </span>
                  <span className="mt-1 block text-[15.5px] font-semibold text-white">Monday – Sunday, 8am – 6pm</span>
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-white/10 bg-ink-850 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/[0.05] text-steel-300">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-500">
                    Covering
                  </span>
                  <span className="mt-1 block text-[15.5px] font-semibold text-white">
                    {business.areas.join(" · ")}
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/8 pt-7">
              <span className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-steel-400">
                <ShieldCheck size={16} className="text-accent-soft" aria-hidden="true" /> Fully insured
              </span>
              <span className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-steel-400">
                <Stars size={13} /> 5.0 rated
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
