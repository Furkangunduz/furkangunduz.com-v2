/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(239, 242, 232)",
        "primary-section-shadow": "rgba(214, 205, 164, 0.4);",
        "secondary": "rgb(214, 205, 164)",
        "secondary-section-shadow": "rgba(214, 205, 164, 0.4);",
        "tagBg": "#495c83",
        "textColor": "#000",
        "buttonBg": "#6c6f70",
        "buttonText": "#fff"
      }
    },
  },
  plugins: [],
}