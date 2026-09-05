import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  { num: "01", title: "Get In Touch", copy: "Call us or send a quick quote request. Tell us what your vehicle needs." },
  { num: "02", title: "Choose Your Service", copy: "We'll recommend the right valet for your vehicle and confirm the price." },
  { num: "03", title: "We Come To You", copy: "We arrive at your home or workplace and transform your vehicle." },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink-900 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 70% at 15% 0%, rgba(31,155,224,0.12), transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="shell relative">
        <SectionHeading eyebrow="How It Works" title="Three Steps. That's It." align="center" />

        <ol className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.12} as="li">
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-[56px] font-extrabold leading-none text-white/12" aria-hidden="true">
                    {s.num}
                  </span>
                  <span className="h-px flex-1 rule-glow" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-[22px] font-bold uppercase tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-steel-400">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.3}>
          <div className="mt-16 flex justify-center">
            <a href="#quote" className="btn-primary">
              Get Your Free Quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
