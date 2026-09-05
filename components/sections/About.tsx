import Shot from "@/components/ui/Shot";
import Reveal from "@/components/ui/Reveal";
import { img } from "@/lib/config";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 border-y border-white/10 bg-ink-900 py-24 sm:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <Shot
              src={img("1620584898989-d39f7f9ed1b7", 1200)}
              alt="Machine polisher and detailing equipment used by 2nd Chance in Ferndown"
              className="relative aspect-[4/5] rounded-2xl border border-white/10"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute -right-3 bottom-8 rounded-xl border border-white/12 bg-ink-950/95 px-6 py-5 backdrop-blur sm:right-6">
              <p className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent-soft">
                Ferndown
              </p>
              <p className="mt-1 font-display text-[19px] font-bold uppercase tracking-tight text-white">
                Local & Independent
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-7">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent/70" aria-hidden="true" />
              About Us
            </span>
            <h2 className="h-display mt-5 text-[clamp(2rem,5vw,3.4rem)]">Giving Your Vehicle A 2nd Chance.</h2>

            <div className="mt-7 space-y-5 text-[16.5px] leading-relaxed text-steel-400">
              <p>
                2nd Chance started for a simple reason: getting your car cleaned properly around here was either
                expensive, inconvenient, or a rushed job that missed half the vehicle.
              </p>
              <p>
                So we built the opposite. A mobile valeting service that turns up when it says it will, takes the time
                to do the job right, and treats a ten-year-old family car with the same care as anything else on the
                driveway.
              </p>
              <p>
                Most vehicles aren&apos;t past it — they&apos;ve just had a hard few years. Muddy boots, school runs,
                work gear, sun-faded plastics and wheels nobody has touched in a while. Given a few hours and the right
                products, almost every one of them cleans up better than the owner expects. That&apos;s the whole idea
                behind the name.
              </p>
              <p className="text-steel-300">
                We&apos;re local, fully insured, and we&apos;d rather do one vehicle properly than three in a hurry.
              </p>
            </div>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 sm:grid-cols-3">
              {[
                ["Pride in the work", "Every panel, every vent, every time."],
                ["Local service", "Ferndown based, East Dorset covered."],
                ["Happy customers", "5.0 rated across every review."],
              ].map(([t, d]) => (
                <div key={t} className="bg-ink-850 p-6">
                  <dt className="font-display text-[15px] font-bold uppercase tracking-tight text-white">{t}</dt>
                  <dd className="mt-2 text-[13.5px] leading-relaxed text-steel-400">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
