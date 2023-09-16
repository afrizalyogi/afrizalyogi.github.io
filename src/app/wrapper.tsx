"use client"
import { ThemeProvider } from "next-themes"
import React, { ReactNode } from "react"

import Navbar from "./layout/navbar"
import Footer from "./layout/footer"
import BackToTop from "./layout/back-to-top"

interface WrapperProps {
	children: ReactNode
}

export default function Wrapper({ children }: WrapperProps) {
	return (
		<ThemeProvider attribute="class">
			<Navbar></Navbar>
			<div className="bg-white-primary text-black-primary dark:bg-black-secondary dark:text-white-primary">
				{children}
			</div>
			<BackToTop></BackToTop>
			<Footer></Footer>
		</ThemeProvider>
	)
}