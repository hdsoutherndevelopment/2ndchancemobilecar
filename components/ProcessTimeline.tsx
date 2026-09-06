"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/site";
import Reveal from "./Reveal";

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      className="scroll-mt-28 border-y border-ink/10 bg-paper-dark py-24 sm:py-32"
    >
      <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Reveal>
            <span className="eyebrow">How it works</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h2 mt-6 text-balance">Four steps, no chasing</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mt-5">
              Booking a valet should take two minutes, not two phone calls and a week of
              waiting for someone to ring back.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <a href="#quote" className="btn-primary mt-9">
              Start step one
            </a>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-[15px] top-3 hidden h-[calc(100%-2.5rem)] w-px bg-ink/[0.12] sm:block" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[15px] top-3 hidden h-[calc(100%-2.5rem)] w-px origin-top bg-copper sm:block"
          />

          <ol className="space-y-10">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li className="relative sm:pl-14">
                  <span className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-ink/[0.12] bg-paper-card font-display text-[13px] text-copper sm:flex">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="index-num sm:hidden">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[26px] leading-tight tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-lg text-[14.5px] leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
