"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Questions"
          title="The things people ask before booking"
          align="center"
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition hover:opacity-70"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[21px] leading-snug tracking-tight text-ink sm:text-[23px]">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                      isOpen ? "rotate-45 border-forest bg-forest text-paper" : "border-ink/15"
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-[14.5px] leading-relaxed text-ink-soft">
                        {faq.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-ink-mute">
            Still unsure?{" "}
            <a href={site.phoneHref} className="font-semibold text-forest underline underline-offset-4">
              Call {site.phone}
            </a>{" "}
            and ask — no hard sell.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
