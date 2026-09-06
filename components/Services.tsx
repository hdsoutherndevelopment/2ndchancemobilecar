import { services } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./Icon";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Valeting done properly, on your driveway"
            lede="Book a single service or let us build a package around the condition of the vehicle. Everything is done by hand, on site, with commercial-grade kit."
          />
          <a href="#quote" className="btn-ghost shrink-0 self-start lg:self-auto">
            Ask about a custom job
          </a>
        </div>

        <div className="mt-16 border-t border-ink/10">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i * 0.04, 0.2)}>
              <article className="group grid items-start gap-4 border-b border-ink/10 py-7 transition-colors duration-300 hover:bg-paper-dark/60 sm:grid-cols-[auto_1fr] sm:gap-8 lg:grid-cols-[auto_0.9fr_1.1fr] lg:px-4">
                <div className="flex items-center gap-4">
                  <span className="index-num w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-paper-card text-forest transition group-hover:border-forest/30 group-hover:bg-forest-100">
                    <ServiceIcon name={service.icon} className="h-[18px] w-[18px]" />
                  </span>
                </div>

                <h3 className="font-display text-2xl leading-tight tracking-tight text-ink">
                  {service.title}
                </h3>

                <div>
                  <p className="text-[14.5px] leading-relaxed text-ink-soft">{service.blurb}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                    {service.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-1.5 text-[12.5px] font-medium text-ink-mute"
                      >
                        <span className="h-1 w-1 rounded-full bg-copper" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
