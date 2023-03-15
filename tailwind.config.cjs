/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "-2xl": { max: "1535px" },
        // => @media (max-width: 1536px) { ... }
        "-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        "-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        "-md": { max: "769px" },
        // => @media (max-width: 769px) { ... }
        "-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      }, 
      colors: {
        accent: "#cb4154",
        'accent-light': '#de4f62',
        "dark-blue": '#131d3b',
      }, 
      fontFamily: {
        Rubik: ['Rubik', 'system-ui', 'sans-serif']
      }
    }
  },
    plugins: [],
  }