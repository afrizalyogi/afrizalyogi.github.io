import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Footer() {
	return (
		<footer
			className="mx-auto px-6 py-24 bg-black-primary text-white-primary dark:bg-white-secondary dark:text-black-secondary
					sm:px-12
					lg:px-48">
			<div className="flex justify-start gap-4 mb-4">
				<Link
					href="#"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					LinkedIn
				</Link>
				<Link
					href="#"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					GitHub
				</Link>
				<Link
					href="#"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					Telegram
				</Link>
			</div>
			<h1
				className="text-lg font-bold mb-10
							sm:text-2xl
							lg:text-4xl">
				Let's collaborate! just reach me <br /> out -{" "}
				<Link href="mailto:afrizalyogi.id@gmail.com" target="_blank">
					afrizalyogi.id@gmail.com
				</Link>
			</h1>
			<div
				className="text-sm
						sm:text-md">
				Built
				<FontAwesomeIcon icon={faCode} className="mx-2" />
				with
				<FontAwesomeIcon icon={faHeart} className="mx-2" />
				by{" "}
				<Link
					href="https://afrizalyogi.github.io"
					target="_blank"
					rel="noopener noreferrer">
					<b>Afrizal Yogi Pratama</b>
				</Link>
			</div>
		</footer>
	)
}
