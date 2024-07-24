/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			Cairo: ["Cairo", "sans-serif"],
		},
		darkMode: "class",
		extend: {},
	},
	darkMode: "class",
	plugins: [],
});
