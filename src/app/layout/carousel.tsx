"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import showcase from "../data/showcase.json"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

interface Carousel {
	title: string
	description: string
	image: string
	categories: string[]
	linkTitle: string[]
	linkUrl: string[]
}

export default function Carousel() {
	const showcaseData: Carousel[] = showcase
	return (
		<div className="carousel">
			<Swiper
				modules={[A11y, Autoplay, Navigation]}
				spaceBetween={50}
				slidesPerView={1}
				autoplay={{
					delay: 3000,
				}}
				navigation
				loop={true}>
				{showcaseData.map((item, index) => (
					<SwiperSlide className="bg-white-primary dark:bg-black-bg carousel-content">
						{({ isActive }) => (
							<div className={isActive ? "" : "hidden"}>
								<img
									src={item.image}
									alt={item.title}
									className="carousel-image rounded-3xl mb-12 shadow-xl w-full"
								/>
								<div
									className="carousel-text grid gap-12 text-center items-center
				lg:grid-cols-2 lg:text-left">
									<div className="left">
										<h2 className="carousel-title mb-6 font-bold text-2xl sm:text-4xl lg:text-5xl">
											{item.title}
										</h2>
										<div
											className="carousel-categories flex flex-wrap gap-2 justify-center
						lg:justify-start">
											{item.categories.map((category, index) => (
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
											{item.description}
										</p>
										<div
											className="flex gap-6 justify-center text-sm lg:justify-start
							lg:text-lg">
											{item.linkTitle.map((title, index) => (
												<Link
													href={item.linkUrl[index]}
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
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
