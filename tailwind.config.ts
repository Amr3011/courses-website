/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "heading-color": "#000",
        "primary-color": "#1a69df",
        "dark-color": "#093e74",
        "border": "#bcc8cc",
        "subtle-color": "#ecf9ff",
        "light-color": "#a2dbff",
        "sub-title": "#202020",
        "text": "#353738",
        "light-text": "#535557",
        "background-accent": "#f2f5f5",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ['"Inter Tight"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
