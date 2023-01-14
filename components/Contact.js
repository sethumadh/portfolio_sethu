import React from "react"
import { motion } from "framer-motion"

import LineGradient from "./LineGradient"

const Contact = () => {
  return (
    <section className=" md:min-h-screen max-w-[90%] w-[1800px] mx-auto flex flex-col items-center justify-center mt-28 ">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className= "w-full md:min-h-screen  flex flex-col md:justify-center md:items-center  "
    >
      <form
        method="POST"
        target="_blank"
        action="https://formsubmit.co/6f9a7e423a081cf9a5e13b663d5c1dc5 "
        className="flex flex-col max-w-[1050px] w-full"
      >
        <div className="flex flex-col  md:justify-center items-center">
          <div className="font-playfair font-semibold text-base md:text-4xl mb-8 md:mb-24">
            <span className="text-gray-500">CONTACT   </span>{" "}
            <span className="italic">ME</span>
            <LineGradient />
          </div>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className=" border-2 bg-slate-400 rounded-lg font-semibold hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </motion.div>
     </section>
  )
}

export default Contact
