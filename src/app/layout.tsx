"use client"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"

import Navbar from "./layout/navbar"
import Footer from "./layout/footer"
import BackToTop from "./layout/back-to-top"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
})

export const metadata: Metadata = {
	title: "Afrizal Yogi Pratama",
	description: "I Design, Develop, and always Learn",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={
					poppins.className +
					"bg-white-primary text-black-primary dark:bg-black-primary dark:text-white-primary"
				}>
				<ThemeProvider attribute="class">
					<Navbar></Navbar>
					{children}
					<BackToTop></BackToTop>
					<Footer></Footer>
				</ThemeProvider>
			</body>
		</html>
	)
}
