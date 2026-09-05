"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function Panel({ dirty }: { dirty: boolean }) {
  return (
    <svg viewBox="0 0 600 380" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={dirty ? "seatDirty" : "seatClean"} x1="0" y1="0" x2="0" y2="1">
          {dirty ? (
            <>
              <stop offset="0%" stopColor="#3A362E" />
              <stop offset="100%" stopColor="#221F1A" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#243243" />
              <stop offset="100%" stopColor="#131C27" />
            </>
          )}
        </linearGradient>
      </defs>

      <rect width="600" height="380" fill={dirty ? "#171512" : "#0C121A"} />

      <path
        d="M150 300 L150 150 C150 110 190 88 240 88 L360 88 C410 88 450 110 450 150 L450 300 Z"
        fill={`url(#${dirty ? "seatDirty" : "seatClean"})`}
        stroke={dirty ? "rgba(255,255,255,0.06)" : "rgba(51,214,192,0.25)"}
        strokeWidth="2"
      />
      <path d="M300 96 L300 300" stroke="rgba(0,0,0,0.35)" strokeWidth="3" />
      <path d="M195 140 L195 296 M405 140 L405 296" stroke="rgba(0,0,0,0.25)" strokeWidth="3" />

      <rect x="120" y="300" width="360" height="46" rx="10" fill={dirty ? "#2A2620" : "#18222E"} />

      {dirty ? (
        <g fill="#6B5F49" fillOpacity="0.55">
          <ellipse cx="250" cy="210" rx="34" ry="24" />
          <ellipse cx="365" cy="176" rx="22" ry="16" />
          <ellipse cx="316" cy="262" rx="28" ry="14" />
          <circle cx="214" cy="253" r="7" />
          <circle cx="392" cy="240" r="9" />
          <circle cx="286" cy="140" r="6" />
          <g stroke="#6B5F49" strokeOpacity="0.7" strokeWidth="2" fill="none">
            <path d="M180 320 q22 -12 44 0 t44 0" />
            <path d="M300 330 q22 -12 44 0 t44 0" />
          </g>
        </g>
      ) : (
        <g>
          <path
            d="M210 160 q30 -22 62 -4"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <g fill="#6FEBDA" fillOpacity="0.85">
            <circle cx="238" cy="150" r="3.5" />
            <circle cx="392" cy="196" r="3" />
            <circle cx="300" cy="268" r="2.5" />
            <circle cx="176" cy="222" r="2.5" />
          </g>
        </g>
      )}
    </svg>
  );
}

export default function Restoration() {
  const [pos, setPos] = useState(50);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">The second chance</span>
          <h2 className="h2 mt-4 text-balance">
            The jobs everyone else says are too far gone
          </h2>
          <p className="lede mt-5">
            Ex-work vans, family cars that have carried three kids and a dog, part-exchanges
            that need to look sellable by Friday. Hot extraction, machine polishing and a lot
            of patience get results people do not expect.
          </p>
          <p className="mt-4 text-sm text-chrome-muted">
            Drag the slider to see the difference a full interior restoration makes.
          </p>
          <a href="#quote" className="btn-primary mt-8">
            <Sparkles className="h-4 w-4" strokeWidth={1.9} />
            Send us your worst
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="card overflow-hidden p-2"
        >
          <div className="relative aspect-[600/380] overflow-hidden rounded-xl">
            <div className="absolute inset-0">
              <Panel dirty />
            </div>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
              <Panel dirty={false} />
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-aqua"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-aqua bg-ink text-[10px] font-bold text-aqua">
                ↔
              </span>
            </div>

            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
              Before
            </span>
            <span className="absolute bottom-3 right-3 rounded-full bg-aqua/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
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
          <p className="px-3 py-3 text-center text-[11px] text-chrome-muted">
            Illustration of a typical interior restoration. Replace with the client&apos;s own
            before and after photography before launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
