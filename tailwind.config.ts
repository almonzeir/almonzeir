import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#ededed",
        primary: {
          DEFAULT: "#00f0ff",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#7c3aed",
          foreground: "#ffffff",
        },
        // Custom project gradients
        emerald: { 500: "#10b981", 600: "#059669" },
        teal: { 500: "#14b8a6", 600: "#0d9488" },
        cyan: { 500: "#06b6d4", 600: "#0891b2", 900: "#164e63" },
        sky: { 500: "#0ea5e9", 600: "#0284c7" },
        blue: { 500: "#3b82f6", 600: "#2563eb" },
        indigo: { 500: "#6366f1", 600: "#4f46e5" },
        violet: { 500: "#8b5cf6", 600: "#7c3aed" },
        purple: { 500: "#a855f7", 600: "#9333ea" },
        orange: { 500: "#f97316", 600: "#ea580c" },
        rose: { 500: "#f43f5e", 600: "#e11d48" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        arabic: ["Tajawal", "sans-serif"], // Placeholder for Arabic font
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 240, 255, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
