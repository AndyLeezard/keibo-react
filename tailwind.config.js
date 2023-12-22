import plugin from "tailwindcss/plugin"
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fira-sans": ["Fira Sans", "sans-serif"],
        "gamja-flower": ["Gamja Flower", "sans-serif"],
      },
      textShadow: {
        sm: "0px 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0px 2px 4px var(--tw-shadow-color)",
        lg: "0px 8px 16px var(--tw-shadow-color)",
        thin: "0px 1px 1px var(--tw-shadow-color)",
        below: "0px 2px 1px var(--tw-shadow-color)",
        thick: "0px 2px 2px var(--tw-shadow-color)",
        around:
          "0px 1px 1px var(--tw-shadow-color), 0px -1px 1px var(--tw-shadow-color), 1px 0px 1px var(--tw-shadow-color), -1px 0px 1px var(--tw-shadow-color)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        float: {
          from: { transform: "translate(0, 0)" },
          to: { transform: "translate(0, -16px)" },
        },
        sink: {
          from: { transform: "translate(0, -16px)", opacity: 1 },
          to: { transform: "translate(0, 0px)", opacity: 0 },
        },
        wiggle: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "20%": { transform: "translate(-2px, 0) rotate(-2deg)" },
          "30%": { transform: "translate(3px, 0) rotate(3deg)" },
          "50%": { transform: "translate(-2px, 0) rotate(-2deg)" },
          "60%": { transform: "translate(1px, 0) rotate(1deg)" },
          "100%": { transform: "translate(0, 0) rotate(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s forwards",
        "fade-out": "fadeOut 1s forwards",
        "fade-in-slow": "fadeIn 3s forwards",
        "fade-out-slow": "fadeOut 3s forwards",
        "float-in": "float 1s forwards",
        "sink-in": "sink 1s forwards",
        "spin-slow": "spin 5s linear infinite",
        "pulse-slow": "pulse 5s linear infinite",
        wiggle: "wiggle 1.75s cubic-bezier(.36,.07,.19,.97) infinite",
      },
    },
  },
  plugins: [
    daisyui,
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      )
    }),
  ],
}
