"use client"
import { ThemeProvider } from "next-themes"
import React from "react"
import { Suspense } from "react"
import FooterLoading from "./footer-loading"
import Navbar from "../components/navbar"
import Footer from "./footer"
import BackToTop from "../components/back-to-top"

export default function Wrapper({ children }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<Navbar></Navbar>
			{children}
			<BackToTop></BackToTop>
			<Suspense fallback={<FooterLoading />}>
				<Footer></Footer>
			</Suspense>
		</ThemeProvider>
	)
}
