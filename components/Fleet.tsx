import { Truck, ArrowRight } from "lucide-react";
import { fleetPoints, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Fleet() {
  return (
    <section className="py-10 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="panel noise relative overflow-hidden p-8 sm:p-12">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(60% 80% at 100% 0%, rgba(76,141,255,0.14) 0%, rgba(5,8,12,0) 70%)",
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <span className="eyebrow">
                  <Truck className="h-3 w-3" strokeWidth={2.4} />
                  Vans &amp; fleet
                </span>
                <h2 className="h2 mt-5 text-balance">
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

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {fleetPoints.map((p, i) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                  >
                    <span className="font-display text-xs font-extrabold tracking-[0.2em] text-aqua">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="h3 mt-3 !text-base">{p.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-chrome-muted">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative mt-9 border-t border-white/[0.07] pt-6 text-xs text-chrome-muted">
              Managing more than three vehicles? Call{" "}
              <a href={site.phoneHref} className="text-aqua hover:underline">
                {site.phone}
              </a>{" "}
              and we will put together a per-vehicle rate.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
