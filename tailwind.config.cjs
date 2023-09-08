/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        bubble: {
          "0%": { transform: "translateY(0px); opacity: 0; scale: 0" },
          "70%": { opacity: 1, scale: 1 },
          "100%": { transform: "translateY(-140px); opacity: 0" },
        },
      },
      animation: {
        bubble: "bubble 1s ease-out infinite",
      },
    },
  },
  plugins: [],
};
