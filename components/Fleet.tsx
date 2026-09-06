import { ArrowRight } from "lucide-react";
import { fleetPoints, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Fleet() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <span className="eyebrow">Vans &amp; fleet</span>
              <h2 className="h2 mt-6 text-balance">
                Keep the fleet looking like the business you run
              </h2>
              <p className="lede mt-5">
                Vans say more about a trade than any website. We clean single vans and small
                fleets on site, on a schedule that keeps them earning.
              </p>
              <a href="#quote" className="btn-primary mt-8">
                Talk about fleet rates
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
            </div>

            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {fleetPoints.map((p, i) => (
                <div key={p.title} className="grid gap-2 py-6 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <span className="index-num sm:w-8">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-[22px] leading-tight tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
              <p className="py-6 text-[13px] text-ink-mute">
                Managing more than three vehicles? Call{" "}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-forest underline underline-offset-4"
                >
                  {site.phone}
                </a>{" "}
                and we will put together a per-vehicle rate.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
