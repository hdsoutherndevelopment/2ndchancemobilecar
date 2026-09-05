"use client";

import { motion } from "framer-motion";
import { gallery } from "@/lib/config";
import Shot from "@/components/ui/Shot";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Work"
            title="Finished Properly, Every Time."
            subtitle="Exteriors, interiors, wheels, engine bays and vans — a look at the standard we hold ourselves to."
          />
          <Reveal delay={0.15}>
            <a href="#quote" className="btn-ghost whitespace-nowrap">
              Get This For Your Vehicle
            </a>
          </Reveal>
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.06}>
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 break-inside-avoid"
              >
                <Shot
                  src={g.src}
                  alt={g.alt}
                  className={g.tall ? "relative aspect-[3/4]" : "relative aspect-[4/3]"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  imgClassName="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to top, rgba(6,7,10,0.9), transparent 55%)" }}
                  aria-hidden="true"
                />
                <figcaption className="absolute bottom-0 left-0 translate-y-3 p-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.tag}
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
