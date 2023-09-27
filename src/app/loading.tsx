export default function Loading() {
	return (
		<main
			className="pt-24 px-6 sm:px-12 
		lg:px-48">
			<section
				className="flex flex-wrap-reverse gap-12 justify-center items-center py-16
    xl:flex-nowrap xl:justify-between">
				<div className="w-full lg:w-1/2">
					<div className="mb-12 w-full">
						<div className="skeleton h-20 w-full lg:w-3/4"></div>
						<br />
						<div className="skeleton h-20 w-full"></div>
					</div>
					<div
						className="flex flex-wrap gap-6 items-center justify-center text-black-secondary dark:text-white-secondary
        lg:gap-12 lg:flex-nowrap
        xl:justify-start">
						<div className="skeleton h-12 w-full lg:w-48"></div>
						<div
							className="flex w-full justify-center
          lg:w-auto">
							<div className="mr-12">
								<div className="skeleton h-12 w-12"></div>
							</div>
							<div className="mr-12">
								<div className="skeleton h-12 w-12"></div>
							</div>
							<div>
								<div className="skeleton h-12 w-12"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-96 w-full lg:w-1/2">
					<div className="skeleton h-full w-full lg:w-3/4 ml-auto"></div>
				</div>
			</section>
		</main>
	)
}
