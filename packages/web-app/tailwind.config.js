/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: [
    {
      pattern: /^ant-/,
    },
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
