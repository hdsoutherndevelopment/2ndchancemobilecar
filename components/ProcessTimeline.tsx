"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/site";
import Reveal from "./Reveal";

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      className="scroll-mt-24 border-y border-white/[0.07] bg-ink-900/50 py-24 sm:py-32"
    >
      <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Reveal>
            <span className="eyebrow">How it works</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h2 mt-5 text-balance">Four steps, no chasing</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mt-5">
              Booking a valet should take two minutes, not two phone calls and a week of
              waiting for someone to ring back.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <a href="#quote" className="btn-ghost mt-8">
              Start step one
            </a>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-[27px] top-2 h-[calc(100%-2rem)] w-px bg-white/[0.08]" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[27px] top-2 h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-aqua via-aqua to-transparent"
          />

          <ol className="space-y-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li className="relative flex gap-6">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-aqua/25 bg-ink-900 font-display text-lg font-extrabold text-aqua">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="panel panel-hover flex-1 p-6">
                    <h3 className="h3">{step.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-chrome-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
