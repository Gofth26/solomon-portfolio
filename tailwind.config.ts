import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070a0f",
        panel: "#0d131c",
        lime: "#b8f451",
        cyan: "#66e3ff",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(184, 244, 81, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
