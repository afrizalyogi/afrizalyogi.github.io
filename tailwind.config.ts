import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			"blue-primary": "#007AFF",
			"blue-secondary": "rgba(0, 122, 255, 0.8)",
			"black-primary": "#111",
			"black-secondary": "#3f3f3f",
			"white-primary": "#FBF8F6",
			"white-secondary": "#eaeaea",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
