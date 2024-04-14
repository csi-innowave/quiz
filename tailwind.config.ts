import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fjalla: ["Fjalla One"],
      jersey: ["'Jersey 15'"],
      spartan: ["League Spartan"],
    },
    extend: {},
    screens: {
      largest: "1600px",
      tablet: "640px",

      laptop: "900px",

      desktop: "1280px",

      md: "768px",

      lg: "1024px",
    },
  },
  plugins: [addVariablesForColors, require("@tailwindcss/forms")],
  darkMode: "class",
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
