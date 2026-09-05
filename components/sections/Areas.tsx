import { MapPin, Navigation } from "lucide-react";
import { business } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

// Rough relative placement of each town for the stylised coverage map.
const pins = [
  { name: "Ferndown", x: 46, y: 54, base: true },
  { name: "Wimborne", x: 20, y: 40 },
  { name: "Broadstone", x: 32, y: 76 },
  { name: "Ringwood", x: 80, y: 34 },
];

export default function Areas() {
  return (
    <section id="areas" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Areas We Cover"
            title="Mobile Valeting Across East Dorset"
            subtitle="Based in Ferndown, we bring professional mobile valeting directly to homes and workplaces across the surrounding area."
          />

          <Reveal delay={0.14}>
            <ul className="mt-10 grid grid-cols-2 gap-3">
              {business.areas.map((a) => (
                <li
                  key={a}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-ink-850 px-4 py-4 transition-colors hover:border-accent/40"
                >
                  <MapPin size={17} className="shrink-0 text-accent-soft" aria-hidden="true" />
                  <span className="font-display text-[16px] font-bold uppercase tracking-wide text-white">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-steel-500">
                Also covering
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-steel-400">
                {business.nearby.join(" · ")} — and the surrounding villages. Just outside? Give us a ring, we&apos;ll
                usually still come to you.
              </p>
              <a href={business.phoneHref} className="btn-ghost mt-8">
                <Navigation size={16} aria-hidden="true" />
                Check Your Postcode — {business.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-ink-900 noise sm:aspect-[4/3] lg:aspect-square">
            {/* Stylised coverage map */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(50% 50% at 46% 54%, rgba(31,155,224,0.28), transparent 62%)" }}
              aria-hidden="true"
            />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="46" cy="54" r="34" fill="none" stroke="rgba(31,155,224,0.35)" strokeWidth="0.3" strokeDasharray="2 2" />
              <circle cx="46" cy="54" r="24" fill="none" stroke="rgba(31,155,224,0.25)" strokeWidth="0.3" strokeDasharray="2 2" />
              {pins
                .filter((p) => !p.base)
                .map((p) => (
                  <line
                    key={p.name}
                    x1="46"
                    y1="54"
                    x2={p.x}
                    y2={p.y}
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="0.3"
                  />
                ))}
            </svg>

            {pins.map((p) => (
              <div
                key={p.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span className="relative flex items-center justify-center">
                  {p.base && (
                    <span className="absolute h-9 w-9 animate-ping rounded-full bg-accent/25" aria-hidden="true" />
                  )}
                  <span
                    className={`relative block rounded-full ring-4 ${
                      p.base ? "h-3.5 w-3.5 bg-white ring-accent/40" : "h-2.5 w-2.5 bg-accent-soft ring-accent/15"
                    }`}
                  />
                </span>
                <span
                  className={`absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap text-[10.5px] font-bold uppercase tracking-[0.16em] ${
                    p.base ? "text-white" : "text-steel-300"
                  }`}
                >
                  {p.name}
                </span>
              </div>
            ))}

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-steel-500">Base</p>
                <p className="font-display text-[20px] font-bold uppercase tracking-wide text-white">
                  Ferndown, Dorset
                </p>
              </div>
              <p className="text-right text-[10.5px] font-semibold uppercase tracking-[0.16em] text-steel-500">
                Mon–Sun
                <br />
                8am – 6pm
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
