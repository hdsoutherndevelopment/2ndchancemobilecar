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
          DEFAULT: "#080C11",
          900: "#0B1017",
          800: "#111823",
          700: "#18212E",
          600: "#222E3D",
        },
        aqua: {
          DEFAULT: "#33D6C0",
          light: "#6FEBDA",
          dark: "#12A491",
        },
        chrome: {
          DEFAULT: "#C6D2DE",
          dim: "#96A4B2",
          muted: "#7C8A99",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(51, 214, 192, 0.45)",
        card: "0 20px 50px -25px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(8,12,17,0) 0%, rgba(8,12,17,1) 100%)",
      },
      keyframes: {
        sheen: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(320%) skewX(-18deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        sheen: "sheen 4.5s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
