import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-accent/70" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="h-display mt-5 text-[clamp(2rem,5.2vw,3.6rem)]">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className={`mt-5 text-[17px] leading-relaxed text-steel-400 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
