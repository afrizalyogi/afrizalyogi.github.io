import MainWrapper from "../../components/main-wrapper"
import Hero from "../../components/section/hero"
import Link from "next/link"
import Image from "next/image"
import {linkData} from "../../data/links"

export default function Links() {
	return (
		<MainWrapper>
			<Hero></Hero>
			<section id="link" className="py-20 flex justify-center">
				<div className="section-content -mt-24 max-w-2xl flex flex-col gap-4">
					{linkData.map((link, index) => {
            let Icon = link.icon

            return (
              link.style === "small" ? (
                <Link
                  key={index}
                  href={link.href}
                  className={`
                    w-full justify-between p-6 rounded-2xl border-2 items-center flex hover:scale-105 relative
                    text-black-primary border-white-secondary hover:text-black-primary! hover:border-black-primary
                    dark:text-white-primary dark:border-gray-800 dark:hover:text-white-primary! dark:hover:border-white-primary
                    ${link.highlight ? "wiggle-animation border-black-secondary! dark:border-white-secondary!" : ""}
                  `}
                  target="_blank"
                >
                  {link.imageSrc && (
                    <div>
                      <Image
                        src={link.imageSrc}
                        alt={link.text}
                        width={50}
                        height={50}
                        className="w-15 h-15 absolute top-1.5 left-1.5 rounded-lg object-cover"
                        quality={80}
                      />
                    </div>
                  )}
                  <div className="flex flex-col xl:flex-row text-md sm:text-lg mx-auto text-center items-center gap-2">
                    {Icon && <Icon className="w-8 h-8" />}
                    {link.text}
                  </div>
                </Link>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className={`
                    w-full justify-between p-2 rounded-2xl border-2 items-center hover:scale-105 text-center
                    text-black-primary border-white-secondary hover:text-black-primary! hover:border-black-primary
                    dark:text-white-primary dark:border-gray-800 dark:hover:text-white-primary! dark:hover:border-white-primary
                    sm:text-sm
                    2xl:text-lg
                    ${link.highlight ? "wiggle-animation border-black-secondary! dark:border-white-secondary!" : ""}
                  `}
                  target="_blank"
                >
                  {link.imageSrc && (
                    <div>
                      <Image
                        src={link.imageSrc}
                        alt={link.text}
                        width={1000}
                        height={500}
                        className="w-full h-84 rounded-lg object-cover"
                        quality={80}
                      />
                    </div>
                  )}
                  <div className="flex text-md sm:text-lg mx-auto items-center justify-center gap-2">
                    {Icon && <Icon />}
                    <div className="flex flex-col mt-6 text-center leading-5">
                      {link.text}
                      {link.priceSale && <b className="mt-4 text-4xl">{link.priceSale}</b>}
                      {link.price && <s>{link.price}</s>}
                    </div>
                  </div>
                </Link>
              )
            );
          })}
				</div>
			</section>
		</MainWrapper>
	)
}
