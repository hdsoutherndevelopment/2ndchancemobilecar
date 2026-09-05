export default function CarGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 300"
      className={className}
      role="img"
      aria-label="Illustration of a freshly valeted car"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2B3A4B" />
          <stop offset="45%" stopColor="#182231" />
          <stop offset="100%" stopColor="#0C131C" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EE7D6" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#33D6C0" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#33D6C0" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="sheenGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#33D6C0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#33D6C0" stopOpacity="0" />
        </radialGradient>
        <clipPath id="bodyClip">
          <path d="M40,196 C40,174 62,161 96,155 L152,145 C174,113 206,92 258,86 C312,80 360,83 400,94 C440,105 474,124 506,143 L562,155 C596,161 608,174 608,196 L608,206 C608,214 602,220 594,220 L54,220 C46,220 40,214 40,206 Z" />
        </clipPath>
      </defs>

      <ellipse cx="324" cy="252" rx="250" ry="26" fill="url(#glowGrad)" />

      <path
        d="M40,196 C40,174 62,161 96,155 L152,145 C174,113 206,92 258,86 C312,80 360,83 400,94 C440,105 474,124 506,143 L562,155 C596,161 608,174 608,196 L608,206 C608,214 602,220 594,220 L54,220 C46,220 40,214 40,206 Z"
        fill="url(#bodyGrad)"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="1.5"
      />

      <path
        d="M186,144 C204,116 232,101 272,97 L302,96 L302,142 Z"
        fill="url(#glassGrad)"
      />
      <path
        d="M318,96 L352,97 C384,100 412,112 442,132 L448,144 L318,144 Z"
        fill="url(#glassGrad)"
      />

      <g clipPath="url(#bodyClip)">
        <rect
          x="-260"
          y="60"
          width="150"
          height="220"
          fill="url(#sheenGrad)"
          className="animate-sheen"
        />
      </g>

      <path
        d="M96,170 L560,170"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <g fill="#0A0F16" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5">
        <circle cx="180" cy="212" r="42" />
        <circle cx="470" cy="212" r="42" />
      </g>
      <g fill="none" stroke="#33D6C0" strokeOpacity="0.55" strokeWidth="2.5">
        <circle cx="180" cy="212" r="20" />
        <circle cx="470" cy="212" r="20" />
      </g>
      <g fill="#33D6C0" fillOpacity="0.9">
        <circle cx="180" cy="212" r="4" />
        <circle cx="470" cy="212" r="4" />
      </g>

      <rect x="592" y="176" width="18" height="10" rx="5" fill="#6FEBDA" fillOpacity="0.85" />
      <rect x="40" y="178" width="14" height="8" rx="4" fill="#FF6B6B" fillOpacity="0.6" />

      <g fill="#6FEBDA" fillOpacity="0.7">
        <circle cx="118" cy="120" r="4" className="animate-floaty" />
        <circle cx="548" cy="104" r="5" className="animate-floaty" />
        <circle cx="352" cy="52" r="3" className="animate-floaty" />
        <circle cx="238" cy="62" r="3.5" className="animate-floaty" />
      </g>
    </svg>
  );
}
