import React from "react"
import { motion } from "framer-motion"

import LineGradient from "./LineGradient"

function Aboutme() {
  // md:min-h-screen mx-auto  flex justify-center  py-12 p-4 mb-8 border-8 border-red
  return (
    <section
      className={`works md:min-h-screen max-w-[90%] w-[1800px] mx-auto mt-28`}
    >
      <motion.nav
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex items-center justify-center">
          <div className="font-playfair font-semibold text-base md:text-4xl md:text-start mb-28">
            <span className="text-gray-500">ABOUT</span>{" "}
            <span className="italic">ME</span>
            <LineGradient width="w-full" />
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Sethumadhavan, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              A passionate Full-Stack software engineer and a code enthusiast
              with experience in building applications by writing clean, stable
              code. I am an active learner always keen to learn new knowledge
              and try to find solutions when facing new difficulties. A
              developer who is good at collaborating and communicating with
              others, especially playing vital role among teams.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row overflow-scroll h-[500px] ">
            <div className="min-w-[1000px] bg-red"> A passionate Full-Stack software engineer and a code enthusiast
              with experience in building applications by writing clean, stable
              code. I am an active learner always keen to learn new knowledge
              and try to find solutions when facing new difficulties. A
              developer who is good at collaborating and communicating with
              others, especially playing vital role among teams.</div>
            <div className="min-w-[1000px] bg-blue"> A passionate Full-Stack software engineer and a code enthusiast
              with experience in building applications by writing clean, stable
              code. I am an active learner always keen to learn new knowledge
              and try to find solutions when facing new difficulties. A
              developer who is good at collaborating and communicating with
              others, especially playing vital role among teams.</div>
        </div>
      </motion.nav>
    </section>
  )
}

export default Aboutme
