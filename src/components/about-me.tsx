import {
	faMugHot,
	faPalette,
	faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AboutMe() {
	return (
		<section id="about" className="py-20">
			<div className="section-title mb-6 lg:mb-12">
				<p
					className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
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
					<div className="drop-shadow-lg rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
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
					<div className="drop-shadow-lg rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
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
