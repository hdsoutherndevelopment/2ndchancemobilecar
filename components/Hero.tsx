"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import CarHero from "./CarHero";
import { site, trustPoints } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const carX = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-[80px]">
      <div className="container-page">
        <div className="grid items-end gap-10 pb-10 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pt-24">
          <motion.div style={{ opacity: fade }}>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mobile valeting · {site.baseTown} &amp; {site.county}
            </motion.span>

            <motion.h1
              className="h1 mt-7 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06 }}
            >
              Every vehicle deserves a{" "}
              <em className="font-display italic text-forest">second chance</em>
            </motion.h1>

            <motion.p
              className="lede mt-8 max-w-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14 }}
            >
              Fully mobile car and van valeting across {site.baseTown} and the surrounding
              areas. We bring our own water and power to your door and hand-finish every
              vehicle — including the ones other valeters turn down.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              <a href="#estimate" className="btn-primary">
                Price my valet
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
              <a href={site.phoneHref} className="btn-ghost">
                <Phone className="h-4 w-4" strokeWidth={1.9} />
                {site.phone}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="card grain relative overflow-hidden p-7"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink-mute">
              What you get
            </span>
            <ul className="mt-5 divide-y divide-ink/[0.08]">
              {trustPoints.map((point, i) => (
                <li key={point} className="flex items-baseline gap-4 py-3.5">
                  <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[14px] font-semibold text-ink">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-ink/[0.08] pt-5 text-[13px] leading-relaxed text-ink-soft">
              No jet-wash queue, no drop-off, no waiting room. We work where the vehicle is
              parked.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div style={{ x: carX }} className="container-page pb-8">
        <CarHero className="w-full" />
      </motion.div>
    </section>
  );
}
