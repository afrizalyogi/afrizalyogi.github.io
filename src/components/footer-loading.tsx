export default function FooterLoading() {
	return (
		<footer
			className="mx-auto px-6 py-24 bg-black-primary text-white-primary
					sm:px-12
					lg:px-48">
			<div className="flex justify-start gap-4 mb-6">
				<div className="skeleton h-6 w-36"></div>
				<div className="skeleton h-6 w-36"></div>
				<div className="skeleton h-6 w-36"></div>
			</div>
			<div className="flex flex-wrap gap-4 mb-6">
				<div className="skeleton h-12 w-1/2"></div>
				<div className="skeleton h-12 w-1/2"></div>
			</div>
			<div>
				<div className="skeleton h-6 w-96"></div>
			</div>
		</footer>
	)
}
