"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#process", label: "How it works" },
  { href: "#areas", label: "Areas" },
  { href: "#faq", label: "FAQs" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
          ? "border-b border-white/[0.07] bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <a href="#top" aria-label={site.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-chrome-muted transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="btn-ghost !px-4 !py-2">
            <Phone className="h-4 w-4" strokeWidth={1.8} />
            {site.phone}
          </a>
          <a href="#quote" className="btn-primary !px-5 !py-2.5">
            Get a quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/[0.07] bg-ink/98 backdrop-blur-xl lg:hidden">
          <div className="container-page flex flex-col gap-1 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-chrome transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href={site.phoneHref} className="btn-ghost w-full">
                <Phone className="h-4 w-4" strokeWidth={1.8} />
                {site.phone}
              </a>
              <a href="#quote" onClick={() => setOpen(false)} className="btn-primary w-full">
                Get a free quote
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
