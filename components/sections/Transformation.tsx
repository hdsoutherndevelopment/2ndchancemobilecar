import { beforeAfter } from "@/lib/config";
import BeforeAfter from "@/components/ui/BeforeAfter";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Transformation() {
  return (
    <section id="transformation" className="relative scroll-mt-24 overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(70% 60% at 80% 10%, rgba(31,155,224,0.14), transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Before & After"
          title="The 2nd Chance Transformation"
          subtitle="Drag the slider to see the difference a proper valet makes — road film, brake dust and a lived-in interior taken back to how they should look."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {beforeAfter.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1}>
              <BeforeAfter src={b.src} alt={b.alt} label={b.label} title={b.title} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="max-w-xl text-[15px] text-steel-400">
              Every vehicle is different. Send us a couple of photos and we&apos;ll tell you exactly what we can do with
              it.
            </p>
            <a href="#quote" className="btn-primary">
              Get My Free Quote
            </a>
            <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-steel-600">
              Demo imagery — to be replaced with 2nd Chance&apos;s own before &amp; after photos
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
