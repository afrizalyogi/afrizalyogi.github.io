"use client"
import Link from "next/link"
import { useState } from "react"
import ChangeTheme from "./theme"
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faGithub,
	faLinkedin,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons"
import { usePathname } from "next/navigation"

export default function Navbar() {
	const route = usePathname()
	const [isShow, setIsShow] = useState(false)

	return (
		<nav
			id="top"
			className="block fixed mx-auto px-6 py-6 w-full z-50 items-center justify-between bg-white-primary dark:bg-black-secondary
			sm:px-12
			lg:px-48">
			<div className="flex gap-4 items-center justify-between text-black-secondary dark:text-white-secondary ">
				<Link
					href="/"
					className="text-xl sm:text-2xl font-bold text-black-secondary hover:text-black-primary dark:text-white-secondary dark:hover:text-white-primary">
					Afrizal Yogi Pratama.
				</Link>
				{!isShow ? (
					<div
						id="hamburger"
						className="text-right cursor-pointer scale-75 sm:scale-100"
						onClick={() => setIsShow(true)}>
						<div className="hamburger-1 bg-black-secondary dark:bg-white-secondary"></div>
						<div className="hamburger-2 bg-black-secondary dark:bg-white-secondary"></div>
					</div>
				) : (
					<div
						id="close"
						className="text-right cursor-pointer hover:text-black-primary dark:hover:text-white-primary"
						onClick={() => setIsShow(false)}>
						<FontAwesomeIcon
							icon={faTimes}
							className="
              text-2xl
            xl:text-3xl
            "
						/>
					</div>
				)}
			</div>
			{isShow && (
				<div className="w-full h-screen">
					<div className="collapsed py-12 lg:py-36">
						<div
							className="flex flex-wrap gap-16 justify-center items-center
            md:flex-nowrap
            2xl:justify-between">
							<div
								className="flex flex-wrap lg:flex-nowrap lg:gap-16 text-center
              lg:text-left">
								<div className="w-full lg:w-auto">
									<ul
										className="text-black-secondary dark:text-white-secondary 
                    text-3xl
                    md:text-2xl
                    xl:text-3xl 
                    2xl:text-5xl">
										<li className="py-4 lg:py-8">
											<Link
												href="/"
												className={
													route === "/"
														? "font-bold  text-black-primary dark:text-white-primary"
														: ""
												}>
												Home
											</Link>
										</li>
										<li className="py-4 lg:py-8">
											<Link
												href="/"
												className={
													route === "/projects"
														? "font-bold  text-black-primary dark:text-white-primary"
														: ""
												}>
												Projects
											</Link>
										</li>
										<li className="py-4 lg:py-8">
											<Link
												href="/"
												className={
													route === "/services"
														? "font-bold  text-black-primary dark:text-white-primary"
														: ""
												}>
												Services
											</Link>
										</li>
									</ul>
								</div>
								<div className="w-full lg:w-auto">
									<ul
										className="text-black-secondary dark:text-white-secondary
                    text-3xl
                    md:text-2xl
                    xl:text-3xl 
                    2xl:text-5xl">
										<li className="py-4 lg:py-8">
											<Link
												href="/"
												className={
													route === "/certificates"
														? "font-bold  text-black-primary dark:text-white-primary"
														: ""
												}>
												Certificates
											</Link>
										</li>
										<li className="py-4 lg:py-8">
											<Link
												href="/"
												className={
													route === "/about"
														? "font-bold  text-black-primary dark:text-white-primary"
														: ""
												}>
												About me
											</Link>
										</li>
										<li className="py-4 lg:py-8">
											<Link
												href="/"
												className={
													route === "/blog"
														? "font-bold  text-black-primary dark:text-white-primary"
														: ""
												}>
												Blog
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="hidden lg:block">
								<h2
									className="font-bold mb-2
                md:text-xl
                xl:text-3xl  
                2xl:text-5xl">
									Let's work together!
								</h2>
								<p
									className="text-black-secondary dark:text-white-secondary mb-8
                  text-md
                  xl:text-xl
                ">
									I aspire to consistently enhance my knowledge <br />
									and advance my career. I'm open to collaboration.
								</p>
								<div className="flex">
									<div className="flex text-black-secondary dark:text-white-secondary">
										<Link
											href="mailto:afrizalyogi.id@gmail.com"
											className="flex items-center mr-4
                      text-md
                      xl:text-xl">
											<FontAwesomeIcon
												icon={faEnvelope}
												className="mr-2
                        text-2xl
                        xl:text-3xl"
											/>
											afrizalyogi.id@gmail.com
										</Link>
										<Link
											href="#"
											className="hover:text-blue-primary mx-4
                      text-2xl
                      xl:text-4xl">
											<FontAwesomeIcon icon={faLinkedin} />
										</Link>
										<Link
											href="#"
											className="hover:text-blue-primary mx-4
                      text-2xl
                      xl:text-4xl">
											<FontAwesomeIcon icon={faGithub} />
										</Link>
										<Link
											href="#"
											className="hover:text-blue-primary mx-4
                      text-2xl
                      xl:text-4xl">
											<FontAwesomeIcon icon={faTelegram} />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<ChangeTheme></ChangeTheme>
					</div>
				</div>
			)}
		</nav>
	)
}
