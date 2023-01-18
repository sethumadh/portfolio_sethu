import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { Dispatch, SetStateAction } from "react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import Image from "next/image"
import { FcBinoculars } from "react-icons/fc"

// import Socialmedia from "./Socialmedia"
import { images } from "../constants"

type AboutProps = {
  setActivePage: Dispatch<SetStateAction<string>>
}

function About({ setActivePage }: AboutProps) {
  return (
    <section className="pt-24 md:pt-0 md:h-screen  flex flex-col  items-center justify-center bg-mainbg1 bg-no-repeat ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className=" flex flex-col max-w-[90%] w-[1800px] mx-auto md:justify-evenly items-end md:flex-row-reverse  space-y-12 md:space-y-0"
      >
        <div className=" flex flex-col justify-center items-center px-4 h-full">
          <div className="max-w-[1000px] mx-auto w-full grid md:grid-cols-2 gap-8 px-4  mb-8 md:mb-24">
            <div className="sm:text-right md:text-6xl text-2xl font-bold text-gray-700  flex items-center ">
              <p className="">
                Hi. I am{" "}
                <span className="italic text-deep-blue">Sethumadhavan</span>,
                nice to{" "}
                <span className="italic text-deep-blue ">meet you.</span> Please
                take a look around.{" "}
              </p>
            </div>
            <div className=" w-full h-full ">
              <Image
                src={images.sethuNewpic}
                alt="sethu"
                className="md:w-full md:h-full rounded-full md:rounded-none w-60 h-60 object-cover object-top mx-auto"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  justify-center items-center text-center w-full ">
            <Link
              to={`Works`}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setActivePage("Works")}
              className="group md:mr-8 mb-2 md:mb-0 flex flex-row w-1/3 md:w-1/4 justify-center items-center  text-center cursor-pointer bg-gradient-rainblue  text-deep-blue rounded-lg py-3 px-7 font-semibold hover:bg-blue  transition duration-500"
            >
              <h1 className="md:text-xl"> See My Works</h1>
              <div className="group-hover:rotate-90 transition duration-200"></div>
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
              className="group flex flex-row w-1/3 md:w-1/4 justify-center items-center  text-center cursor-pointer bg-gray-300  text-deep-blue rounded-lg py-3 px-7 font-semibold hover:bg-blue  transition duration-500"
            >
              <h1 className="md:text-xl">Download CV</h1>
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
        {/* <Socialmedia /> */}
      </motion.div>
      {/* <div className="hidden md:flex">
        <Socialmedia />
      </div> */}
    </section>
  )
}

export default About
