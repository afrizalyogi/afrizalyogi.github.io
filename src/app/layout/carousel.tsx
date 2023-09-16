"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faChevronLeft,
	faChevronRight,
	faLink,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Link from "next/link"
import showcase from "../data/showcase.json"

interface Carousel {
	title: string
	description: string
	image: string
	categories: string[]
	linkTitle: string[]
	linkUrl: string[]
}

const carousel: Carousel[] = showcase

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
			<div
				className="carousel-control flex justify-between -mb-8 translate-y-16
				sm:translate-y-32
				md:translate-y-44
				lg:translate-y-48
				xl:translate-y-80
				2xl:translate-y-96
			
			">
				<button
					onClick={prevSlide}
					className="carousel-button prev z-10 rounded-full -ml-4 flex items-center justify-center border-2 h-8 w-8 bg-blue-primary border-blue-primary duration-300
					xl:h-12 xl:w-12 xl:-ml-6
					">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-white-primary
						xl:text-2xl
						"
					/>
				</button>
				<button
					onClick={nextSlide}
					className="carousel-button next z-10 rounded-full -mr-4 flex text-right items-center justify-center border-2 h-8 w-8 bg-blue-primary border-blue-primary duration-300
					xl:h-12 xl:w-12 xl:-mr-6
					">
					<FontAwesomeIcon
						icon={faChevronRight}
						className="text-white-primary
						xl:text-2xl
						"
					/>
				</button>
			</div>
			<div className="carousel-content">
				<img
					src={currentSlide.image}
					alt={`Slide ${currentSlideIndex + 1}`}
					className="carousel-image rounded-3xl mb-12 shadow-xl w-full"
				/>
				<div
					className="carousel-text grid gap-12 text-center items-center
				lg:grid-cols-2 lg:text-left">
					<div className="left">
						<h2 className="carousel-title mb-6 font-bold text-2xl sm:text-4xl lg:text-5xl">
							{currentSlide.title}
						</h2>
						<div
							className="carousel-categories flex flex-wrap gap-2 justify-center
						lg:justify-start">
							{currentSlide.categories.map((category, index) => (
								<span
									key={index}
									className="carousel-categor text-xs sm:text-sm px-3 py-2 rounded-3xl text-black-secondary items-center flex bg-white-secondary dark:bg-black-primary dark:text-white-secondary
                ">
									{category}
								</span>
							))}
						</div>
					</div>
					<div className="right text-black-secondary dark:text-white-secondary">
						<p className="carousel-description w-3/4 mx-auto lg:mx-0 lg:w-auto mb-4 text-sm lg:text-lg ">
							{currentSlide.description}
						</p>
						<div
							className="flex gap-6 justify-center text-sm lg:justify-start
							lg:text-lg">
							{currentSlide.linkTitle.map((title, index) => (
								<Link
									href={currentSlide.linkUrl[index]}
									className="underline"
									target="_blank">
									<FontAwesomeIcon icon={faLink} className="mr-2" />
									{title}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
