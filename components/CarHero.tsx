export default function CarHero({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 400"
      className={className}
      role="img"
      aria-label="Illustration of a freshly valeted car"
    >
      <defs>
        <linearGradient id="bodyG" x1="0.1" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#1D5B3F" />
          <stop offset="55%" stopColor="#14452F" />
          <stop offset="100%" stopColor="#0D2E1F" />
        </linearGradient>
        <linearGradient id="topLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7F4ED" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#F7F4ED" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#F7F4ED" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="glassG" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#F7F4ED" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#D7E2DA" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="sheenG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="bodyClipL">
          <path d="M56,268 C56,238 84,220 124,212 L194,198 C222,156 262,130 322,122 C390,113 456,118 504,132 C548,145 588,169 626,194 L668,206 C696,215 708,230 708,254 L708,274 C708,284 701,291 691,291 L73,291 C63,291 56,284 56,274 Z" />
        </clipPath>
      </defs>

      {/* ground */}
      <ellipse cx="384" cy="330" rx="298" ry="20" fill="#12161A" opacity="0.08" />
      <path d="M60 330 H700" stroke="#12161A" strokeOpacity="0.12" strokeWidth="1.5" />

      {/* body */}
      <path
        d="M56,268 C56,238 84,220 124,212 L194,198 C222,156 262,130 322,122 C390,113 456,118 504,132 C548,145 588,169 626,194 L668,206 C696,215 708,230 708,254 L708,274 C708,284 701,291 691,291 L73,291 C63,291 56,284 56,274 Z"
        fill="url(#bodyG)"
      />
      <path
        d="M56,268 C56,238 84,220 124,212 L194,198 C222,156 262,130 322,122 C390,113 456,118 504,132 C548,145 588,169 626,194 L668,206 C696,215 708,230 708,254"
        fill="none"
        stroke="url(#topLight)"
        strokeWidth="4"
      />

      {/* glass */}
      <path d="M230,196 C252,160 288,140 330,135 L368,133 L368,196 Z" fill="url(#glassG)" />
      <path
        d="M386,133 L428,135 C470,139 508,154 546,178 L556,196 L386,196 Z"
        fill="url(#glassG)"
      />
      <path d="M368,133 L368,196" stroke="#0D2E1F" strokeWidth="4" />

      {/* panel lines */}
      <g stroke="#F7F4ED" strokeOpacity="0.16" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M240,202 C264,220 266,252 260,284" />
        <path d="M398,198 C420,220 424,254 418,286" />
        <path d="M124,244 L668,244" strokeOpacity="0.10" />
      </g>

      {/* handles */}
      <g fill="#F7F4ED" fillOpacity="0.5">
        <rect x="290" y="220" width="30" height="6" rx="3" />
        <rect x="446" y="222" width="30" height="6" rx="3" />
      </g>

      {/* lamps */}
      <path d="M680,228 q26,4 26,18 l-30,2 Z" fill="#F7F4ED" fillOpacity="0.95" />
      <path d="M64,238 q-8,6 -6,16 l26,-2 Z" fill="#B65F33" />

      {/* sheen */}
      <g clipPath="url(#bodyClipL)">
        <rect x="-320" y="90" width="180" height="260" fill="url(#sheenG)" className="animate-sheen" />
      </g>

      {/* wheels */}
      {[212, 552].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="284" r="56" fill="#12161A" />
          <circle cx={cx} cy="284" r="33" fill="#F7F4ED" />
          <circle cx={cx} cy="284" r="33" fill="none" stroke="#12161A" strokeOpacity="0.15" strokeWidth="2" />
          <g stroke="#14452F" strokeOpacity="0.6" strokeWidth="3.5" strokeLinecap="round">
            <path d={`M${cx},258 L${cx},268`} />
            <path d={`M${cx},300 L${cx},310`} />
            <path d={`M${cx - 26},284 L${cx - 16},284`} />
            <path d={`M${cx + 16},284 L${cx + 26},284`} />
            <path d={`M${cx - 19},265 L${cx - 11},273`} />
            <path d={`M${cx + 11},295 L${cx + 19},303`} />
            <path d={`M${cx + 19},265 L${cx + 11},273`} />
            <path d={`M${cx - 11},295 L${cx - 19},303`} />
          </g>
          <circle cx={cx} cy="284" r="6" fill="#B65F33" />
        </g>
      ))}

      {/* water droplets */}
      <g fill="none" stroke="#14452F" strokeOpacity="0.35" strokeWidth="2">
        <circle cx="128" cy="118" r="7" />
        <circle cx="622" cy="92" r="9" />
        <circle cx="392" cy="60" r="5" />
      </g>
      <g fill="#B65F33" fillOpacity="0.55">
        <circle cx="262" cy="76" r="4" className="animate-floaty" />
        <circle cx="546" cy="58" r="3" className="animate-floaty" />
        <circle cx="86" cy="178" r="3.5" className="animate-floaty" />
      </g>
    </svg>
  );
}
