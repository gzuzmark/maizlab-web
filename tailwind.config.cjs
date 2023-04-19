/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".first-child-gap\\:20 > *:not(:first-child)": {
          "--tw-space-y-reverse": "0",
          "margin-top": "calc(5rem * calc(1 - var(--tw-space-y-reverse)))",
        },
        ".first-child-gap\\:20 > *:first-child": {
          "margin-bottom": "5rem",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
