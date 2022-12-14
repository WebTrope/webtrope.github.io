/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],

  darkMode: "class",

  plugins: [require("flowbite/plugin")],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Roboto Serif", "serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
