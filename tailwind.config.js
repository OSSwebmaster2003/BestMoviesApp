/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      blue: "#3657CB",
      white: "#FFFFFF",
      "secondary-white": "rgba(255,255,255,0.35)",
      yellow: "#F2F60F",
      "dark-gray": "#3B486B",
      "secondary-violet": "rgba(54, 87, 203, 0.58)",
      "secondary-blue": "rgba(29, 58, 160, 0.9)",
      gray: "rgba(227, 230, 240, 0.72)",
      green: "#4BCB36",
      "light-green": "#89CB36",
      "dark-green": "#2E6125",
      orange: "#CB6C36",
      "dark-blue": "#1B2133",
      "dark-red": "#642C36",
      "dark-yellow": "rgba(255, 240, 101, 0.3)",
    },
    extend: {
      screens: {
        xs: "0px",
        sm: "425px",
        md: "768px",
        lg: "1000px",
        xl: "1800px",
      },
    },
  },
  plugins: [],
};
