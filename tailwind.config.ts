import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d4ed8",
          dark: "#1e40af",
        },
        surface: "rgba(255,255,255,0.92)",
        muted: "#e2e8f0",
      },
    },
  },
  plugins: [],
};

export default config;
