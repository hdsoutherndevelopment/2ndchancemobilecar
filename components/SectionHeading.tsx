import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="h2 mt-6 text-balance">{title}</h2>
      </Reveal>
      {lede ? (
        <Reveal delay={0.12}>
          <p className="lede mt-5">{lede}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
