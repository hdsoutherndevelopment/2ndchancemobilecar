"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, MapPin, Droplets, Star } from "lucide-react";
import CarHero from "./CarHero";
import { site } from "@/lib/site";

const badges = [
  { icon: MapPin, label: "We come to you" },
  { icon: Droplets, label: "Own water & power" },
  { icon: ShieldCheck, label: "Fully insured" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const carY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="noise relative overflow-hidden pt-[76px]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(75% 65% at 50% 0%, black 0%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(75% 65% at 50% 0%, black 0%, transparent 78%)",
        }}
      />

      <div className="container-page grid items-center gap-12 pb-6 pt-14 lg:grid-cols-[1.02fr_1fr] lg:gap-8 lg:pb-16 lg:pt-20">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Star className="h-3 w-3 fill-aqua" strokeWidth={0} />
            Mobile valeting · {site.baseTown} &amp; {site.county}
          </motion.span>

          <motion.h1
            className="h1 mt-6 text-balance"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Every vehicle
            <br />
            deserves a{" "}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-aqua-light via-aqua to-aqua-dark bg-clip-text text-transparent">
                second chance
              </span>
              <svg
                className="absolute -bottom-3 left-0 h-3.5 w-full text-aqua/35"
                viewBox="0 0 320 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 10.5C64 4 128 2 192 4.5c42 1.6 84 3.6 125 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            className="lede mt-8 max-w-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Fully mobile car and van valeting across {site.baseTown} and the surrounding
            areas. We bring our own water and power to your door and hand-finish every
            vehicle — including the ones other valeters turn down.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
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

          <motion.ul
            className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.07] pt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            {badges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-[13px] font-semibold text-chrome-muted"
              >
                <Icon className="h-4 w-4 text-aqua" strokeWidth={1.9} />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          style={{ y: carY }}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <CarHero className="w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]" />
        </motion.div>
      </div>
    </section>
  );
}
