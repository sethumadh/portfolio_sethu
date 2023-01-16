import React from "react"
import { motion } from "framer-motion"

import LineGradient from "./LineGradient"
import Image from "next/image"
import { images } from "../constants"

function Aboutme() {
  const testimonialLinks = [
    {
      src: images.cyril,
      name:"Emmanuel Cyril",
      title: " Lead Software Engineer",
      body: "'During my time at The JSM Masterclass Experience, I had the great fortune to work alongside Sethumadhavan. He's ability to think creatively and devise novel approaches to fixing bugs in code is awe-inspiring. Sethumadhavan is dogged and thorough when it comes to fixing bugs. Sethumadhavan will be a great addition to any group he joins. In addition to giving Sethumadhavan my highest recommendation, I am also pleased to call him a friend.'",
    },
    {
      src: images.adrian,
      name:"Adrian Hadjin",
      title: " Founder & CEO - JavaScript Mastery",
      title1: " Founder & CEO",
      sub: "JavaScript Mastery",
      body: "I am happy to recommend Sethumadhavan Kochukrishnan for his exceptional skills as a Full-Stack software engineer. Throughout my time with him on open-source projects, I was consistently impressed by his passion for code and ability to write clean, stable code. Seth is not only an active learner who is always eager to learn new knowledge but also someone who can find solutions when facing new difficulties. He is an excellent collaborator and communicator and played a vital role in our team. I highly recommend Seth for software engineering opportunities, and I am confident he will be a valuable asset to any team.",
    },
    {
      src: images.ahsan,
      name:"Ahsan Syed",
      title: " Full Stack Software Developer",
      body: "During my time working on CarRental, I had the pleasure of working alongside Sethu. I was impressed by his ability to communicate his problems and in the same breath find the solution to it. Sethu is more than capable of writing clean and effective code. Sethu has great understanding of Javascript and React hooks and has the trait of a developer who goes beyond. I highly recommend Sethu because I believe he would make a fine addition to anyone's team.",
    },
  ]
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
      title: "Project Management",
      body: "Before staring a new proect, I always set time aside to have the entire team go through the tasks, prioritize them and assign a due date to make sure deadlines are promptly met.",
      id: 3,
      style: "md:col-start-2 md:col-span-4",
    },
  ]
  return (
    <section
      className={`works md:min-h-screen max-w-[90%] w-[1800px] mx-auto mt-28`}
    >
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
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <div className="font-playfair font-semibold text-xl md:text-4xl md:text-start mb-12 md:mb-24">
              <span className="text-gray-500 tracking-wider">WHY</span>{" "}
              <span className="italic tracking-wider">HIRE ME</span>
              <LineGradient width="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8 w-full md:w-full  ">
            {serviceLinks.map((link) => (
              <div
                className={`border-8 border-none grid-flow-row shadow-lg shadow-slate-700 rounded-lg h-56 px-4 mx-4 py-4 ${link.style} hover:scale-105 transition duration-150`}
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
            <div className="font-playfair font-semibold text-xl md:text-4xl md:text-start mb-12 md:mb-24">
              <span className="text-gray-500 tracking-wider">MY</span>{" "}
              <span className="italic tracking-wider">STRENGTHS</span>
              <LineGradient width="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 grid-flow-row auto-rows-max gap-4 md:gap-8 w-full md:w-full ">
            {strengthLinks.map((link) => (
              <div
                className={`border-8 border-none grid-flow-row shadow-lg shadow-slate-700 rounded-lg h-56 px-4 py-4 ${link.style} hover:scale-105 transition duration-150`}
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
          <div className=" flex flex-col justify-center items-center mt-32 ">
            <div className="flex items-center justify-center  ">
              <div className="font-playfair font-semibold text-xl md:text-4xl md:text-start mb-12 md:mb-24">
                <span className="text-gray-500 tracking-wider">MY</span>{" "}
                <span className="italic tracking-wider">TESTIMONIALS</span>
                <LineGradient width="w-full" />
              </div>
            </div>
            <div className=" flex flex-col md:flex-row md:flex-wrap ">
              {testimonialLinks.map((link, i) => (
                <div
                  className="group flex-1 shadow-lg shadow-slate-700 flex flex-col justify-start items-center px-4 py-4 rounded"
                  key={i}
                >
                  <div className="h-1/3 flex flex-col justify-center items-center mb-6 md:mb-12 group-hover:scale-105 transition duration-150 ">
                    <Image
                      src={link.src}
                      alt="profilpictureoftest"
                      className="rounded-full w-36 h-[144px] flex justify-center items-center mb-2"
                    />
                    <h1 className="font-semibold text-xl mt-1 group-hover:scale-105 transition duration-150 ">{link.name}</h1>
                    <h1 className="font-semibold text-xl mt-1 hidden md:block group-hover:scale-105 transition duration-150 ">{link.title}</h1>
                    <h1 className="font-semibold text-xl mt-1 md:hidden group-hover:scale-105 transition duration-150 ">{link.title1}</h1>
                    <h1 className="font-semibold text-xl mt-1 md:hidden group-hover:scale-105 transition duration-150 ">{link.sub}</h1>
                  </div>
                  <div className=" h-full">
                    <p className="font-semibold text-lg italic text-center group-hover:scale-105 transition duration-150 ">
                      {link.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Aboutme
