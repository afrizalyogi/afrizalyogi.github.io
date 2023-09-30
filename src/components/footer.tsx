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
				<div className="flex gap-6">
					<div>
						<a
							href="https://jagoweb.com/"
							target="_blank"
							rel="noreferrer noopener">
							<img
								className="h-14 lg:h-20"
								src="https://www.jagoweb.com/image/media/small/media_2109014358png"
								alt="Web Hosting Murah Gratis Domain"
							/>
						</a>
					</div>
					{/* <div className="academy-badge">
						<a
							href="https://app.hubspot.com/academy/achievements/xs9ff36q/en/1/afrizal-yogi-pratama/digital-marketing"
							title="Digital Marketing ">
							<img
								className="h-16 lg:h-24"
								src="https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/d4e18b74118e4e1dbc3b5a1e8075cfb5.png"
								alt="HubSpot Credentials"
							/>
						</a>
					</div> */}
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
