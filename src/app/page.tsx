import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
	faLinkedin,
	faGithub,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons"
import { ProfileTriangle, ProfileBase, ProfileCircle } from "./profile-img"
import Carousel from "./carousel"

export default function Home() {
	return (
		<main className="px-48">
			<section
				id="hero"
				className="flex justify-between items-center pt-12 pb-24">
				<div id="hero-text">
					<h1
						className="
          text-7xl font-bold leading-tight max-w-3xl pb-16 drop-shadow-lg
          2xl:text-8xl 2xl:max-w-5xl
          ">
						I <b className="hover:bg-blue-primary duration-300">Design</b>,{" "}
						<b className="hover:bg-blue-primary duration-300">Develop</b>, and
						always <b className="hover:bg-blue-primary duration-300">Learn</b>.
					</h1>
					<div id="hero-cta" className="flex items-center">
						<div className="mr-12">
							<Link
								href="#"
								className="
                text-sm px-6 py-3 border-2 rounded-2xl text-blue-primary items-center flex hover:bg-blue-primary hover:text-white-primary hover:border-blue-primary
                2xl:text-lg
                ">
								<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
								Contact Me
							</Link>
						</div>
						<div className="mr-12">
							<Link href="#" className="text-black-secondary">
								<FontAwesomeIcon
									icon={faLinkedin}
									className="text-3xl 2xl:text-4xl"
								/>
							</Link>
						</div>
						<div className="mr-12">
							<Link href="#" className="text-black-secondary">
								<FontAwesomeIcon
									icon={faGithub}
									className="text-3xl 2xl:text-4xl"
								/>
							</Link>
						</div>
						<div className="mr-12">
							<Link href="#" className="text-black-secondary">
								<FontAwesomeIcon
									icon={faTelegram}
									className="text-3xl 2xl:text-4xl"
								/>
							</Link>
						</div>
					</div>
				</div>
				<div id="hero-img">
					<ProfileCircle></ProfileCircle>
					<ProfileBase></ProfileBase>
					<ProfileTriangle></ProfileTriangle>
				</div>
			</section>
			<section id="showcase">
				<div className="section-title">
					<p
						className="text-7xl absolute text-black-secondary -z-10 -ml-20 -mt-12 opacity-10
          xl:text-8xl xl:-ml-24 xl:-mt-16
          ">
						<b>Showcase</b>
					</p>
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<h1 className="text-5xl font-bold mr-4 drop-shadow-lg">
								Showcase
							</h1>
							<div className="line drop-shadow-lg"></div>
						</div>
						<div className="flex">
							<Link
								href="#"
								className="
                px-6 py-2 border-2 rounded-2xl border-black-secondary text-white-primary bg-black-secondary items-center flex hover:bg-black-primary hover:text-white-primary hover:border-black-primary
                ">
								View More
							</Link>
						</div>
					</div>
				</div>
				<div className="section-content">
					<Carousel></Carousel>
				</div>
			</section>
			<section id="About me">
				<div className="section-title">
					<p
						className="text-7xl absolute text-black-secondary -z-10 -ml-20 -mt-12 opacity-10
          xl:text-8xl xl:-ml-24 xl:-mt-16
          ">
						<b>About me</b>
					</p>
					<div className="flex items-center">
						<h1 className="text-5xl font-bold mr-4 drop-shadow-lg">About me</h1>
						<div className="line drop-shadow-lg"></div>
					</div>
				</div>
			</section>
		</main>
	)
}
