import { processSteps } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps, no chasing"
          lede="Booking a valet should take two minutes, not two phone calls."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07}>
              <div className="relative h-full">
                <div className="card h-full p-6">
                  <span className="font-display text-4xl font-extrabold text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="h3 mt-3">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-chrome-muted">{step.body}</p>
                </div>
                {i < processSteps.length - 1 ? (
                  <span
                    className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-aqua/50 to-transparent lg:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
