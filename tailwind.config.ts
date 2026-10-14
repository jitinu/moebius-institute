import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        "paper-deep": "#F2F1EC",
        ink: "#1B1B19",
        "ink-soft": "#3D3C38",
        muted: "#6B6965",
        rule: "#E2E0D9",
        ochre: "#9C7A45",
        "ochre-soft": "#C8B38F",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 6.5vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.25rem, 1.8vw, 1.625rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        lede: ["clamp(1.125rem, 1.4vw, 1.375rem)", { lineHeight: "1.5" }],
      },
      maxWidth: { site: "84rem", prose: "40rem" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};

export default config;
