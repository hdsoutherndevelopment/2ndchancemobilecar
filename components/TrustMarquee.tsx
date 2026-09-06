import { trustPoints } from "@/lib/site";

export default function TrustMarquee() {
  const items = [...trustPoints, ...trustPoints];

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-forest py-3.5">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {items.map((point, i) => (
          <div key={`${point}-${i}`} className="flex items-center gap-8">
            <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.26em] text-paper/80">
              {point}
            </span>
            <span className="h-1 w-1 rounded-full bg-copper" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
