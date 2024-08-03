/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        'calc-x': 'calc(-50% + 15px)',
        'half-y': '-50%',
      }
    },
  },
  plugins: [],
};
