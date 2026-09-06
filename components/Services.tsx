import { services } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./Icon";
import { StaggerGroup, StaggerItem } from "./Reveal";

export default function Services() {
  const [lead, ...rest] = services;

  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32">
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

        <StaggerGroup className="mt-16 grid gap-4 lg:grid-cols-3">
          <StaggerItem className="lg:row-span-2">
            <article className="panel panel-hover noise relative flex h-full flex-col overflow-hidden p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(80% 60% at 50% 0%, rgba(47,220,194,0.14) 0%, rgba(5,8,12,0) 70%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-aqua/25 bg-aqua/10 text-aqua">
                  <ServiceIcon name={lead.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-7 text-2xl font-extrabold tracking-tight text-white">
                  {lead.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-chrome-muted">{lead.blurb}</p>
              </div>

              <ul className="relative mt-auto space-y-2.5 border-t border-white/[0.07] pt-6">
                {lead.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-chrome">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-aqua"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>

          {rest.map((service) => (
            <StaggerItem key={service.slug}>
              <article className="panel panel-hover group h-full p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-aqua transition group-hover:border-aqua/30 group-hover:bg-aqua/10">
                    <ServiceIcon name={service.icon} className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <h3 className="h3">{service.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-chrome-muted">
                      {service.blurb}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
