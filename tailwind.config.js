/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	corePlugins: {
		preflight: false,
	},
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./containers/**/*.{js,ts,jsx,tsx}",
	],
	theme: {},
	plugins: [],
};
