import React from "react"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      
      className=" max-w-screen-lg mx-auto h-[90%] flex justify-center items-center py-12 p-4 mb-8"
    >
      <form
        method="POST"
        target="_blank"
        action="https://formsubmit.co/6f9a7e423a081cf9a5e13b663d5c1dc5 "
        className="flex flex-col max-w-[1050px] w-full"
      >
        <div className="pb-8 flex flex-col  md:justify-center items-center ">
          <p className="text-4xl font-bold inline border-b-4 border-deep-blue text-center md:text-start">
            Contact
          </p>
          <p className=" py-4 font-semibold text-center md:text-start ">
            Submit the form below or shoot me an email-Let us talk
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className=" border-2 bg-slate-400 rounded-lg font-semibold hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </motion.div>
  )
}

export default Contact
