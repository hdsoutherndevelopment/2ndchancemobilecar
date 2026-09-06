export default function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  const wordColor = tone === "paper" ? "text-paper" : "text-ink";
  const subColor = tone === "paper" ? "text-paper/60" : "text-ink-mute";

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <svg viewBox="0 0 44 44" className="h-10 w-10" aria-hidden="true">
        <rect x="1" y="1" width="42" height="42" rx="13" fill="#14452F" />
        <rect
          x="4.5"
          y="4.5"
          width="35"
          height="35"
          rx="10"
          fill="none"
          stroke="#F7F4ED"
          strokeOpacity="0.28"
        />
        <path
          d="M14 29.5c0-5 9-5.6 9-10.1 0-2.1-1.7-3.5-4-3.5-2.2 0-3.9 1.2-4.5 3.2"
          fill="none"
          stroke="#F7F4ED"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path d="M14 29.6h9.6" stroke="#F7F4ED" strokeWidth="2.6" strokeLinecap="round" />
        <path
          d="M29.6 15.8a7 7 0 1 0 0 12.6"
          fill="none"
          stroke="#B65F33"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[19px] tracking-tight ${wordColor}`}>
          2nd Chance
        </span>
        <span
          className={`mt-1 text-[9px] font-bold uppercase tracking-[0.22em] ${subColor}`}
        >
          Mobile Valet
        </span>
      </span>
    </span>
  );
}
