"use client"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faHeart, faChevronUp } from "@fortawesome/free-solid-svg-icons"

import Link from "next/link"
import ChangeTheme from "./theme"

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
					" bg-white-primary text-black-primary dark:bg-black-primary dark:text-white-primary"
				}>
				<ThemeProvider attribute="class">
					<nav
						id="top"
						className="flex mx-auto px-48 py-8 items-center justify-between">
						<Link
							href="/"
							className="text-2xl font-bold text-black-secondary hover:text-black-primary dark:text-white-secondary dark:hover:text-white-primary">
							Afrizal Yogi Pratama.
						</Link>
						<div id="hamburger" className="text-right">
							<div className="hamburger-1 bg-black-secondary hover:bg-black-primary dark:bg-white-secondary dark:hover:bg-white-primary"></div>
							<div className="hamburger-2 bg-black-secondary hover:bg-black-primary dark:bg-white-secondary dark:hover:bg-white-primary"></div>
						</div>
					</nav>
					<div className="px-48">
						<ChangeTheme></ChangeTheme>
					</div>
					{children}
					<section id="back-to-top">
						<Link
							href="#top"
							className="rounded-full fixed flex items-center justify-center bottom-12 right-12 border-2 h-8 w-8 bg-white-primary border-black-secondary dark:bg-black-primary dark:border-white-secondary">
							<FontAwesomeIcon
								icon={faChevronUp}
								className="text-black-primary text-xl -m-1 dark:text-white-primary"
							/>
						</Link>
					</section>
					<footer className="mx-auto px-48 py-24 bg-black-primary text-white-primary dark:bg-white-secondary dark:text-black-secondary">
						<h1 className="text-4xl font-bold mb-10">
							Let's collaborate! just reach me <br /> out -{" "}
							<Link href="mailto:afrizalyogi.id@gmail.com" target="_blank">
								afrizalyogi.id@gmail.com
							</Link>
						</h1>
						<div>
							Built
							<FontAwesomeIcon icon={faCode} className="mx-2" />
							with
							<FontAwesomeIcon icon={faHeart} className="mx-2" />
							by{" "}
							<Link
								href="https://afrizalyogi.github.io"
								target="_blank"
								rel="noopener noreferrer">
								<b>Afrizal Yogi Pratama</b>
							</Link>
						</div>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	)
}
