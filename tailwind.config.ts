import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue":      "#0E4FA3",
        "brand-blue-deep": "#0A3878",
        "brand-blue-soft": "#E8F0FB",
        "brand-blue-tint": "#F4F8FE",
        orange:            "#F08A2C",
        cream:             "#FAF6EE",
        ink:               "#0B1220",
        "ink-soft":        "#28344A",
        muted:             "#6B7891",
        line:              "#E6EAF1",
      },
      fontFamily: {
        sans: ["Vazirmatn", "Tahoma", "Arial", "sans-serif"],
        en:   ["Manrope",   "Vazirmatn", "Arial", "sans-serif"],
      },
      borderRadius: {
        sm:   "14px",
        md:   "22px",
        lg:   "36px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 8px 32px -12px rgba(14,79,163,.18)",
        soft: "0 2px 14px rgba(11,18,32,.06)",
        lift: "0 24px 60px -20px rgba(14,79,163,.32)",
      },
    }
  },
  plugins: []
};

export default config;
