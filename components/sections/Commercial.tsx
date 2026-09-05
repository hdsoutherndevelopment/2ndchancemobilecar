import { Building2, Clock4, Truck, Users } from "lucide-react";
import Shot from "@/components/ui/Shot";
import Reveal from "@/components/ui/Reveal";
import { img } from "@/lib/config";

const targets = [
  { icon: Truck, label: "Tradespeople & work vans" },
  { icon: Building2, label: "Company vehicles" },
  { icon: Users, label: "Small businesses" },
  { icon: Clock4, label: "Commercial fleets" },
];

export default function Commercial() {
  return (
    <section id="commercial" className="relative scroll-mt-24 overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div className="absolute inset-0" aria-hidden="true">
        <Shot
          src={img("1587813369290-091c9d432daf", 1800)}
          alt=""
          className="absolute inset-0 h-full"
          sizes="100vw"
          imgClassName="object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, #0A0C10 30%, rgba(10,12,16,0.9) 52%, rgba(10,12,16,0.55) 100%)",
          }}
        />
      </div>

      <div className="shell relative grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent/70" aria-hidden="true" />
              Commercial & Fleet
            </span>
            <h2 className="h-display mt-5 text-[clamp(2rem,5vw,3.6rem)]">
              Keep Your Business Vehicles Looking Their Best.
            </h2>
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-steel-300">
              A dirty van tells your customers something before you&apos;ve said a word. We clean commercial vehicles
              on-site at your premises or yard, with early and late slots so you lose as little working time as
              possible.
            </p>
            <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-steel-400">
              One van or a whole fleet — tell us how many and we&apos;ll put together a price that works.
            </p>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {targets.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[14.5px] text-steel-200 backdrop-blur"
                >
                  <t.icon size={18} className="shrink-0 text-accent-soft" aria-hidden="true" />
                  {t.label}
                </li>
              ))}
            </ul>

            <a href="#quote" className="btn-primary mt-10">
              Enquire About Commercial Valeting
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-5">
          <div className="card-surface h-full p-8">
            <h3 className="font-display text-[19px] font-bold uppercase tracking-tight text-white">
              Minimal downtime, on your site
            </h3>
            <dl className="mt-7 grid gap-6">
              {[
                ["On-site cleaning", "We come to your yard, unit or car park — no vehicles off the road."],
                ["Flexible slots", "Early mornings, evenings and weekends, 8am – 6pm, seven days."],
                ["Fleet pricing", "Multiple vehicles priced together rather than one at a time."],
                ["Fully insured", "Cover in place for work on commercial vehicles."],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-soft">{t}</dt>
                  <dd className="mt-1.5 text-[14.5px] leading-relaxed text-steel-400">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
