"use client"
import Link from "next/link"
import Image from "next/image"
import { Link as LinkIcon } from "lucide-react"
import showcase from "../../data/showcase.json"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export default function Showcase() {
	const showcaseData = showcase
	return (
		<section id="showcase" className="py-20">
			<div className="section-title mb-6 lg:mb-12">
				<p className="text-5xl absolute left-0 right-0 text-center -mt-6 
						opacity-10 sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16">
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
                px-6 py-2 rounded-2xl text-black-primary bg-white-secondary items-center hover:bg-black-secondary hover:text-white-primary!
              dark:text-white-primary dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-black-primary
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
							<SwiperSlide key={index} className="bg-white-primary dark:bg-black-primary carousel-content">
								{({ isActive }) => (
									<div key={index} className={isActive ? "" : "hidden"}>
										<Image
											src={"/" + item.image}
											alt={"/" + item.title}
											width={960}
											height={480}
											quality={100}
											className="carousel-image rounded-3xl mb-6 shadow-xl w-full bg-white border-2 border-white-secondary dark:border-gray-700"
										/>
										<div className="carousel-text text-center items-center lg:grid-cols-2 lg:text-left text-black-secondary dark:text-white-secondary">
											<div
												className="carousel-categories flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
												{item.categories.map((category, index) => (
													<span
														key={index}
														className="hidden lg:flex text-xs sm:text-sm px-3 py-2 rounded-3xl items-center bg-white-secondary text-black-secondary dark:bg-gray-700 dark:text-white-primary">
														{category}
													</span>
												))}
											</div>
											<h2 className="carousel-title mb-2 font-bold text-2xl sm:text-4xl lg:text-5xl">
												{item.title}
											</h2>
											<p className="carousel-description w-3/4 mx-auto lg:mx-0 lg:w-auto mb-4 text-sm lg:text-lg line-clamp-2">
												{item.description}
											</p>
										</div>
										<div className="flex justify-center xl:justify-start">
											<div
												className="flex flex-row gap-2 mt-4 justify-center text-sm lg:justify-start lg:text-lg">
												{item.linkTitle.map((title, index) => (
													<Link
														key={index}
														href={item.linkUrl[index]}
														className="bg-blue-primary hover:bg-blue-secondary text-white-primary! px-6 py-2 rounded-lg flex items-center justify-center"
														target="_blank">
														<LinkIcon className="mr-2" />
														{title}
													</Link>
												))}
											</div>
										</div>
									</div>
								)}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="flex justify-center">
					<Link
						href={"/service"}
						className="
									mt-12 px-6 py-2 w-80 justify-center rounded-2xl text-black-primary bg-white-secondary items-center hover:bg-black-secondary hover:text-white-primary!
								dark:text-white-primary dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-black-primary
									flex lg:hidden
									sm:text-md">
						View More
					</Link>
				</div>
			</div>
		</section>
	)
}
