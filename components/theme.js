"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ChangeTheme() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme, resolvedTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<div className="text-xl flex items-center text-black-secondary dark:text-white-secondary">
			<div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 border-2 rounded-lg hover:bg-white-secondary dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
            disabled={!resolvedTheme}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
		</div>
	)
}
