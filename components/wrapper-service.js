"use client"
import { ThemeProvider } from "next-themes"
import React from "react"
import Navbar from "./navbar"
import BackToTop from "./back-to-top"
import Contact from "./section/contact"

export default function Wrapper({ children }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			<Navbar></Navbar>
			<div className="bg-white-primary text-black-primary dark:bg-black-bg dark:text-white-primary">
				{children}
			</div>
			<BackToTop></BackToTop>
		</ThemeProvider>
	)
}
