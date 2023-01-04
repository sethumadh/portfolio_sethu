import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
import { Link } from "react-scroll"

type NavbarProps = {
  activePage: string
  setActivePage: Dispatch<SetStateAction<string>>
  isTopOfPage: boolean
}
const links = ["Home", "About", "Works", "Experience", "Contact"]
function Navbar({ activePage, setActivePage, isTopOfPage }: NavbarProps) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const dynamicNavbarBG = !isTopOfPage
    ? "[#FFFAE9] shadow-md shadow-slate-400 "
    : ""
  console.log(isTopOfPage, dynamicNavbarBG)

  return (
    <nav
      className={`bg-red bg-repeat z-1000 fixed top-0 flex flex-row items-center justify-between p-2 pr-4 container mx-auto  max-w-screen-lg py-6  transition duration-150 bg-${dynamicNavbarBG} `}
    >
      <div className="text-4xl font-playfair font-semibold ml-4 cursor-pointer">
        <Link to="Home" smooth={true} offset={50} duration={500}>
          <h1>SM</h1>
        </Link>
      </div>

      <ul className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-16">
        {links.map((link, i) => (
          <li
            key={i}
            className="mr-4 cursor-pointer capitalize font-medium hover:scale-105 duration-250 text-lg semi-bold "
          >
            <Link
              to={link}
              smooth={true}
              offset={50}
              duration={500}
              className={
                activePage == link
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
      {!toggleMenu && (
        <FaBars
          size={30}
          className="md:hidden md:mr-4 cursor-pointer  text-slate-700"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      )}
      {toggleMenu && (
        <motion.div
          whileInView={{ x: [200, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="md:hidden flex flex-col fixed right-0 bottom-0 h-full bg-slate-200 w-[200px] p-2"
        >
          <div className="cursor-pointer z-20 text-slate-700 flex justify-end">
            <FaTimes size={30} onClick={() => setToggleMenu(!toggleMenu)} />
          </div>

          <ul className="mt-4 flex flex-col space-y-6 cursor-pointer">
            {links.map((link, i) => (
              <li
                key={i}
                className=" cursor-pointer capitalize font-medium hover:scale-105 duration-250 z-20"
              >
                <Link
                  to={link}
                  smooth={true}
                  offset={50}
                  duration={500}
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
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
