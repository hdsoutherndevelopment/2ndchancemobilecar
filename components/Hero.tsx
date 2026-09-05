"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, MapPin, Droplets } from "lucide-react";
import CarGraphic from "./CarGraphic";
import { site } from "@/lib/site";

const badges = [
  { icon: MapPin, label: "We come to you" },
  { icon: Droplets, label: "Own water & power" },
  { icon: ShieldCheck, label: "Fully insured" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 70% 15%, rgba(51,214,192,0.18) 0%, rgba(8,12,17,0) 70%), radial-gradient(45% 40% at 15% 30%, rgba(51,214,192,0.10) 0%, rgba(8,12,17,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(70% 60% at 50% 0%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(70% 60% at 50% 0%, black 0%, transparent 75%)",
        }}
      />

      <div className="container-page grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mobile valeting · {site.baseTown} &amp; {site.county}
          </motion.span>

          <motion.h1
            className="h1 mt-5 text-balance"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Every vehicle deserves a{" "}
            <span className="relative whitespace-nowrap text-aqua">
              second chance
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-aqua/40"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C60 3 120 2 180 4c40 1.3 80 3.3 118 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            className="lede mt-7 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Fully mobile car and van valeting across {site.baseTown} and the surrounding
            areas. We bring our own water and power to your door, and hand-finish every
            vehicle — including the ones other valeters turn down.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <a href="#quote" className="btn-primary">
              Get a free quote
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a href={site.phoneHref} className="btn-ghost">
              <Phone className="h-4 w-4" strokeWidth={1.8} />
              {site.phone}
            </a>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-chrome-muted">
                <Icon className="h-4 w-4 text-aqua" strokeWidth={1.7} />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <CarGraphic className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
