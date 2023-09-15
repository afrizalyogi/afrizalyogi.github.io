"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ChangeTheme() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}
	return (
		<div>
			<span onClick={() => setTheme("light")}>LIGHT</span>
			<span>&nbsp; / &nbsp;</span>
			<span onClick={() => setTheme("dark")}>DARK</span>
		</div>
	)
}
