"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group"

interface Carousel {
	title: string
	description: string
	image: string
	categories: string[]
}

const carousel: Carousel[] = [
	{
		title: "Novacademy",
		description:
			"Website that helps individuals in Indonesia understand and implement business fundamentals by providing special training to solve practical cases",
		image: "assets/carousel/novacademy.png",
		categories: ["User Research", "User Experience", "Prototype"],
	},
	{
		title: "Novacademy",
		description:
			"Website that helps individuals in Indonesia understand and implement business fundamentals by providing special training to solve practical cases",
		image: "assets/carousel/novacademy.png",
		categories: ["User Experience", "Prototype"],
	},
]

export default function Carousel() {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

	const nextSlide = () => {
		setCurrentSlideIndex((prevIndex) =>
			prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
		)
	}

	const prevSlide = () => {
		setCurrentSlideIndex((prevIndex) =>
			prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
		)
	}

	const currentSlide = carousel[currentSlideIndex]

	return (
		<div className="carousel">
			<div className="carousel-control flex justify-between">
				<button
					onClick={prevSlide}
					className="carousel-button prev rounded-full flex items-center justify-center border-2 h-8 w-8 bg-blue-secondary border-blue-secondary hover:bg-blue-primary hover:border-blue-primary duration-300">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-white-primary text-xl -m-1 dark:text-black-primary"
					/>
				</button>
				<button
					onClick={nextSlide}
					className="carousel-button next rounded-full flex text-right items-center justify-center border-2 h-8 w-8 bg-blue-secondary border-blue-secondary hover:bg-blue-primary hover:border-blue-primary duration-300">
					<FontAwesomeIcon
						icon={faChevronRight}
						className="text-white-primary text-xl -m-1 dark:text-black-primary"
					/>
				</button>
			</div>
			<div className="carousel-content">
				<img
					src={currentSlide.image}
					alt={`Slide ${currentSlideIndex + 1}`}
					className="carousel-image rounded-3xl shadow-xl"
				/>
				<h2 className="carousel-title">{currentSlide.title}</h2>
				<p className="carousel-description">{currentSlide.description}</p>
				<div className="carousel-categories">
					{currentSlide.categories.map((category, index) => (
						<span key={index} className="carousel-category">
							{category}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}
