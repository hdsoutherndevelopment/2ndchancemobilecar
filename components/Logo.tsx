export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <defs>
          <linearGradient id="markGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6FEBDA" />
            <stop offset="100%" stopColor="#12A491" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="38" height="38" rx="12" fill="#0B1017" stroke="url(#markGrad)" strokeWidth="1.5" />
        <path
          d="M12 26.5c0-4.5 8.5-5.2 8.5-9.3 0-1.9-1.5-3.2-3.6-3.2-2 0-3.5 1.1-4.1 2.9"
          fill="none"
          stroke="url(#markGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="M12 26.6h9.2" stroke="url(#markGrad)" strokeWidth="2.4" strokeLinecap="round" />
        <path
          d="M25.5 14.4a6.4 6.4 0 1 0 0 11.9"
          fill="none"
          stroke="#C6D2DE"
          strokeOpacity="0.75"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-extrabold tracking-tight text-white">
          2nd Chance
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-aqua">
          Mobile Valet
        </span>
      </span>
    </span>
  );
}
