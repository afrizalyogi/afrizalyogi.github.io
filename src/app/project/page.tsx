import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Image from "next/image"
import MainWrapper from "../../components/main-wrapper"
import showcase from "../data/showcase.json"

interface Projects {
	title: string
	description: string
	image: string
	categories: string[]
	linkTitle: string[]
	linkUrl: string[]
}

export default function Project() {
	const projectData: Projects[] = showcase
	return (
		<MainWrapper>
			<section id="project" className="py-20">
				<div className="section-title mb-6 lg:mb-12">
					<p
						className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
						<b>Project</b>
					</p>
					<div
						className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
						<div className="flex justify-center items-center gap-6">
							<h1
								className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
								Project
							</h1>
							<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-12 xl:gap-6">
						{projectData.map((item, index) => (
							<div className="flex flex-col h-full">
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
												className="text-xs sm:text-sm px-3 py-2 rounded-3xl text-black-secondary items-center flex bg-white-secondary dark:bg-black-primary dark:text-white-secondary
                ">
												{category}
											</span>
										))}
									</div>
									<div className="text-black-secondary dark:text-white-secondary">
										<p className="carousel-description w-3/4 mx-auto lg:mx-0 lg:w-auto mb-4 text-sm lg:text-lg">
											{item.description}
										</p>
										<div
											className="flex gap-6 items-end justify-center text-sm lg:justify-start
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
						))}
					</div>
				</div>
			</section>
		</MainWrapper>
	)
}
