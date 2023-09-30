"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Pagination } from "swiper/modules"
import testimonial from "@/data/testimonial.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import "swiper/css"
import "swiper/css/pagination"

interface Testimonial {
	name: string
	title: string
	text: string
}

export default function Testimonial() {
	const testimonialData: Testimonial[] = testimonial
	return (
		<section id="testimonial" className="py-20">
			<div className="section-title mb-12 lg:mb-16">
				<p
					className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
					<b>What They Said</b>
				</p>
				<div
					className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
					<div className="flex justify-center items-center gap-6">
						<h1
							className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
							What They Said
						</h1>
						<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
					</div>
				</div>
			</div>
			<div className="section-content max-w-screen-md">
				<Swiper
					modules={[A11y, Autoplay, Pagination]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{
						delay: 6000,
					}}
					pagination={{ clickable: true }}
					loop={true}>
					{testimonialData.map((item) => (
						<SwiperSlide className="bg-white-primary dark:bg-black-bg pb-16">
							{({ isActive }) => (
								<div className={isActive ? "" : "hidden"}>
									<h2 className="mb-12 text-sm sm:text-xl text-black-secondary dark:text-white-secondary">
										<FontAwesomeIcon
											icon={faQuoteLeft}
											className="text-4xl lg:text-5xl mb-2 mr-4"
										/>
										{item.text}
									</h2>
									<p className="font-bold text-xl lg:text-2xl">{item.name}</p>
									<p className="text-sm lg:text-xl text-black-secondary dark:text-white-secondary">
										{item.title}
									</p>
								</div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
