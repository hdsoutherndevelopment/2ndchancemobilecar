"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQs" title="Questions, Answered." />
          <Reveal delay={0.15}>
            <p className="mt-6 text-[15px] leading-relaxed text-steel-400">
              Anything else you want to know, just ring us — we&apos;d rather have a quick chat than have you guessing.
            </p>
            <a href="#quote" className="btn-ghost mt-7">
              Ask a Question
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-[17px] font-bold uppercase leading-snug tracking-tight text-white sm:text-[19px]">
                        {f.q}
                      </span>
                      <Plus
                        size={20}
                        className={`mt-0.5 shrink-0 text-accent-soft transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-10 text-[15.5px] leading-relaxed text-steel-400">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
