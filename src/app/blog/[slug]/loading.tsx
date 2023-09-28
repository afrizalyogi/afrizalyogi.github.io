export default function Loading() {
	return (
		<main
			className="pt-24 px-6 sm:px-12 
		lg:px-48">
			<section className="py-20 max-w-screen-md mx-auto">
				<div className="section-title mb-12">
					<div className="skeleton h-16 w-3/4 mx-auto lg:mx-0"></div>
				</div>
				<div className="section-content">
					<div className="grid grid-cols-1 justify-center gap-6">
						<div className="skeleton h-12 w-full"></div>
						<div className="skeleton h-12 w-full"></div>
						<div className="skeleton h-12 w-full"></div>
					</div>
				</div>
			</section>
		</main>
	)
}
