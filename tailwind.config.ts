import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05080C",
          950: "#05080C",
          900: "#080C12",
          800: "#0D131B",
          700: "#141C26",
          600: "#1D2733",
        },
        aqua: {
          DEFAULT: "#2FDCC2",
          light: "#77F3E1",
          dark: "#0F9B89",
        },
        electric: {
          DEFAULT: "#4C8DFF",
          dark: "#2B5FC4",
        },
        chrome: {
          DEFAULT: "#D3DCE6",
          muted: "#7D8B9B",
          dim: "#5B687860",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        glow: "0 0 70px -18px rgba(47, 220, 194, 0.55)",
        card: "0 24px 60px -30px rgba(0, 0, 0, 0.9)",
        lift: "0 40px 80px -40px rgba(0, 0, 0, 0.95)",
      },
      keyframes: {
        sheen: {
          "0%": { transform: "translateX(-140%) skewX(-18deg)" },
          "60%, 100%": { transform: "translateX(360%) skewX(-18deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-9px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "-200% 50%" },
        },
      },
      animation: {
        sheen: "sheen 6s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "pulse-ring": "pulseRing 3s ease-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
