import React from "react"
import { motion } from "framer-motion"

import LineGradient from "./LineGradient"

function Aboutme() {
  const serviceLinks = [
    {
      title: "UI/UX Design",
      h1: "Web Design",
      h2: "App Design",
      h3: "Dashboard Design",
      id: 1,
      style: "md:col-start-1 md:col-span-3",
    },
    {
      title: "App Development",
      h1: "Web Development",
      h2: "Product Development",
      h3: "Testing",
      id: 2,
      style: "md:col-start-4 md:col-span-3",
    },
    {
      title: "Branding",
      h1: "Brand Design",
      h2: "App Design",
      h3: "Brand Promotion",
      id: 3,
      style: "md:col-start-2 md:col-span-4",
    },
  ]

  const strengthLinks = [
    {
      title: "Collaborative",
      body: "Always keen to share my knowledge, help, discuss, teach and learn from others. Able to collaborate with cross functional teams to create a highquality end product.",
      id: 1,
      style: "md:col-start-1 md:col-span-3",
    },
    {
      title: "Result-oriented",
      body: "Focus on the progress with moving in the right direction. I always make sure on improving my work and my team's work",
      id: 2,
      style: "md:col-start-4 md:col-span-3",
    },
    {
      title: "Project Management & prioritization",
      body: "Before staring a new proect, I always set time aside to have the entire team go through the tasks, prioritize them and assign a due date to make sure deadlines are promptly met.",
      id: 3,
      style: "md:col-start-2 md:col-span-4",
    },
  ]
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
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <div className="font-playfair font-semibold text-xl md:text-4xl md:text-start mb-4 md:mb-24">
              <span className="text-gray-500">WHY</span>{" "}
              <span className="italic">HIRE ME</span>
              <LineGradient width="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8 w-full md:w-full  ">
            {serviceLinks.map((link) => (
              <div
                className={`border-8 border-none grid-flow-row shadow-lg shadow-slate-700 rounded-lg h-48 px-4 mx-4 py-4 ${link.style} hover:scale-105 transition duration-150`}
                key={link.id}
              >
                <div className=" mx-auto max-w-max  font-bold text-lg  md:text-3xl  mb-8 text-slate-600 border-b-4  border-b-slate-300 ">
                  <h1>{link.title}</h1>
                </div>
                <div className=" flex flex-col md:flex-row gap-2 justify-evenly font-bold text-center md:text-start text-md  md:text-2xl italic text-slate-700 ">
                  <div className="">{link.h1}</div>
                  <div className="">{link.h2}</div>
                  <div className="">{link.h3}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-32">
            <div className="font-playfair font-semibold text-xl md:text-4xl md:text-start mb-4 md:mb-24">
              <span className="text-gray-500">MY</span>{" "}
              <span className="italic">STRENGTHS</span>
              <LineGradient width="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8 w-full md:w-full">
            {strengthLinks.map((link) => (
              <div
                className={`border-8 border-none grid-flow-row shadow-lg shadow-slate-700 rounded-lg h-48 px-4 mx-4 py-4 ${link.style} hover:scale-105 transition duration-150`}
                key={link.id}
              >
                <div className="mx-auto max-w-max  font-bold text-lg  md:text-3xl  mb-8 text-slate-600 border-b-4  border-b-slate-300 ">
                  {link.title}
                </div>
                <div className=" flex justify-evenly font-semibold text-md  md:text-xl italic text-slate-700  ">
                  {link.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.nav>
    </section>
  )
}

export default Aboutme
