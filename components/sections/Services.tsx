"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/config";
import Shot from "@/components/ui/Shot";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Your Vehicle
              <br className="hidden sm:block" /> Deserves Better.
            </>
          }
          subtitle="From a quick refresh to a complete inside-and-out transformation, we bring the valet to you."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08} as="article" className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="group card-surface flex h-full flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Shot
                    src={s.image}
                    alt={s.alt}
                    className="absolute inset-0"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    imgClassName="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.09]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, #0E1116 6%, rgba(14,17,22,0.35) 45%, transparent 75%)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute left-5 top-4 font-display text-[42px] font-extrabold leading-none text-white/85 mix-blend-overlay"
                    aria-hidden="true"
                  >
                    {s.num}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                    {s.price}
                    {s.priceNote && <span className="ml-1 font-medium text-steel-300">{s.priceNote}</span>}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[21px] font-bold uppercase leading-tight tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-steel-400">{s.blurb}</p>

                  <ul className="mt-5 grid gap-2 overflow-hidden text-[13.5px] text-steel-300 transition-all duration-500 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-52 sm:group-hover:opacity-100">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Check size={15} className="mt-0.5 shrink-0 text-accent-soft" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#quote"
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-[12px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-accent-soft"
                  >
                    Get a Quote
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <span className="sr-only"> for {s.title}</span>
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}

          <Reveal delay={0.16} className="h-full sm:col-span-2 lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-ink-850 to-ink-850 p-7 sm:flex-row sm:items-end lg:p-9">
              <div>
                <h3 className="font-display text-[22px] font-bold uppercase leading-tight text-white">
                  Not sure what
                  <br /> your vehicle needs?
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-steel-300">
                  Tell us the make, model and how it&apos;s looking. We&apos;ll recommend the right valet and give you a
                  straight price — no obligation.
                </p>
                <p className="mt-4 text-[13px] text-steel-400">
                  Final pricing depends on the size and condition of your vehicle.
                </p>
              </div>
              <a href="#quote" className="btn-primary w-full sm:w-auto sm:shrink-0">
                Get My Free Quote
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
