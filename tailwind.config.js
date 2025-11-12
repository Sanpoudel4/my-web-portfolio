/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use class-based dark mode
  content: [
    "./index.html",
    "./projects.html",
    "./blog.html",
    "./resume.html",
    "./contact.html",
    "./partials/**/*.html", // Include partials
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 50%, 100%": { opacity: "1" },
          "25%, 75%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.5s infinite",
      },
    },
  },
  plugins: [],
};
