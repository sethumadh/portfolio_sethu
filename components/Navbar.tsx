import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
// import { Link } from "react-scroll"
import Link from "next/link"

import { useScrollDirection } from "./hook/useScrollDirection"

type NavbarProps = {
  activePage: string
  setActivePage: Dispatch<SetStateAction<string>>
  isTopOfPage: boolean
}
const links = ["Home", "About", "Works", "Resume", "Contact"]

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
        hidden: { opacity: 0, x: 0 },
        visible: { opacity: 1, x: 0 },
      }}
      className={`navbar bg-blue h-[70px] md:h-20 flex flex-row justify-end items-center backdrop-blur-lg fixed top-0 right-0 left-0 z-20 md:py-4 bg-${dynamicNavbarBG} ${
        scrollDirection == "down" && !toggleMenu
          ? "-top-28 md:-top-28"
          : "top-0"
      } transition-all duration-750`}
    >
      <div className="w-[95%] flex flex-row items-center justify-between mx-auto">
        <Link
          className="signature text-white md:text-6xl text-4xl font-playfair font-semibold cursor-pointer"
          href="/"
          // smooth={true}
          // offset={50}
          // duration={500}
        >
          <h1>SM</h1>
        </Link>
        <ul className="links hidden w-full md:flex md:flex-row md:items-center md:justify-end ">
          {links.map((link, i) => (
            <li
              key={i}
              className="text-white xl:pl-20 lg:pl-16 md:pl-12 cursor-pointer capitalize font-medium tracking-[2px] hover:scale-105 duration-250 text-2xl"
            >
              <Link
                href={`/#${link}`}
                // smooth={true}
                // offset={-100}
                // duration={500}
                className={
                  "" + activePage == link
                    ? "border-b-2 border-gray-400 pb-0 rounded-l-md rounded-r-md transition duration-300"
                    : ""
                }
                // onClick={() => setActivePage(link)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        {!toggleMenu && (
          <FaBars
            size={30}
            className="burgerMenu md:hidden cursor-pointer text-white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <motion.nav
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className={`md:hidden flex flex-col fixed top-0 right-0 bottom-0 min-h-screen w-[200px] p-2 bg-mainbg1 bg-repeat `}
          >
            <div className="cursor-pointer z-20 text-slate-700 flex justify-end">
              <FaTimes size={30} onClick={() => setToggleMenu(!toggleMenu)} />
            </div>

            <ul className="mt-4 flex flex-col space-y-6 cursor-pointer">
              {links.map((link, i) => (
                <li
                  key={i}
                  className=" cursor-pointer capitalize font-medium hover:scale-105 duration-250 z-20 "
                >
                  <Link
                    href={`/#${link}`}
                    // smooth={true}
                    // offset={-100}
                    // duration={500}
                    onClick={() => {
                      setToggleMenu(!toggleMenu)
                      setActivePage(link)
                    }}
                    className={
                      activePage == link
                        ? "border-b-4 border-gray-600 pb-0 rounded-l-md rounded-r-md"
                        : ""
                    }
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
