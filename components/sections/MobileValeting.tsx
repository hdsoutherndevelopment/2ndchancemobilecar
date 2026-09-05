import { Check } from "lucide-react";
import Shot from "@/components/ui/Shot";
import Reveal from "@/components/ui/Reveal";
import { img } from "@/lib/config";

const points = [
  "No waiting around at a car wash",
  "No travelling to a valeting centre",
  "Appointments that fit your day",
  "Professional equipment brought to you",
  "Your vehicle never leaves your driveway",
];

export default function MobileValeting() {
  return (
    <section className="bg-ink-950 py-24 sm:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <Shot
              src={img("1704796141009-5ed5cc8ca5f3", 1200)}
              alt="Mobile valeter hand washing a car on a customer's driveway in Ferndown"
              className="relative aspect-[4/5] rounded-2xl border border-white/10 sm:aspect-[4/3] lg:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-white/12 bg-ink-850/95 p-5 backdrop-blur sm:right-6">
              <p className="font-display text-[34px] font-extrabold leading-none text-white">0</p>
              <p className="mt-1.5 max-w-[9rem] text-[11px] font-semibold uppercase tracking-[0.16em] text-steel-400">
                Trips to the car wash
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent/70" aria-hidden="true" />
              Mobile Valeting
            </span>
            <h2 className="h-display mt-5 text-[clamp(2rem,5vw,3.4rem)]">Why waste your day at a car wash?</h2>
            <p className="mt-6 text-[16.5px] leading-relaxed text-steel-400">
              We bring everything with us. You carry on with your morning, your meeting or your Sunday — and by the
              time we&apos;re packing up, your vehicle looks like it did the day you bought it.
            </p>
            <p className="mt-4 text-[16.5px] leading-relaxed text-steel-400">
              Home, work, the yard — if we can get to it, we can clean it.
            </p>

            <ul className="mt-8 grid gap-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15.5px] text-steel-200">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-soft">
                    <Check size={12} aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <a href="#quote" className="btn-primary mt-10">
              Book a Mobile Valet
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
