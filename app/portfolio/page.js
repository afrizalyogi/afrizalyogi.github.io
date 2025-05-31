import Link from "next/link"
import Image from "next/image"
import MainWrapper from "../../components/main-wrapper"
import portfolioData from "../../data/showcase.json"
import { Link as LinkIcon } from "lucide-react"

export default function Portfolio() {
	return (
		<MainWrapper>
			<section id="portfolio" className="py-20">
				<div className="section-title mb-6 lg:mb-12">
					<p
						className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
						<b>Portfolio</b>
					</p>
					<div
						className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
						<div className="flex justify-center items-center gap-6">
							<h1
								className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
								Portfolio
							</h1>
							<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-12 xl:gap-x-6 ">
						{portfolioData.map((item, index) => (
							<div key={index} className="flex flex-col h-full">
								<Image
									src={"/" + item.image}
									alt={"/" + item.title}
									width={640}
									height={360}
									className="rounded-3xl mb-12 shadow-xl w-full"
								/>
								<div className="gap-12 text-center items-center lg:text-left">
									<h2
										className="carousel-title font-bold text-md
								sm:text-2xl">
										{item.title}
									</h2>
									<div
										className="flex flex-wrap py-4 gap-2 justify-center
						lg:justify-start">
										{item.categories.map((category, index) => (
											<span
												key={index}
												className="carousel-categor text-xs sm:text-sm px-3 py-2 rounded-3xl items-center flex bg-white-secondary text-black-secondary dark:bg-gray-700 dark:text-white-primary">
												{category}
											</span>
										))}
									</div>
									<div className="text-black-secondary dark:text-white-secondary">
										<p className="carousel-description w-3/4 mx-auto lg:mx-0 lg:w-auto mb-4 text-sm lg:text-lg">
											{item.description}
										</p>
										<div
											className="flex flex-col xl:flex-row gap-2 mt-4 justify-center text-sm lg:justify-start lg:text-lg">
											{item.linkTitle.map((title, index) => (
												<Link
													key={index}
													href={item.linkUrl[index]}
													className="bg-blue-primary hover:bg-blue-secondary text-white-primary! px-6 py-2 rounded-lg w-80 sm:w-auto flex items-center justify-center"
													target="_blank">
													<LinkIcon className="mr-2" />
													{title}
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</MainWrapper>
	)
}
