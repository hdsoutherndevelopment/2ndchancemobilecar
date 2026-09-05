import { Quote } from "lucide-react";
import { business, reviews, reviewsNote } from "@/lib/config";
import Stars from "@/components/ui/Stars";
import Counter from "@/components/ui/Counter";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Reviews() {
  return (
    <section id="reviews" className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-ink-900 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 60% at 85% 15%, rgba(232,179,75,0.10), transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Customer Reviews"
              title="Don't Just Take Our Word For It."
              subtitle="Punctual, friendly, thorough — and vehicles that come back looking immaculate."
            />
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="rounded-2xl border border-white/12 bg-ink-850 p-7 text-center">
              <div className="font-display text-[58px] font-extrabold leading-none text-white">
                <Counter value={business.rating} decimals={1} />
              </div>
              <div className="mt-3 flex justify-center">
                <Stars size={18} />
              </div>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-400">
                Customer Rating · {business.reviewCount} reviews
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} as="li" className="h-full">
              <figure className="card-surface flex h-full flex-col p-7">
                <Quote size={26} className="text-white/15" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-steel-200">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/8 pt-5">
                  <Stars size={13} />
                  <p className="mt-2.5 text-[14px] font-semibold text-white">{r.name}</p>
                  <p className="text-[12.5px] text-steel-500">
                    {r.location} · {r.service}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal delay={0.24} as="li" className="h-full lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-ink-850 to-ink-850 p-7 sm:flex-row sm:items-end sm:gap-8 lg:p-9">
              <div>
                <Stars size={15} />
                <h3 className="mt-5 font-display text-[20px] font-bold uppercase leading-tight tracking-tight text-white">
                  Your review could be next.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-steel-300">
                  Every vehicle we&apos;ve valeted has come back rated five stars. Book yours and see why.
                </p>
              </div>
              <a href="#quote" className="btn-primary mt-7 w-full sm:mt-0 sm:w-auto sm:shrink-0">
                Book My Valet
              </a>
            </div>
          </Reveal>
        </ul>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <a href="#quote" className="btn-primary">
              Get Your Vehicle Looking Its Best
            </a>
            <p className="text-[11px] uppercase tracking-[0.16em] text-steel-600">{reviewsNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
