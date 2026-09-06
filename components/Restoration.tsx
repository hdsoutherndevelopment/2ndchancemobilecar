"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MoveHorizontal } from "lucide-react";

function Interior({ dirty }: { dirty: boolean }) {
  const seat = dirty ? "#3B372F" : "#22303F";
  const seatDark = dirty ? "#241F19" : "#111A24";
  const trim = dirty ? "#2C2822" : "#18222E";
  const stitch = dirty ? "rgba(255,255,255,0.06)" : "rgba(47,220,194,0.35)";

  return (
    <svg viewBox="0 0 640 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`seatG-${dirty}`} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor={seat} />
          <stop offset="100%" stopColor={seatDark} />
        </linearGradient>
        <linearGradient id={`floorG-${dirty}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={trim} />
          <stop offset="100%" stopColor={dirty ? "#1A1712" : "#0B1119"} />
        </linearGradient>
        <radialGradient id={`lightG-${dirty}`} cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor={dirty ? "#6B6252" : "#2FDCC2"} stopOpacity={dirty ? 0.10 : 0.16} />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="420" fill={dirty ? "#15120E" : "#070B11"} />
      <rect width="640" height="420" fill={`url(#lightG-${dirty})`} />

      {/* door card / background panel */}
      <path d="M0 90 L160 60 L160 420 L0 420 Z" fill={trim} opacity="0.85" />
      <path d="M22 250 L140 232 L140 262 L22 282 Z" fill="#000" opacity="0.25" />

      {/* headrest */}
      <rect x="238" y="52" width="150" height="70" rx="26" fill={`url(#seatG-${dirty})`} />
      <rect x="292" y="118" width="14" height="22" fill={seatDark} />
      <rect x="330" y="118" width="14" height="22" fill={seatDark} />

      {/* backrest */}
      <path
        d="M226 140 C226 128 236 120 250 120 L378 120 C392 120 402 128 402 140 L410 300 L218 300 Z"
        fill={`url(#seatG-${dirty})`}
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="2"
      />
      {/* bolsters */}
      <path d="M226 140 L252 138 L246 300 L218 300 Z" fill="#000" opacity="0.18" />
      <path d="M402 140 L376 138 L382 300 L410 300 Z" fill="#000" opacity="0.18" />

      {/* stitching */}
      <g stroke={stitch} strokeWidth="2" strokeDasharray="6 7" fill="none">
        <path d="M262 130 L268 296" />
        <path d="M366 130 L360 296" />
      </g>

      {/* seat base */}
      <path
        d="M206 300 L422 300 L444 372 C446 380 440 386 432 386 L196 386 C188 386 182 380 184 372 Z"
        fill={`url(#seatG-${dirty})`}
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="2"
      />
      <g stroke={stitch} strokeWidth="2" strokeDasharray="6 7" fill="none">
        <path d="M258 306 L250 380" />
        <path d="M372 306 L380 380" />
      </g>

      {/* seat belt */}
      <path
        d="M404 128 L470 300"
        stroke={dirty ? "#4A4234" : "#2C3B4C"}
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* floor */}
      <path d="M160 386 L640 386 L640 420 L0 420 L0 400 Z" fill={`url(#floorG-${dirty})`} />
      <rect x="196" y="392" width="250" height="18" rx="6" fill="#000" opacity="0.3" />

      {/* centre console hint */}
      <path d="M470 300 L640 268 L640 386 L470 386 Z" fill={trim} opacity="0.7" />
      <circle cx="556" cy="330" r="22" fill="#000" opacity="0.3" />
      <circle cx="556" cy="330" r="14" fill={dirty ? "#2B261E" : "#101922"} />

      {dirty ? (
        <g>
          {/* stains */}
          <g fill="#6E6045" fillOpacity="0.5">
            <ellipse cx="300" cy="236" rx="42" ry="28" />
            <ellipse cx="352" cy="196" rx="20" ry="14" />
            <ellipse cx="292" cy="342" rx="46" ry="20" />
            <ellipse cx="392" cy="352" rx="22" ry="12" />
          </g>
          {/* crumbs */}
          <g fill="#8A7A58" fillOpacity="0.75">
            <circle cx="248" cy="352" r="3" />
            <circle cx="330" cy="366" r="2.4" />
            <circle cx="286" cy="374" r="3.4" />
            <circle cx="404" cy="336" r="2.6" />
            <circle cx="222" cy="330" r="2.2" />
            <circle cx="540" cy="356" r="3" />
            <circle cx="586" cy="342" r="2.4" />
          </g>
          {/* pet hair */}
          <g stroke="#9A8B6B" strokeOpacity="0.6" strokeWidth="1.6" fill="none" strokeLinecap="round">
            <path d="M236 200 q16 -10 30 2" />
            <path d="M320 268 q18 -12 34 0" />
            <path d="M258 316 q14 -10 28 0" />
            <path d="M368 224 q16 -10 30 2" />
            <path d="M214 398 q22 -10 44 2" />
            <path d="M330 402 q22 -10 44 2" />
          </g>
          {/* scuff on door card */}
          <path d="M30 300 q40 -18 96 -6" stroke="#7A6C51" strokeOpacity="0.5" strokeWidth="5" fill="none" />
        </g>
      ) : (
        <g>
          {/* highlights + droplets */}
          <path
            d="M244 156 q40 -26 80 -6"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M214 330 q46 -16 92 -2"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <g fill="#77F3E1" fillOpacity="0.9">
            <circle cx="286" cy="176" r="3.4" />
            <circle cx="392" cy="252" r="3" />
            <circle cx="322" cy="340" r="2.6" />
            <circle cx="524" cy="312" r="2.6" />
            <circle cx="120" cy="220" r="2.4" />
          </g>
        </g>
      )}
    </svg>
  );
}

export default function Restoration() {
  const [pos, setPos] = useState(52);

  return (
    <section className="py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">The second chance</span>
          <h2 className="h2 mt-5 text-balance">
            The jobs everyone else says are too far gone
          </h2>
          <p className="lede mt-6">
            Ex-work vans, family cars that have carried three kids and a dog, part-exchanges
            that need to look sellable by Friday. Hot extraction, machine polishing and a lot
            of patience get results people do not expect.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "Hot-water extraction on seats and carpets",
              "Odour treatment, not just air freshener",
              "Paint corrected, then protected",
            ].map((line) => (
              <p key={line} className="flex items-start gap-3 text-sm text-chrome">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                {line}
              </p>
            ))}
          </div>
          <a href="#quote" className="btn-primary mt-9">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
            Send us your worst
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="panel overflow-hidden p-2.5"
        >
          <div className="relative aspect-[640/420] overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <Interior dirty />
            </div>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
              <Interior dirty={false} />
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 w-[2px] bg-aqua shadow-glow"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-aqua bg-ink-950/90 text-aqua backdrop-blur">
                <MoveHorizontal className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </div>

            <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/85 backdrop-blur">
              Before
            </span>
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-aqua/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-950 backdrop-blur">
              After
            </span>

            <label className="sr-only" htmlFor="restoration-slider">
              Reveal the restored interior
            </label>
            <input
              id="restoration-slider"
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
          <p className="px-3 py-3.5 text-center text-[11px] text-chrome-muted">
            Drag to compare. Illustration of a typical interior restoration — replace with the
            client&apos;s own before and after photography before launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
