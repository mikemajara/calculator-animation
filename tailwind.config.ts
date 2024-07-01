import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionTimingFunction: {
        "in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
        "in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
        "in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",

        "out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",

        "in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
        "in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
        "in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
        "in-out-expo": "cubic-bezier(1, 0, 0, 1)",
        "in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      },
      colors: {
        "ios-orange": {
          "50": "#fff9ed",
          "100": "#fff1d4",
          "200": "#ffe0a9",
          "300": "#ffc872",
          "400": "#fea639",
          "500": "#fd9426",
          "600": "#ee6e08",
          "700": "#c55309",
          "800": "#9c4110",
          "900": "#7e3710",
          "950": "#441906",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === "string"
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
} satisfies Config;

export default config;
