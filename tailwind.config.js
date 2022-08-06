/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.js",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    }
  },
  daisyui: {
    themes: ["lofi"]
  },
  plugins: [require("daisyui")],
}
