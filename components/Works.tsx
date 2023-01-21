import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { images } from "../constants"
import LineGradient from "./LineGradient"

function Works() {
  const projectLinks = [
    {
      src: images.musicplayer,
      title: "Modern Music Player",
      subtitle: "A modern music App using",
      role: "Front End Next Js Developer/Team Lead",
      tech: [" Next Js", "Tailwind", "Redux Toolkit", "Redux Toolkit Query"],
      body: "Assembled and lead a team of 3 to create the core functionalities of the Music Player App and integrate third part APIs called Bug Hunter Lyriks app. The goal is to fetch as much APIs and put it into a well-designed web application.Implemented CI/CD pipeline with code linting and preview deploys.",
      liveUrl: "https://bughunters-lyriks.vercel.app/",
      gitUrl: "https://github.com/sethumadh/Modern-Music-Player",
    },
    // {
    //   src: images.filmpire,
    //   title: "Filmpire- World of Movies",
    //   subtitle: "A Movie App using",
    //   tech: " React Js, MUI, Redux Toolkit, Redux Toolkit Query",
    //   body: "- Movie Application for Movie Lovers to keep up to date withthe latest Movies. This project was built with React,rapidAPI, Redux, styled components and Alan AI. You can browse the latest movies and actors you love and also watch trailers,to get a preview.",
    //   liveUrl: "https://willowy-nougat-2d34e6.netlify.app/",
    //   gitUrl: "https://github.com/sethumadh/Filmpire_sethumadh",
    // },
    // {
    //   src: images.carrental,
    //   title: "MORENT Modern Car Rental Application",
    //   subtitle: "A modern car rental App using",
    //   tech: " MERN with TypeScript, Stripe for payments, Google Auth,Styled Components",
    //   body: "- A web-based application that allows users to rent cars from a variety of locations around the world. Users can search forcars based on their desired location and rental dates, viewa vailable options, and book their rental directly through the application.",
    //   liveUrl: "#",
    //   gitUrl:
    //     "https://github.com/sethumadh/MORENT_Modern_Car_Rental_Application",
    // },
    // {
    //   src: images.passwordapp,
    //   title: "Password Creator App",
    //   subtitle: "An App using",
    //   tech: " React Js, MUI ",
    //   body: "- An app for generating secure passwords using cryptographically secure pseudo-random number generators.",
    //   liveUrl: "https://password-creator-ten.vercel.app/",
    //   gitUrl: "https://github.com/sethumadh/Password-Creator",
    // },
  ]
  return (
    <section className={`works w-screen bg-white h-screen`}>
      <motion.nav
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[85%] mx-auto mt-12"
      >
        <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-8">
          <div className="mr-3"></div>
          <div className="relative">
            Projects
            <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
          </div>
        </div>
        <div className=" flex flex-col">
          {projectLinks.map((link) => (
            <div
              className=" w-full flex flex-col md:flex-row "
              key={link.title}
            >
              <div className="flex flex-col w-full md:w-2/3 mb-8">
                <h1 className="mb-2 px-4 py-2 text-4xl md:text-5xl font-semibold md:font-bold tracking-wide  text-center">
                  {link.title}
                </h1>
                <h1 className="mb-2 px-4 py-2 text-2xl md:text-3xl font-light md:font-semibold tracking-wide text-center">
                  {link.role}
                </h1>
                <div className="flex flex-wrap justify-center ">
                  {link.tech.map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mb-2 ">
                  <p className="leading-loose tracking-wide">{link.body}</p>
                </div>
                <div className="flex mx-auto items-center justify-between">
                  <Link
                    href={"#"}
                    className="mr-8 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
                  >
                    Project Details
                  </Link>
                  <Link
                    href={link.liveUrl}
                    className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
                  >
                    Demo
                  </Link>
                </div>
              </div>

              <div className=" w-full max-w-md mx-auto h-full md:w-1/3 hover:drop-shadow-2xl hover:shadow-black hover:shadow-2xl ">
                <Image
                  src={link.src}
                  alt="music"
                  className="w-full h-full  rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.nav>
    </section>
  )
}

export default Works
