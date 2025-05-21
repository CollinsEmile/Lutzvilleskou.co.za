/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      bodoni: ['"Libre Bodoni", serif'],
      inter: ['"Inter", sans-serif'],
      georgia: ['Georgia', 'serif'],
      playwrite: ['"Playwrite DK Loopet"', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
