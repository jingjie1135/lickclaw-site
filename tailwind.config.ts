import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: { DEFAULT: "#000000", secondary: "#111318" },
        "border-subtle": "rgba(255,255,255,0.06)",
        brand: {
          red: "#FF4500",
          "red-light": "#FF5722",
          cyan: "#00D4FF",
          purple: "#8B5CF6",
          orange: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
