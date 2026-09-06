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
        paper: {
          DEFAULT: "#F7F4ED",
          dark: "#EFE9DC",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#12161A",
          soft: "#3F474E",
          mute: "#767E86",
        },
        forest: {
          DEFAULT: "#14452F",
          600: "#1B5A3C",
          400: "#3C7C5C",
          100: "#E2EDE6",
        },
        copper: {
          DEFAULT: "#B65F33",
          400: "#D08355",
          100: "#F6E6DC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,22,26,0.04), 0 14px 34px -22px rgba(18,22,26,0.35)",
        lift: "0 2px 4px rgba(18,22,26,0.05), 0 28px 50px -26px rgba(18,22,26,0.45)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      keyframes: {
        sheen: {
          "0%": { transform: "translateX(-140%) skewX(-16deg)" },
          "60%, 100%": { transform: "translateX(360%) skewX(-16deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        sheen: "sheen 7s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-ring": "pulseRing 3s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
