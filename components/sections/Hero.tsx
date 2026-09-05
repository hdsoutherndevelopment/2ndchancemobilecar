"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Phone, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { business } from "@/lib/config";
import Stars from "@/components/ui/Stars";

const HERO =
  "https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?auto=format&fit=crop&w=2000&q=72";

const DROPS = [
  { l: 8, t: 22, s: 1.6, d: 0 },
  { l: 17, t: 68, s: 1, d: 1.4 },
  { l: 29, t: 41, s: 2.2, d: 0.6 },
  { l: 44, t: 78, s: 1.2, d: 2.1 },
  { l: 58, t: 30, s: 1.8, d: 0.9 },
  { l: 71, t: 62, s: 1, d: 1.8 },
  { l: 83, t: 36, s: 2.4, d: 0.3 },
  { l: 92, t: 72, s: 1.4, d: 2.6 },
  { l: 37, t: 15, s: 1.1, d: 3.1 },
  { l: 64, t: 88, s: 1.7, d: 1.1 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.25]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-950 pb-16 pt-32 sm:pb-24"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
        <Image
          src={HERO}
          alt="Professional detailer covering a dark car in snow foam during a mobile valet"
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Cinematic grade */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, #06070A 4%, rgba(6,7,10,0.92) 26%, rgba(6,7,10,0.55) 55%, rgba(6,7,10,0.7) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(120% 80% at 20% 90%, rgba(31,155,224,0.16), transparent 60%)" }}
        aria-hidden="true"
      />

      {/* Subtle water / detailing shimmer */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          {DROPS.map((d, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white/25"
              style={{
                left: `${d.l}%`,
                top: `${d.t}%`,
                width: d.s * 4,
                height: d.s * 4,
                boxShadow: "0 0 12px rgba(255,255,255,0.35)",
              }}
              animate={{ opacity: [0, 0.85, 0], y: [0, 26, 52], scale: [0.6, 1, 0.7] }}
              transition={{ duration: 6 + d.s, delay: d.d, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      <motion.div style={{ opacity: fade }} className="shell relative">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="eyebrow"
        >
          <span className="h-px w-8 bg-accent/70" aria-hidden="true" />
          Ferndown · Wimborne · Broadstone · Ringwood
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="h-display mt-6 text-[clamp(2.8rem,9vw,7.2rem)]"
        >
          Give Your Vehicle
          <br />
          <span className="metal-text">A 2nd Chance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-7 max-w-xl text-[17px] leading-relaxed text-steel-300 sm:text-[19px]"
        >
          Professional mobile car &amp; van valeting, brought directly to your driveway.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a href="#quote" className="btn-primary w-full sm:w-auto">
            Get a Free Quote
          </a>
          <a href={business.phoneHref} className="btn-ghost w-full sm:w-auto">
            <Phone size={16} aria-hidden="true" />
            Call {business.phone}
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58 }}
          className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7"
        >
          <li className="flex items-center gap-2.5">
            <Stars size={15} />
            <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-white">5.0 Rated</span>
          </li>
          <li className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-steel-300">
            <ShieldCheck size={17} className="text-accent-soft" aria-hidden="true" />
            Fully Insured
          </li>
          <li className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-steel-300">
            <Truck size={17} className="text-accent-soft" aria-hidden="true" />
            Mobile Service
          </li>
          <li className="hidden items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-steel-300 md:flex">
            <Sparkles size={17} className="text-accent-soft" aria-hidden="true" />
            Cars · Vans · Commercial
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
}
