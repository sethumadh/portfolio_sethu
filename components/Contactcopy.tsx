import React from "react"
import { motion } from "framer-motion"
import { FcPhone, FcHome } from "react-icons/fc"

import LineGradient from "./LineGradient"
import Socialmedia from "./Socialmedia"

const Contactcopy = () => {
  return (
    <section
      className={`works md:min-h-screen max-w-[90%] w-[1800px] mx-auto mt-28`}
    >
      <motion.nav
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <form
          method="POST"
          target="_blank"
          action="https://formsubmit.co/6f9a7e423a081cf9a5e13b663d5c1dc5 "
          className="flex flex-col max-w-[1050px] w-full mx-auto"
        >
          <div className="flex flex-col  md:justify-center items-center">
            <div className="font-playfair font-semibold text-lg md:text-4xl  mb-8 md:mb-24">
              <span className="text-gray-500 tracking-wider">CONTACT </span>{" "}
              <span className="italic tracking-wider">ME</span>
              <LineGradient width="w-full" />
            </div>
          </div>
          <input
            className="bg-[#FAF9F6] p-2 "
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="my-4 p-2 bg-[#FAF9F6]"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="bg-[#FAF9F6] p-2"
            name="message"
            rows={10}
            placeholder="Message"
            required
          ></textarea>
          <button className=" border-2 bg-slate-400 rounded-lg font-semibold hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ">
            Submit
          </button>
          <div className="flex flex-col justify-center items-center">
            <div className="flex ">
              {" "}
              <FcPhone className="" size={30} />
              <h1 className="text-lg font-bold flex justify-center items-center">
                +61432844617
              </h1>
            </div>
            <div className=" flex justify-between ">
              {" "}
              <FcHome className="hidden md:flex" size={30} />
              <h1 className="text-lg font-bold flex justify-center items-center text-center ml-2">
                1728, 8 Gillingham Street, Woollongabba, QLD-4102 , Australia
              </h1>
            </div>
          </div>
        </form>
      </motion.nav>
      {/* <Socialmedia />  */}
    </section>
  )
}

export default Contactcopy
