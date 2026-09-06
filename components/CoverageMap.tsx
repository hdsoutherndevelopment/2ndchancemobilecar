"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { mapPins, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function CoverageMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="areas"
      className="scroll-mt-28 border-y border-ink/10 bg-paper-dark py-24 sm:py-32"
    >
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Coverage"
            title={`Covering ${site.baseTown} and the towns around it`}
            lede="We are fully mobile, so we work at homes, offices, car parks and yards across the area. Slightly outside the map? Ask anyway — we will tell you honestly if we can get to you."
          />

          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-wrap gap-2">
              {mapPins.map((pin) => (
                <button
                  key={pin.name}
                  type="button"
                  onMouseEnter={() => setActive(pin.name)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(pin.name)}
                  onBlur={() => setActive(null)}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-[13px] font-semibold transition ${
                    active === pin.name
                      ? "border-forest bg-forest-100 text-forest"
                      : "border-ink/[0.12] bg-paper-card text-ink-soft hover:border-forest/40 hover:text-ink"
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5 text-copper" strokeWidth={2} />
                  {pin.name}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="card grain relative overflow-hidden p-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-paper-dark">
              <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#14452F" stopOpacity="0.30" />
                    <stop offset="100%" stopColor="#14452F" stopOpacity="0.12" />
                  </linearGradient>
                  <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#EFE9DC" />
                    <stop offset="100%" stopColor="#E6DFCF" />
                  </linearGradient>
                </defs>

                <rect width="100" height="75" fill="url(#land)" />

                {/* stylised water: Southampton Water estuary + Solent */}
                <path
                  d="M41 57 L47 56 L58 72 L64 75 L46 75 L38 64 Z"
                  fill="url(#water)"
                />
                <path d="M0 71 L100 63 L100 75 L0 75 Z" fill="url(#water)" opacity="0.55" />
                <path
                  d="M41 58 L46 57 L57 72"
                  fill="none"
                  stroke="#14452F"
                  strokeOpacity="0.35"
                  strokeWidth="0.35"
                />

                {/* road network */}
                <g stroke="#12161A" strokeOpacity="0.16" strokeWidth="0.5" fill="none">
                  <path d="M52 8 L52 34 L46 52" />
                  <path d="M20 30 L44 28 L62 38 L84 60" />
                  <path d="M20 52 L42 52 L56 57 L70 50" />
                  <path d="M42 52 L52 66" />
                  <path d="M62 38 L70 48" />
                </g>

                {/* coverage halo */}
                <circle cx="44" cy="50" r="30" fill="#14452F" fillOpacity="0.05" />
                <circle
                  cx="44"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="#14452F"
                  strokeOpacity="0.30"
                  strokeWidth="0.3"
                  strokeDasharray="1.5 1.5"
                />
              </svg>

              {mapPins.map((pin, i) => {
                const isActive = active === pin.name;
                return (
                  <motion.div
                    key={pin.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.045, duration: 0.4 }}
                  >
                    {pin.primary ? (
                      <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full bg-copper/40" />
                    ) : null}
                    <span
                      className={`relative block rounded-full transition-all duration-300 ${
                        pin.primary
                          ? "h-3 w-3 bg-copper shadow-card"
                          : isActive
                            ? "h-2.5 w-2.5 bg-forest"
                            : "h-2 w-2 bg-ink/35"
                      }`}
                    />
                    <span
                      className={`absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-wider transition ${
                        pin.primary || isActive ? "text-ink" : "text-ink-mute/80"
                      }`}
                    >
                      {pin.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            <p className="px-2 py-3 text-center text-[11px] text-ink-mute">
              Indicative coverage map — not to scale. Travel outside this area by arrangement.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
