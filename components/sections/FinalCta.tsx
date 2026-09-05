import { Phone } from "lucide-react";
import { business, img } from "@/lib/config";
import Shot from "@/components/ui/Shot";
import Reveal from "@/components/ui/Reveal";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <Shot
        src={img("1567808291548-fc3ee04dbcf0", 2000)}
        alt=""
        className="absolute inset-0 h-full"
        sizes="100vw"
        imgClassName="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,7,10,0.88) 0%, rgba(6,7,10,0.72) 45%, rgba(6,7,10,0.95) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(70% 70% at 50% 50%, rgba(31,155,224,0.16), transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="shell relative py-28 text-center sm:py-40">
        <Reveal>
          <h2 className="h-display mx-auto max-w-4xl text-[clamp(2.3rem,7vw,5rem)]">
            Ready To Give Your Vehicle
            <br />
            <span className="metal-text">A 2nd Chance?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-steel-300">
            Get in touch today for a quote and let us bring the valet to you.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#quote" className="btn-primary w-full sm:w-auto">
              Get a Free Quote
            </a>
            <a href={business.phoneHref} className="btn-ghost w-full sm:w-auto">
              <Phone size={16} aria-hidden="true" />
              Call {business.phone}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-500">
            {business.hours} · Fully Insured · Ferndown, Dorset
          </p>
        </Reveal>
      </div>
    </section>
  );
}
