/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
	  },
	  extend: {
		fontFamily: {
		  grotesk: ["Grotesk", "sans-serif"],
		},
		fontWeight: {
		  regular: 400,
		  medium: 500,
		},
		colors: {
		  green: "#df4e61",
		  black: "var(--swatch-2)",
		  dark: "var(--swatch-2)",
		  gray: "var(--gray)",
		  white: "#fafafb",
		},
	  },
	},
	plugins: [],
  };
  