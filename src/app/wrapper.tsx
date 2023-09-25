"use client"
import { ThemeProvider } from "next-themes"
import React, { ReactNode } from "react"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import BackToTop from "../components/back-to-top"

interface WrapperProps {
	children: ReactNode
}

export default function Wrapper({ children }: WrapperProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			<Navbar></Navbar>
			<div className="bg-white-primary text-black-primary dark:bg-black-bg dark:text-white-primary">
				{children}
			</div>
			<BackToTop></BackToTop>
			<Footer></Footer>
		</ThemeProvider>
	)
}
