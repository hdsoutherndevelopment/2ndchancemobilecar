import { Facebook, Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { coverage, services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-28 pt-20 text-paper/70 lg:pb-16">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="paper" />
            <p className="mt-7 max-w-sm text-[14px] leading-relaxed text-paper/60">
              {site.description}
            </p>
            <div className="mt-7 flex gap-2.5">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-paper/20 text-paper/70 transition hover:border-copper hover:text-copper"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.8} />
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-paper/20 text-paper/70 transition hover:border-copper hover:text-copper"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a
                    href="#services"
                    className="text-[13.5px] text-paper/60 transition hover:text-copper"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper">
              Areas
            </h3>
            <ul className="mt-5 space-y-3">
              {coverage.slice(0, 6).map((c) => (
                <li key={c}>
                  <a
                    href="#areas"
                    className="text-[13.5px] text-paper/60 transition hover:text-copper"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-paper transition hover:text-copper"
                >
                  <Phone className="h-3.5 w-3.5 text-copper" strokeWidth={2} />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-[13.5px] text-paper/60 transition hover:text-copper"
                >
                  <Mail className="h-3.5 w-3.5 text-copper" strokeWidth={2} />
                  {site.email}
                </a>
              </li>
              <li className="pt-3">
                <a href="#quote" className="btn-copper !px-5 !py-3">
                  Get a quote
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            Site by{" "}
            <a
              href="https://hdsoutherndevelopment.com"
              className="font-semibold text-paper/80 transition hover:text-copper"
            >
              HD Southern Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
