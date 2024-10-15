/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
		fontFamily: {
			'ibm-normal': ['IBM-Plex-Serif400'],
			'ibm-bold': ['IBM-Plex-Serif700']
		}
  },
  plugins: [
		require('@tailwindcss/typography'),
	],
}
