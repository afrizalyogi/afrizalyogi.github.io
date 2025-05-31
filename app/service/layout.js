import { Poppins } from "next/font/google"
import Contact from "../../components/section/contact"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
})

export const metadata = {
	title: "Service | Afrizal Yogi Pratama",
	description: "I Design, Develop, and always Learn",
}

export default function RootLayout({children}) {
	return (
		<>
			{children}
			<Contact></Contact>
		</>
	)
}
