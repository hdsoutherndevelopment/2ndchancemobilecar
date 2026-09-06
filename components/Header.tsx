"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#estimate", label: "Estimate" },
  { href: "#packages", label: "Packages" },
  { href: "#process", label: "Process" },
  { href: "#areas", label: "Areas" },
  { href: "#faq", label: "FAQs" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-2xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[76px] items-center justify-between">
        <a href="#top" aria-label={site.name} className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-chrome-muted transition hover:bg-white/[0.05] hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2.5 text-[13px] font-bold text-white transition hover:border-aqua/50 hover:text-aqua"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2} />
            {site.phone}
          </a>
          <a href="#quote" className="btn-primary !px-5 !py-2.5">
            Get a quote
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.12] text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-white/[0.07] bg-ink-950/97 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-semibold text-chrome transition hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                  <ArrowUpRight className="h-4 w-4 text-chrome-muted" strokeWidth={1.8} />
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2.5">
                <a href={site.phoneHref} className="btn-ghost w-full">
                  <Phone className="h-4 w-4" strokeWidth={1.9} />
                  {site.phone}
                </a>
                <a href="#quote" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Get a free quote
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
