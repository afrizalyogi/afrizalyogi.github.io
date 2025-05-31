"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Pagination } from "swiper/modules"
import journeyData from "../../data/journey.json"
import "swiper/css"
import "swiper/css/pagination"

export default function Journey() {
	return (
		<section id="journey" className="py-20">
			<div className="section-title mb-12 lg:mb-16">
				<p
					className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
					<b>Journey</b>
				</p>
				<div
					className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
					<div className="flex justify-center items-center gap-6">
						<h1
							className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
							Journey
						</h1>
						<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
					</div>
				</div>
			</div>
			<div className="section-content">
				<Swiper
					modules={[A11y, Autoplay, Pagination]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{
						delay: 3000,
					}}
					pagination={{ clickable: true }}
					loop={true}>
					{journeyData.map((item, index) => (
						<SwiperSlide key={index} className="bg-white-primary dark:bg-black-primary pb-16">
							{({ isActive }) => (
							<div className={isActive ? "" : "hidden"}>
									<div>
										<p
											className="font-bold text-black-secondary dark:text-white-secondary
											text-md lg:text-xl">
											{item.company}
										</p>
										<h2
											className="font-bold text-2xl py-2
											lg:text-4xl">
											{item.title}
										</h2>
										<p
											className="font-bold text-black-secondary dark:text-white-secondary
											text-md lg:text-xl">
											{item.date}
										</p>
									</div>
									<div>
										<ul className="flex flex-wrap gap-4 text-black-secondary dark:text-white-secondary">
											{item.description.map((description, index) => (
												<li key={index}>
													<p className="text-sm lg:text-lg xl:w-3/4">
														{description}
													</p>
												</li>
											))}
										</ul>
									</div>
								</div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
