import EmailForm from "./email-form"

export default function Contact() {
	return (
		<section id="contact" className="py-20">
			<div className="section-title mb-6 lg:mb-12">
				<p
					className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
      sm:text-7xl sm:-mt-12
      lg:right-auto lg:left-24 lg:text-8xl 
      xl:-mt-16">
					<b>Contact</b>
				</p>
				<div
					className="flex flex-wrap gap-6 justify-center items-center
    lg:flex-nowrap lg:justify-between">
					<div className="flex justify-center items-center gap-6">
						<h1
							className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
        sm:text-5xl">
							Contact
						</h1>
						<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
					</div>
				</div>
			</div>
			<div className="section-content">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
					<div>
						<h1
							className="text-3xl w-full mb-2 lg:mb-6 lg:w-auto mx-auto font-bold
        lg:text-6xl
        2xl:w-3/4 2xl:mx-0">
							Let's Talk About Your Project!
						</h1>
						<p className="text-sm lg:text-xl text-black-secondary dark:text-white-secondary xl:w-3/4">
							I aspire to consistently enhance my knowledge and advance my
							career. I'm open to collaboration.
						</p>
					</div>
					<div>
						<EmailForm></EmailForm>
					</div>
				</div>
			</div>
		</section>
	)
}
