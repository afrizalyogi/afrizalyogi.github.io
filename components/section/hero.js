import Link from "next/link"
import { Mail, Linkedin, Github, MessagesSquare, Instagram } from "lucide-react"
import {
	ProfileTriangle,
	ProfileBase,
	ProfileCircle,
} from "./profile-img"

export default function Home() {
	return (
    <section
      id="hero"
      className="flex flex-wrap-reverse justify-center items-center pt-36 pb-16 xl:pt-16
      xl:flex-nowrap xl:justify-between">
      <div id="hero-text">
        <h1
          className="
        text-4xl text-center font-bold 2xl:leading-26 max-w-3xl pb-6 drop-shadow-xl
        sm:text-5xl
        md:text-6xl
        lg:pb-16
        xl:text-left
        2xl:text-8xl 2xl:max-w-5xl
        ">
          I <b className="hover:bg-blue-primary duration-300">Design</b>,{" "}
          <b className="hover:bg-blue-primary duration-300">Develop</b>, and
          always <b className="hover:bg-blue-primary duration-300">Learn</b>.
        </h1>
        <div
          id="hero-cta"
          className="flex flex-wrap gap-6 items-center justify-center text-black-secondary dark:text-white-secondary
          lg:gap-12 lg:flex-nowrap
          xl:justify-start">
          <Link
            target="_blank" href={"https://wa.me/628998536999?text=Hi!%20I%27d%20like%20to%20learn%20more%20about%20your%20services."}
            className="
              w-80 xl:w-fit justify-center p-4 rounded-2xl text-white-primary bg-blue-primary items-center flex hover:bg-blue-secondary hover:text-white-primary!
              sm:text-sm
              lg:px-6
              2xl:text-lg
              ">
            <MessagesSquare className="mr-2" />
            Free Consultation
          </Link>
          <div
            className="flex w-full justify-center
            lg:w-auto">
            <div className="mr-8 xl:mr-12">
              <Link target="_blank" href={"https://www.linkedin.com/in/afrizalyogi/"}>
                <Linkedin className="xl:h-8 xl:w-8" />
              </Link>
            </div>
            <div className="mr-8 xl:mr-12">
              <Link target="_blank" href={"https://instagram.com/afrizalyogi.id"}>
                <Instagram className="xl:h-8 xl:w-8" />
              </Link>
            </div>
            <div className="mr-8 xl:mr-12">
              <Link target="_blank" href={"https://github.com/afrizalyogi"}>
                <Github className="xl:h-8 xl:w-8" />
              </Link>
            </div>
            <div>
              <Link target="_blank" href={"mailto:afrizalyogi.id@gmail.com"}>
                <Mail className="xl:h-8 xl:w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="hero-img">
        <ProfileCircle></ProfileCircle>
        <ProfileBase></ProfileBase>
        <ProfileTriangle></ProfileTriangle>
      </div>
    </section>
  )
}