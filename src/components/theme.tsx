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
		<div className="text-xl flex items-center text-black-secondary dark:text-white-secondary">
			<span
				onClick={() => setTheme("light")}
				className={
					theme === "light"
						? "font-bold text-black-primary text-xl lg:text-2xl"
						: "cursor-pointer hover:text-white-primary"
				}>
				LIGHT
			</span>
			<span className="mx-2">/</span>
			<span
				onClick={() => setTheme("dark")}
				className={
					theme === "dark"
						? "font-bold text-white-primary text-xl xl:text-2xl"
						: "cursor-pointer hover:text-black-primary"
				}>
				DARK
			</span>
		</div>
	)
}
