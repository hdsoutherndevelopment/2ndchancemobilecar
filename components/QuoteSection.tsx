import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import QuoteForm from "./QuoteForm";
import Reveal from "./Reveal";

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="scroll-mt-24 border-t border-white/[0.06] bg-ink-900/60 py-20 sm:py-28"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <span className="eyebrow">Free quote</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h2 mt-4 text-balance">Tell us about the vehicle</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mt-5">
              Send us the basics and we will come back with a fixed price. Photos help,
              especially for interiors — you can text them over once we are in touch.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-9 space-y-4 border-t border-white/[0.07] pt-8">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={1.8} />
                <a href={site.phoneHref} className="text-chrome hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={1.8} />
                <a href={`mailto:${site.email}`} className="text-chrome hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-chrome">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={1.8} />
                {site.baseTown} &amp; surrounding {site.county}
              </li>
              <li className="flex items-start gap-3 text-sm text-chrome">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={1.8} />
                <span className="space-y-1">
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">
                      <span className="text-chrome-muted">{h.day}:</span> {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
