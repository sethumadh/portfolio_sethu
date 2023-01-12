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
    <motion.nav
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className={`navbar max-w-[90%] w-[1800px] mx-auto border-8 border-red fixed top-0 right-0 left-0 bg-hero z-20 flex flex-row items-center justify-between  px-2 py-6 md:py-2 transition duration-150 bg-${dynamicNavbarBG} `}
    >
      <div className="md:text-6xl text-2xl font-playfair font-semibold cursor-pointer">
        <Link to="Home" smooth={true} offset={50} duration={500}>
          <h1>SM</h1>
        </Link>
      </div>

      <ul className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-16">
        {links.map((link, i) => (
          <li
            key={i}
            className=" cursor-pointer capitalize font-medium tracking-[5px] hover:scale-105 duration-250 text-2xl  "
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
    </motion.nav>
  )
}

export default Navbar
