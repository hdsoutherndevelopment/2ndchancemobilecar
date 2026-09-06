export default function CarHero({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 420"
      className={className}
      role="img"
      aria-label="Illustration of a freshly valeted car with a mirror finish"
    >
      <defs>
        <linearGradient id="paint" x1="0.1" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#33455C" />
          <stop offset="38%" stopColor="#1B2634" />
          <stop offset="100%" stopColor="#080C12" />
        </linearGradient>
        <linearGradient id="paintTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8FA6BE" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#8FA6BE" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#8FA6BE" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9BF6E7" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#2FDCC2" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#4C8DFF" stopOpacity="0.10" />
        </linearGradient>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="reflect" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2FDCC2" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2FDCC2" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2FDCC2" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#2FDCC2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tyre" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#161C24" />
          <stop offset="100%" stopColor="#070A0E" />
        </linearGradient>
        <clipPath id="carClip">
          <path d="M62,262 C62,232 88,214 128,206 L196,192 C224,150 264,124 322,116 C388,107 452,112 500,126 C544,139 584,163 622,188 L664,200 C692,209 704,224 704,248 L704,268 C704,278 697,285 687,285 L79,285 C69,285 62,278 62,268 Z" />
        </clipPath>
      </defs>

      <ellipse cx="384" cy="330" rx="300" ry="42" fill="url(#halo)" />

      {/* body */}
      <path
        d="M62,262 C62,232 88,214 128,206 L196,192 C224,150 264,124 322,116 C388,107 452,112 500,126 C544,139 584,163 622,188 L664,200 C692,209 704,224 704,248 L704,268 C704,278 697,285 687,285 L79,285 C69,285 62,278 62,268 Z"
        fill="url(#paint)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.6"
      />
      <path
        d="M62,262 C62,232 88,214 128,206 L196,192 C224,150 264,124 322,116 C388,107 452,112 500,126 C544,139 584,163 622,188 L664,200 C692,209 704,224 704,248"
        fill="none"
        stroke="url(#paintTop)"
        strokeWidth="4"
      />

      {/* glass */}
      <path d="M232,190 C254,154 288,134 330,129 L368,127 L368,190 Z" fill="url(#glass)" />
      <path
        d="M386,127 L428,129 C470,133 508,148 546,172 L556,190 L386,190 Z"
        fill="url(#glass)"
      />
      <path d="M368,127 L368,190" stroke="rgba(255,255,255,0.14)" strokeWidth="3" />

      {/* panel lines */}
      <g stroke="rgba(255,255,255,0.07)" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M242,196 C266,214 268,246 262,278" />
        <path d="M398,192 C420,214 424,248 418,280" />
        <path d="M128,238 L664,238" strokeOpacity="0.5" />
      </g>

      {/* door handles */}
      <g fill="rgba(255,255,255,0.22)">
        <rect x="292" y="214" width="30" height="6" rx="3" />
        <rect x="446" y="216" width="30" height="6" rx="3" />
      </g>

      {/* lights */}
      <path d="M676,222 q26,4 26,18 l-30,2 Z" fill="#9BF6E7" fillOpacity="0.85" />
      <path d="M70,232 q-8,6 -6,16 l26,-2 Z" fill="#FF7A7A" fillOpacity="0.65" />

      {/* sheen sweep */}
      <g clipPath="url(#carClip)">
        <rect x="-320" y="80" width="170" height="260" fill="url(#sheen)" className="animate-sheen" />
      </g>

      {/* wheels */}
      <g>
        <circle cx="212" cy="278" r="56" fill="url(#tyre)" stroke="rgba(255,255,255,0.10)" strokeWidth="2" />
        <circle cx="212" cy="278" r="32" fill="#0D131B" stroke="#2FDCC2" strokeOpacity="0.45" strokeWidth="2" />
        <g stroke="#8FA6BE" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round">
          <path d="M212,250 L212,264" />
          <path d="M212,292 L212,306" />
          <path d="M184,278 L198,278" />
          <path d="M226,278 L240,278" />
          <path d="M192,258 L202,268" />
          <path d="M222,288 L232,298" />
          <path d="M232,258 L222,268" />
          <path d="M202,288 L192,298" />
        </g>
        <circle cx="212" cy="278" r="7" fill="#2FDCC2" fillOpacity="0.85" />
      </g>
      <g>
        <circle cx="552" cy="278" r="56" fill="url(#tyre)" stroke="rgba(255,255,255,0.10)" strokeWidth="2" />
        <circle cx="552" cy="278" r="32" fill="#0D131B" stroke="#2FDCC2" strokeOpacity="0.45" strokeWidth="2" />
        <g stroke="#8FA6BE" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round">
          <path d="M552,250 L552,264" />
          <path d="M552,292 L552,306" />
          <path d="M524,278 L538,278" />
          <path d="M566,278 L580,278" />
          <path d="M532,258 L542,268" />
          <path d="M562,288 L572,298" />
          <path d="M572,258 L562,268" />
          <path d="M542,288 L532,298" />
        </g>
        <circle cx="552" cy="278" r="7" fill="#2FDCC2" fillOpacity="0.85" />
      </g>

      {/* wet floor reflection */}
      <g opacity="0.7">
        <path
          d="M120,318 C240,306 470,306 640,318 L600,340 L170,340 Z"
          fill="url(#reflect)"
        />
        <g stroke="#2FDCC2" strokeOpacity="0.28" strokeWidth="2" strokeLinecap="round">
          <path d="M180,330 L300,330" />
          <path d="M330,338 L430,338" />
          <path d="M460,330 L580,330" />
        </g>
      </g>

      {/* droplets */}
      <g fill="#77F3E1">
        <circle cx="120" cy="120" r="4" fillOpacity="0.7" className="animate-floaty" />
        <circle cx="628" cy="96" r="5" fillOpacity="0.6" className="animate-floaty" />
        <circle cx="392" cy="58" r="3" fillOpacity="0.75" className="animate-floaty" />
        <circle cx="262" cy="72" r="3.5" fillOpacity="0.55" className="animate-floaty" />
        <circle cx="546" cy="60" r="2.6" fillOpacity="0.7" className="animate-floaty" />
        <circle cx="80" cy="176" r="2.6" fillOpacity="0.5" className="animate-floaty" />
      </g>
    </svg>
  );
}
