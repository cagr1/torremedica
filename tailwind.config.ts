import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1E3D",
        "navy-light": "#162D56",
        gold: "#B5882B",
        "gold-light": "#D4AA50",
        "gold-pale": "#FBF4E3",
        cream: "#F9F6F0",
        "medical-green": "#0D9488",
        "on-surface": "#111827",
        "on-surface-variant": "#6B7280",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
