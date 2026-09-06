import { trustPoints } from "@/lib/site";

export default function TrustMarquee() {
  const items = [...trustPoints, ...trustPoints];

  return (
    <div className="relative border-y border-white/[0.07] bg-white/[0.015] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {items.map((point, i) => (
            <div key={`${point}-${i}`} className="flex items-center gap-10">
              <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.24em] text-chrome-muted">
                {point}
              </span>
              <span className="h-1 w-1 rounded-full bg-aqua/70" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
