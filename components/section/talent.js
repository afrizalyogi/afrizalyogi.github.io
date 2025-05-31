import talentData from "../../data/talent.json";

export default function Talent() {
	return (
		<section id="talent" className="py-20">
			<div className="section-title mb-12 lg:mb-16">
				<p
					className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
					sm:text-7xl sm:-mt-12
					lg:right-auto lg:left-24 lg:text-8xl 
					xl:-mt-16
				">
					<b>Talent Fields</b>
				</p>
				<div
					className="flex flex-wrap gap-6 justify-center items-center
    lg:flex-nowrap lg:justify-between">
					<div className="flex justify-center items-center gap-6">
						<h1
							className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
        sm:text-5xl">
							Talent Fields
						</h1>
						<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
					</div>
				</div>
			</div>
			<div className="section-content">
        <div className="grid xl:grid-cols-3 gap-6">
          {talentData.map((field, index) => (
            <div key={index} className="rounded-xl border-2 p-12 border-white-secondary dark:bg-gray-800 dark:border-gray-700">
              <h2 className="font-bold mb-4 text-2xl sm:text-4xl">
                {field.title}
              </h2>
              {field.skills.map((skill, skillIndex) => (
                <p
                  key={skillIndex}
                  className="my-1 text-black-secondary dark:text-white-secondary text-sm lg:text-lg"
                >
                  {skill}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
		</section>
	)
}
