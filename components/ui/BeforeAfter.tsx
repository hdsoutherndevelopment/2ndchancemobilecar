"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

const GRIME =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.035 0.06' numOctaves='4' seed='7'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='0.55'/%3E%3C/svg%3E\")";

export default function BeforeAfter({
  src,
  alt,
  label,
  title,
}: {
  src: string;
  alt: string;
  label: string;
  title: string;
}) {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <figure className="group">
      <div
        ref={wrap}
        className="img-bed relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/10]"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        {/* AFTER — the real photo */}
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 33vw" quality={72} className="object-cover" />

        {/* BEFORE — same shot, graded to show the state it arrived in */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image
            src={src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            quality={60}
            className="object-cover"
            style={{ filter: "grayscale(0.55) sepia(0.34) saturate(0.7) brightness(0.62) contrast(0.82) blur(0.6px)" }}
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ backgroundImage: GRIME, opacity: 0.5 }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#3a2f22]/25" aria-hidden="true" />
        </div>

        {/* Divider */}
        <div className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/15 backdrop-blur-md">
            <span className="text-[13px] font-bold tracking-tighter text-white" aria-hidden="true">
              ‹ ›
            </span>
          </span>
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-steel-200 backdrop-blur">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-950">
          After
        </span>

        <label className="sr-only" htmlFor={`ba-${label}`}>
          Reveal the after image for {title}
        </label>
        <input
          id={`ba-${label}`}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-0 z-20 h-10 w-full cursor-ew-resize opacity-0"
          aria-label={`Before and after slider — ${title}`}
        />
      </div>
      <figcaption className="mt-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-soft">{label}</span>
        <p className="mt-1.5 font-display text-[19px] font-bold uppercase tracking-tight text-white">{title}</p>
      </figcaption>
    </figure>
  );
}
