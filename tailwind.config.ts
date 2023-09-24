import type { Config } from "tailwindcss"

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
			"black-secondary": "#4c4c4c",
			"black-bg": "#1f1f22",
			"white-primary": "#FBF8F6",
			"white-secondary": "#dcdcdc",
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
}
export default config
