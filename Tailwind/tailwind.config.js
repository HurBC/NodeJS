/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      boxShadow: {
        'inner-f-w': "inset 0 0 0 1px #fff",
        "inner-f-bf": "inset 100vh 0 0 1px #0c0a09",
        "inner-f-b": "inset 0 0 0 1px #0c0a09",
      },
      backgroundColor: {
        "cremates": "#1e9b9e"
      }
    },
  },
  plugins: [],
}

