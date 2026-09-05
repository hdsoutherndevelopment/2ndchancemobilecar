import { BadgePoundSterling, Handshake, ScanEye, ShieldCheck, Truck, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    copy: "Your vehicle is covered from the moment we start. No grey areas, no worrying.",
  },
  {
    icon: Truck,
    title: "Mobile — We Come To You",
    copy: "Home or workplace, across Ferndown and East Dorset. You don't move a thing.",
  },
  {
    icon: Handshake,
    title: "Friendly Service",
    copy: "Straight talking, on time, and happy to work around your day.",
  },
  {
    icon: BadgePoundSterling,
    title: "Competitive Prices",
    copy: "Honest local pricing from £15, quoted up front. No surprises at the end.",
  },
  {
    icon: Wrench,
    title: "Cars, Vans & Commercial",
    copy: "Family hatchbacks, 4x4s, work vans and small fleets — all handled properly.",
  },
  {
    icon: ScanEye,
    title: "Attention To Detail",
    copy: "Door shuts, sills, vents and cup holders. The bits most people skip.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose 2nd Chance?"
          subtitle="A proper job, done where you are, by someone who takes pride in it."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.07} as="article">
              <div className="group h-full bg-ink-850 p-8 transition-colors duration-500 hover:bg-ink-800">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/12 bg-white/[0.04] text-accent-soft transition-all duration-500 group-hover:border-accent/50 group-hover:bg-accent/10">
                  <f.icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-[18px] font-bold uppercase tracking-tight text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-steel-400">{f.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
