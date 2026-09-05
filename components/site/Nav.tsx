"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "@/lib/config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/85 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent py-4"
      }`}
    >
      <nav className="shell flex items-center justify-between gap-6" aria-label="Main">
        <a href="#top" className="group flex items-center gap-3" aria-label="2nd Chance — home">
          <span
            className={`grid place-items-center rounded-lg border border-white/20 bg-white/[0.06] font-display font-extrabold text-white transition-all duration-500 ${
              scrolled ? "h-9 w-9 text-[15px]" : "h-11 w-11 text-[18px]"
            }`}
            aria-hidden="true"
          >
            2<span className="text-[0.6em] leading-none text-accent-soft">nd</span>
          </span>
          <span className="leading-none">
            <span className="block font-display text-[17px] font-extrabold uppercase tracking-[0.16em] text-white">
              2nd Chance
            </span>
            <span className="mt-1 block text-[9.5px] uppercase tracking-[0.3em] text-steel-500">
              Mobile Valeting · Ferndown
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.13em] text-steel-300 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap text-[13px] font-bold tracking-wide text-white transition-colors hover:text-accent-soft lg:inline-flex xl:hidden 2xl:inline-flex"
          >
            <Phone size={15} aria-hidden="true" />
            {business.phone}
          </a>
          <a href="#quote" className="btn-primary btn-sm hidden whitespace-nowrap sm:inline-flex">
            Book a Valet
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-white/[0.04] text-white xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink-950/97 backdrop-blur-xl xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="shell flex h-20 items-center justify-between">
              <span className="font-display text-[17px] font-extrabold uppercase tracking-[0.16em] text-white">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white"
                aria-label="Close menu"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <ul className="shell mt-4 flex flex-col">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-white/8"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-5 font-display text-2xl font-bold uppercase tracking-tight text-white"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="shell mt-8 grid gap-3">
              <a href="#quote" onClick={() => setOpen(false)} className="btn-primary w-full">
                Get a Free Quote
              </a>
              <a href={business.phoneHref} className="btn-ghost w-full">
                <Phone size={16} aria-hidden="true" /> Call {business.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
