"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import ChangeTheme from "./theme"
import { X, Home, FolderOpen, BookOpen, Settings, ShoppingCart, User, Mail, Linkedin, Github, MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation';
import { navigationLinks, contactLinks } from "../data/navbar.js"

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-50%" },
}

export default function Navbar() {
  const route = usePathname()
  const [isShow, setIsShow] = useState(false)
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    window.location.href = '/';
  };

  useEffect(() => {
    setIsShow(false)
  }, [])

  return (
    <nav
      id="top"
      className="block fixed backdrop-blur mx-auto px-6 py-6 w-screen z-50 items-center justify-between bg-white-primary/90 dark:bg-black-primary/90 border-b border-gray-200 dark:border-gray-700
      sm:px-12
      lg:px-48"
    >
      <div className="flex gap-4 items-center justify-between text-black-secondary dark:text-white-secondary">
        <Link
          href="/"
          onClick={handleClick}
          className="text-xl sm:text-2xl font-bold text-black-secondary hover:text-black-primary! dark:text-white-secondary dark:hover:text-white-primary!"
        >
          Afrizal Yogi Pratama.
        </Link>
        {!isShow ? (
          <div
            id="hamburger"
            className="group text-right cursor-pointer scale-75 sm:scale-100"
            onClick={() => setIsShow(true)}
          >
            <div className="hamburger-1 bg-black-secondary group-hover:bg-black-primary dark:bg-white-secondary dark:group-hover:bg-white-primary"></div>
            <div className="hamburger-2 bg-black-secondary group-hover:bg-black-primary dark:bg-white-secondary dark:group-hover:bg-white-primary"></div>
          </div>
        ) : (
          <div
            id="close"
            className="text-right cursor-pointer hover:text-black-primary dark:hover:text-white-primary"
            onClick={() => setIsShow(false)}
          >
            <X className="h-8 w-8" />
          </div>
        )}
      </div>
      <motion.div variants={variants} animate={isShow ? "open" : "closed"}>
        {isShow && (
          <div className="h-screen" onClick={() => setIsShow(false)}>
            <div className="collapsed py-12 lg:py-36">
              <div
                className="flex flex-wrap gap-16 justify-center items-center
                md:flex-nowrap
                2xl:justify-between"
              >
                <div
                  className="flex flex-wrap lg:flex-nowrap lg:gap-16 text-center
                  lg:text-left"
                >
                  <div className="w-full lg:w-auto">
                    <ul
                      className="text-black-secondary dark:text-white-secondary
                      text-3xl
                      md:text-2xl
                      xl:text-3xl
                      2xl:text-5xl"
                    >
                      {navigationLinks.slice(0, 3).map((link, index) => {
                        let Icon = link.icon
                        return (
                        <li key={index} className="py-4 lg:py-8">
                          <Link
                            href={link.href}
                            
                            className={`flex gap-6 items-center ${
                              route === link.href
                                ? "font-bold text-black-primary dark:text-white-primary"
                                : ""
                            }`}
                            onClick={link.href === "/" && handleClick}
                          >
                            <Icon className="h-10 w-10" />
                            {link.title}
                          </Link>
                        </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="w-full lg:w-auto">
                    <ul
                      className="text-black-secondary dark:text-white-secondary
                      text-3xl
                      md:text-2xl
                      xl:text-3xl
                      2xl:text-5xl"
                    >
                      {navigationLinks.slice(3).map((link, index) => {
                        let Icon = link.icon
                        return (
                        <li key={index} className="py-4 lg:py-8">
                          <Link
                            href={link.href}
                            className={`flex gap-6 items-center ${
                              route === link.href
                                ? "font-bold text-black-primary dark:text-white-primary"
                                : ""
                            }`}
                          >
                            <Icon className="h-10 w-10" />
                            {link.title}
                          </Link>
                        </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <h2
                    className="font-bold mb-2
                    md:text-xl
                    xl:text-3xl
                    2xl:text-5xl"
                  >
                    Let's work together!
                  </h2>
                  <p
                    className="text-black-secondary dark:text-white-secondary mb-8
                    text-md
                    xl:text-xl"
                  >
                    I aspire to consistently enhance my knowledge <br />
                    and advance my career. I'm open to collaboration.
                  </p>
                  <div className="flex items-center text-black-secondary dark:text-white-secondary">
                    {contactLinks.map((contact, index) => {
                      let Icon = contact.icon
                      return (
                      <Link
                        key={index}
                        href={contact.href}
                        className={`
                          flex items-center
                          ${contact.icon === Mail ? "mr-4" : "mx-4"}
                          text-md xl:text-xl
                          ${contact.icon !== Mail ? "hover:text-blue-primary" : ""}
                        `}
                        target="_blank"
                      >
                        <Icon className="mr-2 text-2xl xl:text-4xl" />
                        {contact.text}
                      </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <ChangeTheme></ChangeTheme>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  )
}