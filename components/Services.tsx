import { services } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./Icon";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Valeting done properly, on your driveway"
          lede="Book a single service or let us build a package around the condition of your vehicle. Everything is done by hand, on site, with commercial-grade kit."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <article className="card group h-full p-6 transition duration-300 hover:border-aqua/30 hover:bg-white/[0.04]">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-aqua/20 bg-aqua/10 text-aqua transition group-hover:bg-aqua/15">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="h3">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-chrome-muted">
                  {service.blurb}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] text-chrome-muted">
                      <span
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-aqua"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
