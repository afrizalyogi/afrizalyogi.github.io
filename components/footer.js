import { Code, Heart } from "lucide-react"

export default function Footer() {
	return (
		<footer
			className="mx-auto px-6 py-24 border-t border-gray-700 bg-black-primary text-white-primary
					sm:px-12
					lg:px-48">
			<div className="flex justify-start gap-4 mb-6">
				<a target="_blank"
					href="https://www.linkedin.com/in/afrizalyogi/"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					LinkedIn
				</a>
				<a target="_blank"
					href="https://instagram.com/afrizalyogi.id"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					Instagram
				</a>
				<a target="_blank"
					href="https://github.com/afrizalyogi"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					GitHub
				</a>
			</div>
			<div className="flex flex-col gap-4 mb-10">
				<h1
					className="text-lg text-white-primary font-bold
							sm:text-2xl
							lg:text-4xl">
					Let's collaborate! just reach me <br /> out -{" "}
					<a target="_blank" href={"mailto:afrizalyogi.id@gmail.com"}>
						afrizalyogi.id@gmail.com
					</a>
				</h1>
				<div className="flex gap-4">
					<div>
						<a target="_blank"
							href="https://jagoweb.com/"
							rel="noreferrer noopener">
							<img
								className="h-14 lg:h-20 rounded-md lg:rounded-xl"
								src="/assets/partner/jagoweb.png"
								alt="Web Hosting Murah Gratis Domain"
							/>
						</a>
					</div>
					<div>
						<a target="_blank"
							href="https://www.credly.com/badges/cfe9a8f9-4c22-43f0-86a1-d6d6eedab48a/public_url"
							rel="noreferrer noopener">
							<img
								className="h-14 lg:h-20 rounded-md lg:rounded-xl"
								src="/assets/partner/CCNAITN__1_.png"
								alt="Cisco Verified"
							/>
						</a>
					</div>
					<div>
						<a target="_blank"
							href="https://drive.google.com/file/d/10wNMEa0ZBIl03pmxuZxmPmZyGbepUSEa/view?usp=sharing"
							rel="noreferrer noopener">
							<img
								className="h-14 lg:h-20 rounded-md lg:rounded-xl"
								src="/assets/partner/bnsp.png"
								alt="Junior Web Developer"
							/>
						</a>
					</div>
				</div>
			</div>
			<div
				className="flex items-center text-sm sm:text-md">
				<Code className="mr-2 h-4 w-4" />
				with
				<Heart className="mx-2 h-4 w-4" />
				by &nbsp;
				<a target="_blank"
					href="/"
					rel="noopener noreferrer">
					<b>Afrizal Yogi Pratama</b>
				</a>
			</div>
		</footer>
	)
}
