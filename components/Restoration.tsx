"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MoveHorizontal } from "lucide-react";

function Interior({ dirty }: { dirty: boolean }) {
  const bg = dirty ? "#D8D1C2" : "#F7F4ED";
  const seatTop = dirty ? "#9C8F76" : "#DCE6DE";
  const seatBottom = dirty ? "#6F6551" : "#B9CEC1";
  const trim = dirty ? "#8A7F69" : "#CBD8CE";
  const stitch = dirty ? "rgba(60,50,35,0.25)" : "#14452F";

  return (
    <svg viewBox="0 0 640 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`seat-${dirty}`} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor={seatTop} />
          <stop offset="100%" stopColor={seatBottom} />
        </linearGradient>
      </defs>

      <rect width="640" height="420" fill={bg} />

      {/* door card */}
      <path d="M0 92 L156 62 L156 420 L0 420 Z" fill={trim} opacity="0.55" />
      <path d="M24 252 L136 234 L136 262 L24 282 Z" fill="#12161A" opacity="0.10" />

      {/* headrest */}
      <rect x="238" y="52" width="150" height="70" rx="26" fill={`url(#seat-${dirty})`} />
      <rect x="292" y="118" width="14" height="22" fill={seatBottom} />
      <rect x="330" y="118" width="14" height="22" fill={seatBottom} />

      {/* backrest */}
      <path
        d="M226 140 C226 128 236 120 250 120 L378 120 C392 120 402 128 402 140 L410 300 L218 300 Z"
        fill={`url(#seat-${dirty})`}
      />
      <path d="M226 140 L252 138 L246 300 L218 300 Z" fill="#12161A" opacity="0.10" />
      <path d="M402 140 L376 138 L382 300 L410 300 Z" fill="#12161A" opacity="0.10" />

      <g stroke={stitch} strokeWidth="2" strokeDasharray="6 7" fill="none" opacity="0.8">
        <path d="M262 130 L268 296" />
        <path d="M366 130 L360 296" />
      </g>

      {/* base */}
      <path
        d="M206 300 L422 300 L444 372 C446 380 440 386 432 386 L196 386 C188 386 182 380 184 372 Z"
        fill={`url(#seat-${dirty})`}
      />
      <g stroke={stitch} strokeWidth="2" strokeDasharray="6 7" fill="none" opacity="0.8">
        <path d="M258 306 L250 380" />
        <path d="M372 306 L380 380" />
      </g>

      {/* seat belt */}
      <path
        d="M404 128 L470 300"
        stroke={dirty ? "#5E5442" : "#14452F"}
        strokeWidth="13"
        strokeLinecap="round"
        opacity={dirty ? 0.8 : 0.85}
      />

      {/* floor + console */}
      <path d="M156 386 L640 386 L640 420 L0 420 L0 400 Z" fill={trim} opacity="0.75" />
      <path d="M470 300 L640 268 L640 386 L470 386 Z" fill={trim} opacity="0.5" />
      <circle cx="556" cy="330" r="22" fill="#12161A" opacity="0.12" />

      {dirty ? (
        <g>
          <g fill="#5F5238" fillOpacity="0.35">
            <ellipse cx="300" cy="236" rx="42" ry="28" />
            <ellipse cx="352" cy="194" rx="20" ry="14" />
            <ellipse cx="292" cy="342" rx="46" ry="20" />
            <ellipse cx="392" cy="352" rx="22" ry="12" />
          </g>
          <g fill="#4A4130" fillOpacity="0.55">
            <circle cx="248" cy="352" r="3" />
            <circle cx="330" cy="366" r="2.4" />
            <circle cx="286" cy="374" r="3.4" />
            <circle cx="404" cy="336" r="2.6" />
            <circle cx="222" cy="330" r="2.2" />
            <circle cx="540" cy="356" r="3" />
          </g>
          <g stroke="#4A4130" strokeOpacity="0.4" strokeWidth="1.6" fill="none" strokeLinecap="round">
            <path d="M236 200 q16 -10 30 2" />
            <path d="M320 268 q18 -12 34 0" />
            <path d="M258 316 q14 -10 28 0" />
            <path d="M368 224 q16 -10 30 2" />
            <path d="M214 398 q22 -10 44 2" />
          </g>
          <path d="M30 302 q40 -18 96 -6" stroke="#4A4130" strokeOpacity="0.3" strokeWidth="5" fill="none" />
        </g>
      ) : (
        <g>
          <path
            d="M244 156 q40 -24 80 -6"
            stroke="#FFFFFF"
            strokeOpacity="0.75"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M214 330 q46 -16 92 -2"
            stroke="#FFFFFF"
            strokeOpacity="0.55"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <g fill="#B65F33">
            <circle cx="286" cy="176" r="3.4" />
            <circle cx="392" cy="252" r="3" />
            <circle cx="322" cy="340" r="2.6" />
          </g>
        </g>
      )}
    </svg>
  );
}

export default function Restoration() {
  const [pos, setPos] = useState(52);

  return (
    <section className="bg-forest py-24 text-paper sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow !text-copper-400 before:!bg-copper-400/50">
            The second chance
          </span>
          <h2 className="h2 mt-6 text-balance !text-paper">
            The jobs everyone else says are too far gone
          </h2>
          <p className="lede mt-6 !text-paper/75">
            Ex-work vans, family cars that have carried three kids and a dog, part-exchanges
            that need to look sellable by Friday. Hot extraction, machine polishing and a lot
            of patience get results people do not expect.
          </p>

          <ul className="mt-9 divide-y divide-paper/15 border-y border-paper/15">
            {[
              "Hot-water extraction on seats and carpets",
              "Odour treatment, not just air freshener",
              "Paint corrected, then protected",
            ].map((line, i) => (
              <li key={line} className="flex items-baseline gap-4 py-3.5">
                <span className="font-display text-[13px] text-copper-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] font-semibold text-paper/90">{line}</span>
              </li>
            ))}
          </ul>

          <a href="#quote" className="btn-copper mt-9">
            Send us your worst
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl bg-paper p-2.5 shadow-lift"
        >
          <div className="relative aspect-[640/420] overflow-hidden rounded-xl">
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
              className="pointer-events-none absolute inset-y-0 w-[2px] bg-copper"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-copper text-paper shadow-lift">
                <MoveHorizontal className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </div>

            <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-ink/80 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-paper">
              Before
            </span>
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-forest px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-paper">
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
          <p className="px-3 py-3 text-center text-[11px] text-ink-mute">
            Drag to compare. Illustration of a typical interior restoration — replace with the
            client&apos;s own photography before launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
