import EmailForm from "./email-form"

export default function Contact() {
	return (
		<section
			id="contact"
			className="mx-auto px-6 py-24 bg-black-primary text-white-primary
					sm:px-12
					lg:px-48">
			<div className="section-content">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
					<div>
						<h1
							className="text-3xl w-full mb-2 lg:mb-6 lg:w-auto mx-auto font-bold
        lg:text-6xl
        2xl:w-3/4 2xl:mx-0">
							Let's Talk About Your Project!
						</h1>
						<p className="text-sm lg:text-xl text-white-secondary xl:w-3/4">
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
