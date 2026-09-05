import { MapPin } from "lucide-react";
import { coverage, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Coverage() {
  return (
    <section
      id="areas"
      className="scroll-mt-24 border-y border-white/[0.06] bg-ink-900/60 py-20 sm:py-28"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Coverage"
          title={`Covering ${site.baseTown} and the surrounding towns`}
          lede="We are fully mobile, so we work at homes, offices, car parks and yards across the area. Slightly outside the list? Ask anyway — we will tell you honestly if we can get to you."
        />

        <Reveal delay={0.1}>
          <div className="card p-7">
            <div className="flex flex-wrap gap-2">
              {coverage.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-chrome transition hover:border-aqua/40 hover:text-white"
                >
                  <MapPin className="h-3.5 w-3.5 text-aqua" strokeWidth={1.8} />
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 border-t border-white/[0.06] pt-5 text-sm text-chrome-muted">
              Fleet and multi-vehicle bookings can be arranged outside this radius. Call{" "}
              <a href={site.phoneHref} className="text-aqua hover:underline">
                {site.phone}
              </a>{" "}
              to discuss.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
