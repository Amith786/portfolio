/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F6F1E6",
          soft: "#EFE7D4",
        },
        ink: {
          DEFAULT: "#181410",
          muted: "#5C5548",
        },
        void: {
          DEFAULT: "#0D0C0A",
          soft: "#17140F",
          line: "#26221A",
        },
        bone: {
          DEFAULT: "#EFE9DC",
          muted: "#A8A093",
        },
        gold: {
          DEFAULT: "#C69A3E",
          bright: "#E4BE6B",
          dim: "#8A6C2C",
        },
        slate: {
          DEFAULT: "#4C6478",
          bright: "#7C97AC",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        "gold-glow": "0 0 0 1px rgba(198,154,62,0.35), 0 8px 40px -12px rgba(198,154,62,0.35)",
        card: "0 1px 2px rgba(0,0,0,0.04)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "reveal-x": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
