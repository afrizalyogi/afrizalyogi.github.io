import Link from "next/link"
import MainWrapper from "../../components/main-wrapper"
import EmailForm from "../../components/email-form"

export default function Service() {
	return (
		<MainWrapper>
			<section id="service" className="py-20">
				<div className="section-title mb-12 lg:mb-16">
					<p
						className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
						<b>Service</b>
					</p>
					<div
						className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
						<div className="flex justify-center items-center gap-6">
							<h1
								className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
								Service
							</h1>
							<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="grid xl:grid-cols-3 gap-6">
						<div
							id="service-1"
							className="service-content h-64 xl:h-96 2xl:h-72 drop-shadow-lg rounded-xl border-2">
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
						</div>
						<div
							id="service-2"
							className="service-content h-64 xl:h-96 2xl:h-72 drop-shadow-lg rounded-xl border-2">
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
						</div>
						<div
							id="service-3"
							className="service-content h-64 xl:h-96 2xl:h-72 drop-shadow-lg rounded-xl border-2">
							<div className="service-img"></div>
							<div className="service-text p-12">
								<h2 className="font-bold text-white-primary mb-2 text-2xl sm:text-4xl">
									Front-end Website Development
								</h2>
								<p className="text-white-secondary text-sm lg:text-lg">
									Transforming design into functional, responsive code for both
									Desktop and Mobile.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="contact" className="py-20">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
					<div className="section-title">
						<h1
							className="text-3xl w-full mb-2 lg:mb-6 lg:w-auto mx-auto font-bold
							lg:text-7xl">
							Let's Talk About Your Project!
						</h1>
						<p className="text-sm lg:text-xl text-black-secondary dark:text-white-secondary xl:w-3/4">
							I aspire to consistently enhance my knowledge and advance my
							career. I'm open to collaboration.
						</p>
					</div>
					<div className="section-content">
						<EmailForm></EmailForm>
					</div>
				</div>
			</section>
		</MainWrapper>
	)
}
