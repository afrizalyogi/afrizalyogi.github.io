"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

export default function MainWrapper({ children }) {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: "10%" }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: "10%" }}
				transition={{ delay: 0.25 }}
				className="bg-white-primary text-black-primary dark:bg-black-primary dark:text-white-primary">
				<main
					className="pt-12 px-6 sm:px-12
					lg:px-48 lg:pt-24">
					{children}
				</main>
			</motion.div>
		</AnimatePresence>
	)
}
