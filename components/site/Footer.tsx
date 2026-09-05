import { Clock, MapPin, Phone } from "lucide-react";
import { business, navLinks } from "@/lib/config";
import Stars from "@/components/ui/Stars";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pb-28 pt-20 sm:pb-14">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span
                className="grid h-12 w-12 place-items-center rounded-lg border border-white/20 bg-white/[0.06] font-display text-[19px] font-extrabold text-white"
                aria-hidden="true"
              >
                2<span className="text-[0.6em] leading-none text-accent-soft">nd</span>
              </span>
              <div>
                <p className="font-display text-[19px] font-extrabold uppercase tracking-[0.16em] text-white">
                  2nd Chance
                </p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-steel-500">{business.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-steel-400">
              Fully insured mobile car and van valeting, brought directly to driveways and workplaces across East
              Dorset.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Stars size={15} />
              <span className="text-[13px] font-semibold text-white">5.0 rated</span>
              <span className="text-[13px] text-steel-500">· {business.reviewCount} reviews</span>
            </div>
            <a href={business.phoneHref} className="btn-ghost btn-sm mt-7">
              <Phone size={15} aria-hidden="true" /> Call {business.phone}
            </a>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-500">Contact</h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li>
                <a href={business.phoneHref} className="group flex items-start gap-3 text-white">
                  <Phone size={17} className="mt-0.5 text-accent-soft" aria-hidden="true" />
                  <span className="font-display text-[20px] font-bold tracking-wide group-hover:text-accent-soft">
                    {business.phone}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-steel-400">
                <MapPin size={17} className="mt-0.5 text-accent-soft" aria-hidden="true" />
                <span>
                  Ferndown, Dorset
                  <br />
                  Mobile service — we come to you
                </span>
              </li>
              <li className="flex items-start gap-3 text-steel-400">
                <Clock size={17} className="mt-0.5 text-accent-soft" aria-hidden="true" />
                <span>
                  Monday – Sunday
                  <br />
                  8am – 6pm
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-500">Areas</h3>
            <ul className="mt-5 space-y-2.5 text-[15px] text-steel-400">
              {business.areas.map((a) => (
                <li key={a}>
                  <a href="#areas" className="transition-colors hover:text-white">
                    {a}
                  </a>
                </li>
              ))}
              <li>
                <a href="#areas" className="text-accent-soft transition-colors hover:text-white">
                  + surrounding areas
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-steel-500">Site</h3>
            <ul className="mt-5 space-y-2.5 text-[15px] text-steel-400">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-7 text-[12.5px] text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.legalName}. Fully insured. Ferndown, Dorset.
          </p>
          <p>
            Website by{" "}
            <a
              href="https://hdsoutherndevelopment.com"
              className="text-steel-300 transition-colors hover:text-white"
              rel="noopener"
            >
              HD Southern Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
