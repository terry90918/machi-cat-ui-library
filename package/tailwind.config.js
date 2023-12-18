/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./package/src/**/*.{vue,js,ts,jsx,tsx}",
    "./dev/index.html",
    "./dev/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  prefix: 'mc-',
}
