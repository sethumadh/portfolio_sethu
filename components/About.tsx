import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { Dispatch, SetStateAction } from "react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import Socialmedia from "./Socialmedia"

type AboutProps = {
  setActivePage: Dispatch<SetStateAction<string>>
}

function About({ setActivePage }: AboutProps) {
  return (
    <section
     
      className="container w-full mx-auto py-4 px-4 md:gap-16 gap-6 flex flex-col md:flex-row-reverse md:items-start justify-center mb-8"
    >
      <div className="max-w-screen-lg mx-auto py-4  md:gap-16 gap-6 flex flex-col md:flex-row-reverse md:items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" md:w-1/4 w-2/3 h-2/3 mx-auto flex justify-center mt-8 "
        >
          <img
            src={`/sethu3.jpg`}
            alt="sethu"
            className="rounded-3xl object-cover"
          />
        </motion.div>
        <div className="md:mt-12 mt-2 md:w-1/2 px-8 md:ml-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="text-6xl font-playfair text-center md:text-start">
              Sethu Madhavan
            </h1>
            <h2 className="mt-4 text-xl md:text-start text-center">
              Software Developer
            </h2>
            <h3 className="mt-4 mb-4 text-sm text-center md:text-start max-w-lg">
              A passionate Full-Stack software engineer and a code enthusiast
              with experience in building applications by writing clean, stable
              code.
            </h3>
          </motion.div>
          <motion.div
            className="flex flex-row gap-4 justify-center items-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link
              to={`Contact`}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setActivePage("Contact")}
              className="cursor-pointer bg-gradient-rainblue text-deep-blue rounded-lg py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            >
              Contact Me
            </Link>
            <Link
              to={`Contact`}
              href="/resume.pdf"
              download={true}
              rel="noreferrer"
              target="_blank"
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setActivePage("Contact")}
              className="group flex flex-row  items-center cursor-pointer bg-gray-300  text-deep-blue rounded-lg py-3 px-7 font-semibold hover:bg-blue  transition duration-500"
            >
              Download CV
              <div className="group-hover:rotate-90 transition duration-200">
                <MdOutlineKeyboardArrowRight size={20} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
      <Socialmedia />
    </section>
  )
}

export default About
