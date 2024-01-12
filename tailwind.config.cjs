/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				"mobile-breakpoint": "468px",
				"xs": "384px"
			},
			colors: {
				dark: "#121212",
				secondary: "#825fe9",
				light: "#eee",
			},
		},
	},
	plugins: [],
};
