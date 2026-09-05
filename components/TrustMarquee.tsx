import { trustPoints } from "@/lib/site";

export default function TrustMarquee() {
  const items = [...trustPoints, ...trustPoints];

  return (
    <div className="border-y border-white/[0.07] bg-white/[0.015] py-4">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {items.map((point, i) => (
            <div key={`${point}-${i}`} className="flex items-center gap-10">
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.22em] text-chrome-muted">
                {point}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-aqua/60" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
