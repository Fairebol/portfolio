/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		},
	},
	variants: {
		extend: {
		  visibility: ['group-focus'],
		},
	  },
	plugins: [],
}
