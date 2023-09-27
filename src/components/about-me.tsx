"use client"
import {
	faMugHot,
	faPalette,
	faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typewriter from "typewriter-effect"

export default function AboutMe() {
	return (
		<section id="about" className="py-20">
			<div className="section-content">
				<div className="mb-12">
					<h2 className="flex flex-wrap font-bold mb-6 text-3xl sm:text-5xl">
						Hello! I'm Yogi,&nbsp;
						<Typewriter
							options={{
								strings: ["a Front-end Website Developer", "an UI/UX Designer"],
								autoStart: true,
								loop: true,
							}}
						/>
					</h2>
					<p className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary">
						An Informatics student with a fervent passion for technology and a
						certified Junior Web Developer. Proficient in HTML, CSS, SASS,
						JavaScript, Bootstrap, and TailwindCSS. I have honed my skills
						through practical experience as a Computer Technician and Website
						Developer. With a strong curiosity and the ability to quickly pick
						up new skills, I am a fast learner who can seamlessly adapt to new
						environments.
					</p>
				</div>
				{/* </div> */}
				<div className="grid xl:grid-cols-3 gap-6">
					<div className="rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
						<div className="absolute p-4 border-2 rounded-xl -mt-24 mx-auto bg-white-primary dark:bg-black-bg">
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
					<div className="rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
						<div className="absolute p-4 border-2 rounded-xl -mt-24 mx-auto bg-white-primary dark:bg-black-bg">
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
					<div className="rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
						<div className="absolute p-4 border-2 rounded-xl -mt-24 mx-auto bg-white-primary dark:bg-black-bg">
							<FontAwesomeIcon
								icon={faPalette}
								className="text-4xl lg:text-5xl"
							/>
						</div>
						<h2 className="font-bold mb-2 text-2xl sm:text-4xl">Curious</h2>
						<p className="text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
							I am a curios person who loves to learn and to explore some- thing
							new as well to look for a solution to any problem.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
