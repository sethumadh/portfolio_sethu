import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
import { Link } from "react-scroll"

import { useScrollDirection } from "./hook/useScrollDirection"

type NavbarProps = {
  activePage: string
  setActivePage: Dispatch<SetStateAction<string>>
  isTopOfPage: boolean
}
const links = ["Home", "About", "Works", "Experience", "Contact"]

function Navbar({ activePage, setActivePage, isTopOfPage }: NavbarProps) {
  const scrollDirection = useScrollDirection()
  const [toggleMenu, setToggleMenu] = useState(false)
  const dynamicNavbarBG = !isTopOfPage
    ? "[#FFFAE9] shadow-md shadow-slate-400 "
    : ""
  console.log(scrollDirection)

  return (
    <motion.nav
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className={`navbar bg-blue flex flex-row justify-center items-center w-full backdrop-blur-lg mx-auto fixed top-0 right-0 left-0 z-20 px-4 md:px-24 py-4 md:py-4 bg-${dynamicNavbarBG} ${
        scrollDirection == "down" && !toggleMenu
          ? "-top-28 md:-top-24"
          : "top-0"
      } transition-all duration-750`}
    >
      <div className="max-w-[90%] w-[1700px] flex flex-row items-center justify-between mx-auto">
        <Link
          className="md:hidden md:text-6xl text-4xl font-playfair font-semibold cursor-pointer mr-12 "
          to="Home"
          smooth={true}
          offset={50}
          duration={500}
        >
          <h1>SM</h1>
        </Link>
        <ul className="hidden w-full md:flex md:flex-row md:items-center md:justify-center border-8 border-red">
          {links.map((link, i) => (
            <li
              key={i}
              className=" cursor-pointer capitalize font-medium tracking-[5px] hover:scale-105 duration-250 text-2xl"
            >
              <Link
                to={link}
                smooth={true}
                offset={-100}
                duration={500}
                className={
                  "" + activePage == link
                    ? "border-b-2 border-gray-400 pb-0 rounded-l-md rounded-r-md transition duration-300"
                    : ""
                }
                onClick={() => setActivePage(link)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
