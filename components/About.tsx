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
    <section className="pt-24 md:pt-0 md:min-h-screen max-w-[90%] w-[1800px] mx-auto flex flex-col items-center justify-center ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className=" flex flex-col md:justify-evenly items-center md:flex-row-reverse w-full "
      >
        <div className="md:w-2/5 w-full ">
          <Image
            src={images.sethu}
            alt="sethu"
            className="w-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center items-center px-4   h-full">
          <div className="max-w-[1000px] mx-auto w-full grid sm:grid-cols-2 gap-8 px-4  mb-8">
            <div className="sm:text-right text-4xl font-bold ">
              <p>
                Hi. I'm Sethumadhavan, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div className=" text-lg md:text-xl">
              <p>
                I am a passionate Full-Stack software engineer and a code enthusiast
                with experience in building applications by writing clean,
                stable code. Active learner always keen for new knowledge and
                find solutions whle facing new difficulties. A developer good at
                collaborating and communicating with others, who plays vital
                role among teams.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center md:justify-start">
            <Link
              to={`Works`}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setActivePage("Contact")}
              className="cursor-pointer w-1/2 h-12 bg-gradient-rainblue text-deep-blue rounded-lg py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
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
              className="group flex flex-row h-12 w-1/2 items-center cursor-pointer bg-gray-300  text-deep-blue rounded-lg py-3 px-7 font-semibold hover:bg-blue  transition duration-500"
            >
              <h1>Download CV</h1>
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
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex md:hidden"
      >
        <Socialmedia />
      </motion.div>
      <div className="hidden md:flex">
        <Socialmedia />
      </div>
    </section>
  )
}

export default About
