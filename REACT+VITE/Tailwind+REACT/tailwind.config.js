/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inner-f-bf": "inset 100vh 0 0 1px #0c0a09",
        "inner-f-b": "inset 0 0 0 1px #0c0a09",
      },
    },
  },
  plugins: [],
}

