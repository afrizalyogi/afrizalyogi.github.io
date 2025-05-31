import Link from "next/link"
import Image from "next/image";
import servicesData from '../../data/service';

export default function Services() {
	return (
		<section id="service" className="py-20">
			<div className="section-title mb-12 lg:mb-16">
				<p
					className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
					<b>What I Did</b>
				</p>
				<div
					className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
					<div className="flex justify-center items-center gap-6">
						<h1
							className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
							What I Did
						</h1>
						<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
					</div>
				</div>
			</div>
			<div className="section-content">
      <div className="grid xl:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className=" group service-content h-64 xl:h-96 2xl:h-72 drop-shadow-lg rounded-xl border-2 border-white-secondary dark:border-gray-700">
            <Link href={"/service"}>
              <Image
                src={service.imageSrc}
                alt={service.altText}
                width={700}
                height={400}
                className="service-img group-hover:scale-125"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
							<div className="absolute inset-0 bg-black-primary opacity-25"></div>
              <div className="service-text p-12">
                <h2 className="font-bold text-white-primary mb-2 text-2xl sm:text-4xl">
                  {service.title}
                </h2>
                <p className="text-white-secondary text-sm lg:text-lg">
                  {service.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
		</section>
	)
}
