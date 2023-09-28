import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Wrapper from "@/components/wrapper"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
})

export const metadata: Metadata = {
	title: "Project | Afrizal Yogi Pratama",
	description: "I Design, Develop, and always Learn",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Wrapper>{children}</Wrapper>
			</body>
		</html>
	)
}
