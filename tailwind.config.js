/** @type {import('tailwindcss').Config} */
module.exports = {
  // Archivos donde Tailwind buscará clases
  content: ["./App.{js,jsx,ts,tsx}", "./screens/*/.{js,jsx,ts,tsx}"],

  // Personalización de la temática (vacío por ahora)
  theme: {
    extend: {},
  },

  // No se usan plugins adicionales
  plugins: [],
};
