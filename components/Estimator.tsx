"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import {
  baseDurations,
  conditions,
  estimatorBases,
  packages,
  vehicleSizes,
  type ConditionKey,
  type SizeKey,
} from "@/lib/site";
import Reveal from "./Reveal";

function round5(n: number) {
  return Math.round(n / 5) * 5;
}

function AnimatedPrice({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 120, damping: 20 });
  const display = useTransform(spring, (v) => `£${Math.round(v)}`);

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default function Estimator() {
  const [pkg, setPkg] = useState(packages[1].name);
  const [size, setSize] = useState<SizeKey>("medium");
  const [condition, setCondition] = useState<ConditionKey>("average");

  const { low, high, timeLabel } = useMemo(() => {
    const base = estimatorBases[pkg] ?? 85;
    const baseHours = baseDurations[pkg] ?? 3;
    const sizeFactor = vehicleSizes.find((v) => v.key === size)?.factor ?? 1;
    const condFactor = conditions.find((c) => c.key === condition)?.factor ?? 1;
    const mid = base * sizeFactor * condFactor;
    const rawHours = baseHours * sizeFactor * (1 + (condFactor - 1) * 0.6);
    const hours = Math.round(rawHours * 2) / 2;
    return {
      low: round5(mid),
      high: round5(mid * 1.2),
      timeLabel:
        hours >= 7 ? "most of a day" : `around ${hours} ${hours === 1 ? "hour" : "hours"}`,
    };
  }, [pkg, size, condition]);

  return (
    <section
      id="estimate"
      className="scroll-mt-28 border-y border-ink/10 bg-paper-dark py-24 sm:py-32"
    >
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div className="lg:col-start-1 lg:row-start-1">
          <Reveal>
            <span className="eyebrow">
              Instant estimate
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h2 mt-5 text-balance">Three taps for a ballpark price</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mt-5 max-w-lg">
              Most valeters make you ring up to find out what it costs. Pick your package,
              vehicle and how bad it is, and see roughly where you land before you speak to
              anyone.
            </p>
          </Reveal>
        </div>

        <div className="sticky top-[90px] z-20 h-fit lg:top-28 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="card grain relative overflow-hidden p-6 sm:p-8">
            <span
              className="absolute inset-x-0 top-0 h-1.5 bg-copper"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink-mute">
                Estimated price
              </span>

              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-6xl leading-none tracking-tightest text-ink sm:text-7xl">
                  <AnimatedPrice value={low} />
                </span>
                <span className="pb-1.5 font-display text-3xl text-ink-mute">
                  – <AnimatedPrice value={high} />
                </span>
              </div>

              <p className="mt-3 text-[13px] font-medium text-ink-soft">
                On site {timeLabel} · {pkg}
              </p>

              <div className="mt-6 hidden space-y-3 border-t border-ink/10 pt-6 text-sm sm:block">
                <div className="flex items-center justify-between">
                  <span className="text-ink-mute">Vehicle</span>
                  <span className="font-semibold text-ink">
                    {vehicleSizes.find((v) => v.key === size)?.label}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-mute">Condition</span>
                  <span className="font-semibold text-ink">
                    {conditions.find((c) => c.key === condition)?.label}
                  </span>
                </div>
              </div>

              <a href="#quote" className="btn-primary mt-6 w-full">
                Lock in a fixed price
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </a>

              <p className="mt-5 hidden items-start gap-2 text-[11.5px] leading-relaxed text-ink-mute sm:flex">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper" strokeWidth={2} />
                A guide only. We confirm a fixed price once we have seen photos or the
                vehicle itself — and never change it halfway through.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:col-start-1 lg:row-start-2">
          <Reveal delay={0.16}>
            <div>
              <span className="label">1 · Package</span>
              <div className="grid gap-2 sm:grid-cols-3">
                {packages.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setPkg(p.name)}
                    className={`chip ${pkg === p.name ? "chip-active" : ""}`}
                    aria-pressed={pkg === p.name}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <span className="label">2 · Vehicle</span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {vehicleSizes.map((v) => (
                  <button
                    key={v.key}
                    type="button"
                    onClick={() => setSize(v.key)}
                    className={`chip !flex-col !items-start !gap-0.5 !text-left ${
                      size === v.key ? "chip-active" : ""
                    }`}
                    aria-pressed={size === v.key}
                  >
                    <span>{v.label}</span>
                    <span className="text-[11px] font-medium text-ink-mute">
                      {v.example}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div>
              <span className="label">3 · Condition</span>
              <div className="grid gap-2 sm:grid-cols-3">
                {conditions.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setCondition(c.key)}
                    className={`chip !flex-col !items-start !gap-0.5 !text-left ${
                      condition === c.key ? "chip-active" : ""
                    }`}
                    aria-pressed={condition === c.key}
                  >
                    <span>{c.label}</span>
                    <span className="text-[11px] font-medium text-ink-mute">
                      {c.detail}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <p className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink-mute sm:hidden">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper" strokeWidth={2} />
            A guide only. We confirm a fixed price once we have seen photos or the vehicle
            itself — and never change it halfway through.
          </p>
        </div>
      </div>
    </section>
  );
}
