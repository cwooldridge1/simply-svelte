/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,svelte}"],
  theme: {
    extend: {
      colors: {
        success: 'rgb(74 222 128)',
        danger: 'rgb(248 113 113)',
        info: 'rgb(129 140 248)',
        primary: 'rgb(96 165 250)',
        warning: 'rgb(251 191 36)',
        muted: 'rgb(75 85 99)',
        black: 'rgb(17 24 39)'
      },
    },
  },
};

