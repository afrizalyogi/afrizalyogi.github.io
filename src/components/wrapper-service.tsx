"use client"
import { ThemeProvider } from "next-themes"
import React, { ReactNode } from "react"
import { Suspense } from "react"
import FooterLoading from "./footer-loading"
import Navbar from "@/components/navbar"
import BackToTop from "@/components/back-to-top"
import Contact from "./contact"

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
			<Contact></Contact>
			<BackToTop></BackToTop>
		</ThemeProvider>
	)
}
