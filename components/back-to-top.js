import Link from "next/link"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
	return (
		<section id="back-to-top">
			<Link
				href="#top"
				className="rounded-full fixed flex items-center justify-center bottom-12 right-12 border-2 h-8 w-8 bg-none border-white-primary">
				<ChevronUp className="text-white-primary" />
			</Link>
		</section>
	)
}
