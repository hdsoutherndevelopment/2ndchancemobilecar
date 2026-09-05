import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06070A",
          900: "#0A0C10",
          850: "#0E1116",
          800: "#12161C",
          750: "#171C24",
          700: "#1E242E",
        },
        steel: {
          100: "#F4F6F8",
          200: "#DDE2E8",
          300: "#B9C1CB",
          400: "#8F98A5",
          500: "#6B7482",
          600: "#4A525E",
        },
        accent: {
          DEFAULT: "#1F9BE0",
          soft: "#57BEF5",
          deep: "#0C6FA8",
        },
        gold: "#E8B34B",
      },
      fontFamily: {
        display: ["'Archivo Variable'", "Archivo", "Impact", "system-ui", "sans-serif"],
        sans: ["'Inter Variable'", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      opacity: { 2: "0.02", 3: "0.03", 4: "0.04", 6: "0.06", 8: "0.08", 12: "0.12", 15: "0.15", 18: "0.18", 22: "0.22", 35: "0.35", 45: "0.45", 55: "0.55", 65: "0.65", 85: "0.85", 92: "0.92", 97: "0.97" },
      maxWidth: { shell: "1280px" },
      boxShadow: {
        lift: "0 30px 70px -20px rgba(0,0,0,0.85)",
        edge: "inset 0 1px 0 rgba(255,255,255,0.07)",
      },
      backgroundImage: {
        "metal": "linear-gradient(180deg,#ffffff 0%,#cfd6de 45%,#8b94a1 60%,#eef2f6 100%)",
        "grid-fade": "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.09), transparent 60%)",
      },
      keyframes: {
        drift: { "0%,100%": { transform: "translate3d(0,0,0)" }, "50%": { transform: "translate3d(0,-14px,0)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: { drift: "drift 9s ease-in-out infinite", shimmer: "shimmer 3.5s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
