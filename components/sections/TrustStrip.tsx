import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import Stars from "@/components/ui/Stars";

const stats = [
  { value: 5, decimals: 1, label: "Customer Rated", stars: true },
  { value: 100, suffix: "%", label: "Mobile Service" },
  { value: 7, suffix: "+", label: "5-Star Reviews" },
  { value: 4, label: "Local Areas Covered" },
];

export default function TrustStrip() {
  return (
    <section className="relative border-y border-white/10 bg-ink-900" aria-label="Why customers trust 2nd Chance">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(80% 120% at 50% 0%, rgba(255,255,255,0.06), transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="shell relative grid grid-cols-2 divide-x divide-y divide-white/8 border-x border-white/8 lg:grid-cols-4 lg:divide-y-0">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="px-5 py-9 text-center sm:px-8 sm:py-12">
            <div className="font-display text-[clamp(2.4rem,6vw,3.6rem)] font-extrabold leading-none text-white">
              <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />
            </div>
            {s.stars && (
              <div className="mt-3 flex justify-center">
                <Stars size={14} />
              </div>
            )}
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-400">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
