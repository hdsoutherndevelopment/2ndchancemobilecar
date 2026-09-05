import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-ink py-14">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-chrome-muted">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-chrome-muted transition hover:border-aqua/50 hover:text-aqua"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.7} />
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-chrome-muted transition hover:border-aqua/50 hover:text-aqua"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.7} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a
                    href="#services"
                    className="text-sm text-chrome-muted transition hover:text-aqua"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 text-sm text-chrome-muted transition hover:text-aqua"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-chrome-muted transition hover:text-aqua"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {site.email}
                </a>
              </li>
              <li className="pt-2">
                <a href="#quote" className="btn-primary !px-5 !py-2.5">
                  Get a quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-7 text-xs text-chrome-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            Site by{" "}
            <a
              href="https://hdsoutherndevelopment.com"
              className="text-chrome transition hover:text-aqua"
            >
              HD Southern Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
