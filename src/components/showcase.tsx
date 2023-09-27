"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Image from "next/image"
import showcase from "@/data/showcase.json"
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

export default function Showcase() {
	const showcaseData: Carousel[] = showcase
	return (
		<section id="showcase" className="py-20">
			<div className="section-title mb-6 lg:mb-12">
				<p
					className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
					<b>Showcase</b>
				</p>
				<div
					className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
					<div className="flex justify-center items-center gap-6">
						<h1
							className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
							Showcase
						</h1>
						<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
					</div>
					<div
						className="flex w-full justify-center
							lg:w-auto">
						<Link
							href={"/service"}
							className="
                px-6 py-2 border-2 rounded-2xl border-black-secondary text-white-primary bg-black-secondary items-center hover:bg-black-primary hover:text-white-primary hover:border-black-primary
                dark:border-white-secondary dark:text-black-primary dark:bg-white-secondary dark:hover:bg-white-primary dark:hover:text-black-primary dark:hover:border-white-primary
								hidden lg:flex">
							View More
						</Link>
					</div>
				</div>
			</div>
			<div className="section-content">
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
										<Image
											src={"/" + item.image}
											alt={"/" + item.title}
											width={960}
											height={540}
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
				<Link
					href={"/service"}
					className="
                px-6 py-2 mt-6 text-xs w-fit mx-auto border-2 rounded-2xl border-black-secondary text-white-primary bg-black-secondary items-center hover:bg-black-primary hover:text-white-primary hover:border-black-primary
                dark:border-white-secondary dark:text-black-primary dark:bg-white-secondary dark:hover:bg-white-primary dark:hover:text-black-primary dark:hover:border-white-primary
								flex lg:hidden
								sm:text-md">
					View More
				</Link>
			</div>
		</section>
	)
}
