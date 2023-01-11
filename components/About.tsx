import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { Dispatch, SetStateAction } from "react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import Image from "next/image"

import Socialmedia from "./Socialmedia"
import { images } from "../constants"

type AboutProps = {
  setActivePage: Dispatch<SetStateAction<string>>
}

function About({ setActivePage }: AboutProps) {
  return (
    <section className="mt min-h-screen max-w-[90%] w-[1800px] mx-auto flex flex-col items-center justify-center border-8 border-green-400">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="border-8 border-red flex flex-col md:justify-evenly items-center md:flex-row-reverse w-full "
      >
        <div className="md:w-2/5 w-full border-8">
          <Image
            src={images.sethu}
            alt="sethu"
            className="w-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center items-center border-8 px-4">
          <h2 className="mt-4 text-6xl font-playfair font-semibold md:text-start text-center mb-2 ">
            Software Developer
          </h2>
          <h1 className="text-5xl font-playfair text-center md:text-start">
            Sethu Madhavan
          </h1>
          <h3 className="mt-4 mb-4 text-lg text-center  ">
            A passionate Full-Stack software engineer and a code enthusiast with
            experience in building applications by writing clean, stable code.
          </h3>
          <div className="flex flex-row gap-4 justify-center items-center md:justify-start">
            <Link
              to={`Contact`}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setActivePage("Contact")}
              className="cursor-pointer  bg-gradient-rainblue text-deep-blue rounded-lg py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            >
              My Works
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
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex md:hidden"
      >
        <Socialmedia />
      </motion.div>
      <div className="hidden md:flex"><Socialmedia /></div>
      
    </section>
  )
}

export default About
