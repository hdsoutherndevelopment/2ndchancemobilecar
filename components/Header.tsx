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
          ? "border-b border-ink/10 bg-paper/90 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[80px] items-center justify-between">
        <a href="#top" aria-label={site.name} className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[13px] font-semibold text-ink-soft transition after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-copper after:transition-all after:duration-300 hover:text-ink hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-[13px] font-bold text-ink transition hover:text-forest"
          >
            <Phone className="h-3.5 w-3.5 text-copper" strokeWidth={2.2} />
            {site.phone}
          </a>
          <a href="#quote" className="btn-primary !px-5 !py-3">
            Get a quote
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink/15 text-ink lg:hidden"
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
            className="border-t border-ink/10 bg-paper lg:hidden"
          >
            <div className="container-page flex flex-col py-4">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-ink/[0.07] py-4 text-[17px] font-semibold text-ink"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                    {l.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-mute" strokeWidth={1.8} />
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-2.5">
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
