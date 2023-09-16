import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faEnvelope,
	faMugHot,
	faPalette,
	faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons"
import {
	faLinkedin,
	faGithub,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons"
import {
	ProfileTriangle,
	ProfileBase,
	ProfileCircle,
} from "./layout/profile-img"
import Carousel from "./layout/carousel"

export default function Home() {
	return (
		<main
			className="pt-24 px-6 sm:px-12 
			lg:px-48 ">
			<section
				id="hero"
				className="flex flex-wrap-reverse justify-center items-center pt-16 pb-24
				xl:flex-nowrap xl:justify-between">
				<div id="hero-text">
					<h1
						className="
          text-5xl text-center font-bold leading-tight max-w-3xl pb-12 drop-shadow-xl
          md:text-6xl
					lg:pb-16
					xl:text-left
					2xl:text-8xl 2xl:max-w-5xl
          ">
						I <b className="hover:bg-blue-primary duration-300">Design</b>,{" "}
						<b className="hover:bg-blue-primary duration-300">Develop</b>, and
						always <b className="hover:bg-blue-primary duration-300">Learn</b>.
					</h1>
					<div
						id="hero-cta"
						className="flex flex-wrap gap-6 items-center justify-center text-black-secondary dark:text-white-secondary
						lg:gap-12 lg:flex-nowrap
						xl:justify-start">
						<Link
							href="#"
							className="
                text-sm px-12 py-3 border-2 rounded-2xl text-blue-primary items-center flex hover:bg-blue-primary hover:text-white-primary hover:border-blue-primary
                lg:px-6
								2xl:text-lg
                ">
							<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
							Contact Me
						</Link>
						<div
							className="flex w-full justify-center
							lg:w-auto">
							<div className="mr-12">
								<Link href="#">
									<FontAwesomeIcon
										icon={faLinkedin}
										className="text-3xl 2xl:text-4xl"
									/>
								</Link>
							</div>
							<div className="mr-12">
								<Link href="#">
									<FontAwesomeIcon
										icon={faGithub}
										className="text-3xl 2xl:text-4xl"
									/>
								</Link>
							</div>
							<div>
								<Link href="#">
									<FontAwesomeIcon
										icon={faTelegram}
										className="text-3xl 2xl:text-4xl"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div id="hero-img">
					<ProfileCircle></ProfileCircle>
					<ProfileBase></ProfileBase>
					<ProfileTriangle></ProfileTriangle>
				</div>
			</section>
			<section id="showcase" className="py-20">
				<div className="section-title sm:mb-6 lg:mb-12">
					<p
						className="text-5xl absolute left-0 right-0 text-center text-black-secondary -mt-6 opacity-10
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
								href="#"
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
					<Carousel></Carousel>
					<Link
						href="#"
						className="
                px-6 py-2 mt-12 text-sm w-fit mx-auto border-2 rounded-2xl border-black-secondary text-white-primary bg-black-secondary items-center hover:bg-black-primary hover:text-white-primary hover:border-black-primary
                dark:border-white-secondary dark:text-black-primary dark:bg-white-secondary dark:hover:bg-white-primary dark:hover:text-black-primary dark:hover:border-white-primary
								flex lg:hidden
								sm:text-md">
						View More
					</Link>
				</div>
			</section>
			<section id="about" className="py-20">
				<div className="section-title sm:mb-6 lg:mb-12">
					<p
						className="text-5xl absolute left-0 right-0 text-center text-black-secondary -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
						<b>About me</b>
					</p>
					<div
						className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
						<div className="flex justify-center items-center gap-6">
							<h1
								className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
								About me
							</h1>
							<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="grid xl:grid-cols-3 gap-6">
						<div className="drop-shadow-lg rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
							<div className="absolute p-4 border-2 rounded-xl -mt-24 mx-auto bg-white-primary dark:bg-black-secondary">
								<FontAwesomeIcon
									icon={faPuzzlePiece}
									className="text-4xl lg:text-5xl"
								/>
							</div>
							<h2 className="font-bold mb-2 text-2xl sm:text-4xl">Adaptive</h2>
							<p className="text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								I am be able to adapt to the new environment and to learn new
								things quickly.
							</p>
						</div>
						<div className="drop-shadow-lg rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
							<div className="absolute p-4 border-2 rounded-xl -mt-24 mx-auto bg-white-primary dark:bg-black-secondary">
								<FontAwesomeIcon
									icon={faMugHot}
									className="text-4xl lg:text-5xl"
								/>
							</div>
							<h2 className="font-bold mb-2 text-2xl sm:text-4xl">Simple</h2>
							<p className="text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								I like simplicity in life and do things in the simplest way so
								that I can do it with faster way but still with a great results.
							</p>
						</div>
						<div className="drop-shadow-lg rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
							<div className="absolute p-4 border-2 rounded-xl -mt-24 mx-auto bg-white-primary dark:bg-black-secondary">
								<FontAwesomeIcon
									icon={faPalette}
									className="text-4xl lg:text-5xl"
								/>
							</div>
							<h2 className="font-bold mb-2 text-2xl sm:text-4xl">Curious</h2>
							<p className="text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								I am a curios person who loves to learn and to explore some-
								thing new as well to look for a solution to any problem.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
