import "./link.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
})

export const metadata = {
	title: "afrizalyogi.id",
	description: "I Design, Develop, and always Learn",
}

export default function RootLayout({children}) {
	return (
		<body className={poppins.className}>
			{children}
		</body>
	)
}