import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function BackToTop() {
	return (
		<section id="back-to-top">
			<Link
				href="#top"
				className="rounded-full fixed flex items-center justify-center bottom-12 right-12 border-2 h-8 w-8 bg-none border-white-primary">
				<FontAwesomeIcon icon={faChevronUp} className="text-white-primary" />
			</Link>
		</section>
	)
}
