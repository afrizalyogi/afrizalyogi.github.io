import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
	faLinkedin,
	faGithub,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons"
import {
	ProfileTriangle,
	ProfileBase,
	ProfileCircle,
} from "../../components/profile-img"
import MainWrapper from "../../components/main-wrapper"
import AboutMe from "../../components/about-me"

export default function About() {
	return (
		<MainWrapper>
			<section id="hero" className="py-16">
				<div
					className="flex flex-wrap-reverse justify-center items-center
				xl:flex-nowrap xl:justify-between">
					<div id="hero-text">
						<h1
							className="
          text-4xl text-center font-bold leading-tight max-w-3xl pb-6 drop-shadow-xl
          sm:text-5xl
					md:text-6xl
					lg:pb-16
					xl:text-left
					2xl:text-8xl 2xl:max-w-5xl
          ">
							I <b className="hover:bg-blue-primary duration-300">Design</b>,{" "}
							<b className="hover:bg-blue-primary duration-300">Develop</b>, and
							always <b className="hover:bg-blue-primary duration-300">Learn</b>
							.
						</h1>
						<div
							id="hero-cta"
							className="flex flex-wrap gap-6 items-center justify-center text-black-secondary dark:text-white-secondary
						lg:gap-12 lg:flex-nowrap
						xl:justify-start">
							<Link
								href="#"
								className="
                text-xs px-12 py-3 border-2 rounded-2xl text-blue-primary items-center flex hover:bg-blue-primary hover:text-white-primary hover:border-blue-primary
                sm:text-sm
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
									<Link href={"#"}>
										<FontAwesomeIcon
											icon={faLinkedin}
											className="text-3xl 2xl:text-4xl"
										/>
									</Link>
								</div>
								<div className="mr-12">
									<Link href={"#"}>
										<FontAwesomeIcon
											icon={faGithub}
											className="text-3xl 2xl:text-4xl"
										/>
									</Link>
								</div>
								<div>
									<Link href={"#"}>
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
				</div>
			</section>
			<section id="what-i-did" className="py-20">
				<div className="section-title mb-6">
					<p
						className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
						<b>What I Did</b>
					</p>
					<div
						className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
						<div className="flex justify-center items-center gap-6">
							<h1
								className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
								What I Did
							</h1>
							<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="grid xl:grid-cols-3 gap-6">
						<div
							id="service-1"
							className="service-content drop-shadow-lg rounded-xl border-2 mt-16 lg:mt-12">
							<Link href={"/service"}>
								<div className="service-img"></div>
								<div className="service-text p-12">
									<h2 className="font-bold text-white-primary mb-2 text-2xl sm:text-4xl">
										Application Design
									</h2>
									<p className="text-white-secondary text-sm lg:text-lg">
										Craft innovative concepts into app interfaces for enhanced
										user experiences.
									</p>
								</div>
							</Link>
						</div>
						<div
							id="service-2"
							className="service-content drop-shadow-lg rounded-xl border-2 mt-16 lg:mt-12">
							<Link href={"/service"}>
								<div className="service-img"></div>
								<div className="service-text p-12">
									<h2 className="font-bold text-white-primary mb-2 text-2xl sm:text-4xl">
										Website Design
									</h2>
									<p className="text-white-secondary text-sm lg:text-lg">
										Create stunning web designs for seamless user experience on
										desktop and mobile.
									</p>
								</div>
							</Link>
						</div>
						<div
							id="service-3"
							className="service-content drop-shadow-lg rounded-xl border-2 mt-16 lg:mt-12">
							<Link href={"/service"}>
								<div className="service-img"></div>
								<div className="service-text p-12">
									<h2 className="font-bold text-white-primary mb-2 text-2xl sm:text-4xl">
										Front-end Website Development
									</h2>
									<p className="text-white-secondary text-sm lg:text-lg">
										Transforming design into functional, responsive code for
										both Desktop and Mobile.
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<AboutMe></AboutMe>
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
					<div className="grid 2xl:grid-cols-2 gap-12">
						<div className="journey-content">
							<div className="flex justify-between gap-6">
								<p
									className="font-bold text-md
								sm:text-2xl">
									Digital Engineering Laboratory Assistant
								</p>
								<p
									className="text-right font-bold text-md
								sm:text-2xl">
									Oct 2022 – Now
								</p>
							</div>
							<div className="flex justify-between mb-6">
								<p className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary">
									University of Lampung
								</p>
								<p className="text-sm lg:text-lg text-right text-black-secondary dark:text-white-secondary">
									Lampung, Indonesia
								</p>
							</div>
							<ul className="flex flex-wrap gap-4 text-black-secondary dark:text-white-secondary">
								<li>
									<p className="text-sm lg:text-lg">
										Developed comprehensive modules, assignments, and tools that
										effectively engaged students in learning about Digital
										Engineering concepts and techniques, resulting in
										outstanding performance in their final projects.
									</p>
								</li>
								<li>
									<p className="text-sm lg:text-lg">
										Collaborated with the lecturer, lab technician, and other
										lab assistants to make necessary changes to the curriculum
										and ensure that students had a clear understanding of the
										materials.
									</p>
								</li>
								<li>
									<p className="text-sm lg:text-lg">
										Guided and mentored practitioners in digital engineering to
										ensure that they understand the subject matter and can apply
										it effectively in their work, resulting in successful
										implementation in their final projects.
									</p>
								</li>
							</ul>
						</div>
						<div className="journey-content">
							<div className="flex justify-between gap-6">
								<p
									className="font-bold text-md
								sm:text-2xl">
									Website Developer Intern
								</p>
								<p
									className="text-right font-bold text-md
								sm:text-2xl">
									Mar 2023 – Jun 2023
								</p>
							</div>
							<div className="flex justify-between mb-6">
								<p className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary">
									PT. Dibimbing Digital Indonesia (
									<Link href={"https://dibimbing.id/"} target="_blank">
										Dibimbing.id
									</Link>
									)
								</p>
								<p className="text-sm lg:text-lg text-right text-black-secondary dark:text-white-secondary">
									Jakarta, Indonesia (Remote)
								</p>
							</div>
							<ul className="flex flex-wrap gap-4 text-black-secondary dark:text-white-secondary">
								<li>
									<p className="text-sm lg:text-lg">
										Developed websites using relevant themes and plugins in
										WordPress or other content management systems (CMS) to
										enhance clients' online visibility and presence.
									</p>
								</li>
								<li>
									<p className="text-sm lg:text-lg">
										Provided effective troubleshooting for enhance user
										experience with attractive and responsive designs to
										enhanced clients' brand image.
									</p>
								</li>
								<li>
									<p className="text-sm lg:text-lg">
										Integrated third-party platforms, including Google
										Analytics, to increase clients' business reach, improve
										operational efficiency, and unleash business growth
										potential.
									</p>
								</li>
								<li>
									<p className="text-sm lg:text-lg">
										Configuring website servers, integrated DNS settings, and
										seamlessly migrating servers to new servers leads to a
										strong online presence, increased website speed, and
										increased website security.
									</p>
								</li>
							</ul>
						</div>
						<div className="journey-content">
							<div className="flex justify-between gap-6">
								<p
									className="font-bold text-md
								sm:text-2xl">
									Computer Technician Intern
								</p>
								<p
									className="text-right font-bold text-md
								sm:text-2xl">
									Aug 2019 – Feb 2020
								</p>
							</div>
							<div className="flex justify-between mb-6">
								<p className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary">
									Sentra Computer
								</p>
								<p className="text-sm lg:text-lg text-right text-black-secondary dark:text-white-secondary">
									Lampung, Indonesia
								</p>
							</div>
							<ul className="flex flex-wrap gap-4 text-black-secondary dark:text-white-secondary">
								<li>
									<p className="text-sm lg:text-lg">
										I build, install, and troubleshoot computer devices more
										than 18 devices every days by collaboration with the team.
									</p>
								</li>
								<li>
									<p className="text-sm lg:text-lg">
										Performed daily quality checks for more than 20 components
										and devices every days, to get customer satisfaction.
									</p>
								</li>
								<li>
									<p className="text-sm lg:text-lg">
										Organized more than 25 incoming items almost every day, and
										arrange them neatly in the warehouse.
									</p>
								</li>
							</ul>
						</div>
						<div className="journey-content"></div>
					</div>
				</div>
			</section>
			<section id="talent" className="py-20">
				<div className="section-title mb-12 lg:mb-16">
					<p
						className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
						<b>Talent Fields</b>
					</p>
					<div
						className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
						<div className="flex justify-center items-center gap-6">
							<h1
								className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
								Talent Fields
							</h1>
							<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="grid xl:grid-cols-3 gap-6">
						<div>
							<h2 className="font-bold mb-4 text-2xl sm:text-4xl">
								Professional
							</h2>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Project Management
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Time Management
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Problem Solving
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Adaptability
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Self-Growth
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Teamwork
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Creativity
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Teaching
							</p>
						</div>
						<div>
							<h2 className="font-bold mb-4 text-2xl sm:text-4xl">Design</h2>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Responsive Web Design
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Mobile App Design
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Usability Testing
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Design Systems
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Design Thinking
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Prototyping
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Figma
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Maze
							</p>
						</div>
						<div>
							<h2 className="font-bold mb-4 text-2xl sm:text-4xl">
								Development
							</h2>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Tailwind CSS
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Typescript
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Bootstrap
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Next.js
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								HTML
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Sass
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								CSS
							</p>
							<p className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
								Git
							</p>
						</div>
					</div>
				</div>
			</section>
		</MainWrapper>
	)
}
