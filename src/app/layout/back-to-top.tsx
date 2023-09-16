import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function BackToTop() {
	return (
		<section id="back-to-top">
			<Link
				href="#top"
				className="rounded-full fixed flex items-center justify-center bottom-12 right-12 border-2 h-8 w-8 bg-white-primary border-black-secondary dark:bg-black-primary dark:border-white-secondary">
				<FontAwesomeIcon
					icon={faChevronUp}
					className="text-black-primary text-xl -m-1 dark:text-white-primary"
				/>
			</Link>
		</section>
	)
}
