import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
	return (
		<footer
			className="mx-auto px-6 py-24 border-t-2 border-black-bg bg-black-primary text-white-primary
					sm:px-12
					lg:px-48">
			<div className="flex justify-start gap-4 mb-6">
				<a
					href="https://www.linkedin.com/in/afrizalyogi/"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					LinkedIn
				</a>
				<a
					href="https://github.com/afrizalyogi"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					GitHub
				</a>
				<a
					href="https://t.me/afrizalyogi"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					Telegram
				</a>
			</div>
			<div className="flex flex-col gap-4 mb-10">
				<h1
					className="text-lg text-white-primary font-bold
							sm:text-2xl
							lg:text-4xl">
					Let's collaborate! just reach me <br /> out -{" "}
					<a href={"mailto:afrizalyogi.id@gmail.com"} target="_blank">
						afrizalyogi.id@gmail.com
					</a>
				</h1>
				<div className="flex gap-4">
					<div>
						<a
							href="https://jagoweb.com/"
							target="_blank"
							rel="noreferrer noopener">
							<img
								className="h-14 lg:h-20 rounded-md lg:rounded-xl"
								src="/assets/partner/jagoweb.png"
								alt="Web Hosting Murah Gratis Domain"
							/>
						</a>
					</div>
					<div>
						<a
							href="https://www.credly.com/badges/cfe9a8f9-4c22-43f0-86a1-d6d6eedab48a/public_url"
							target="_blank"
							rel="noreferrer noopener">
							<img
								className="h-14 lg:h-20 rounded-md lg:rounded-xl"
								src="/assets/partner/CCNAITN__1_.png"
								alt="Cisco Verified"
							/>
						</a>
					</div>
					<div>
						<a
							href="https://drive.google.com/file/d/10wNMEa0ZBIl03pmxuZxmPmZyGbepUSEa/view?usp=sharing"
							target="_blank"
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
				className="text-sm
						sm:text-md">
				<FontAwesomeIcon icon={faCode} className="mx-2" />
				with
				<FontAwesomeIcon icon={faHeart} className="mx-2" />
				by{" "}
				<a
					href="https://afrizalyogi.studio"
					target="_blank"
					rel="noopener noreferrer">
					<b>Afrizal Yogi Pratama</b>
				</a>
			</div>
		</footer>
	)
}
