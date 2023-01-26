import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { images } from "../constants"
import LineGradient from "./LineGradient"

function Works() {
  const projectLinks = [
    {
      src: images.lyrikslt,
      title: "Lyriks",
      subtitle: "- Modern Music Player",
      role: "Front End Next Js Developer/Team Lead",
      tech: [" Next Js", "Tailwind", "Redux Toolkit", "Redux Toolkit Query"],
      body: "Assembled and lead a team of 3 to create the core functionalities of the Music Player App and integrate third part APIs called Bug Hunter Lyriks app. The goal is to fetch as much APIs and put it into a well-designed web application.Implemented CI/CD pipeline with code linting and preview deploys.",
      liveUrl: "https://bughunters-lyriks.vercel.app/",
      gitUrl: "https://github.com/sethumadh/Modern-Music-Player",
    },
    {
      src: images.filmpirelt  ,
      title: "Filmpire",
      subtitle: "- World of Movies",
      role: "Front End React Js Developer",
      tech: ["React Js", "MUI", "Redux Toolkit", "Redux Toolkit Query"],
      body: "A Solo project to create core features and integrate third party APIs. Implemented CI/CD pipeline with code linting and preview deploys",
      liveUrl: "https://willowy-nougat-2d34e6.netlify.app/",
      gitUrl: " ",
    },
    {
      src: images.morentlt,
      title: "Morent",
      subtitle: "- Modern Car Rental Application",
      role: "Full Stack Developer",
      tech: [
        "MERN",
        "TypeScript",
        "Stripe for payments",
        "Google OAuth",
        "Styled Components",
      ],
      body: "A Core Member of a 3 member team responsible for creating core functionalities implemented on a custom designed schema using Mongo DB with back-end created upon Node and Express and using React with tailwind on fron end. Implemented CI/CD pipeline with Typescript type-checking, database migration and code linting",
      liveUrl: "#",
      gitUrl:
        "https://github.com/sethumadh/MORENT_Modern_Car_Rental_Application",
    },
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
    <section className={`works bg-white `}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.0 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0.2, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[90%] max-w-7xl mx-auto mt-8 md:mt-12"
      >
        <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
          <div className="mr-3">Featured</div>
          <div className="relative">
            Projects
            <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
          </div>
        </div>
        <div className=" flex flex-col">
          {projectLinks.map((link) => (
            <div
              className=" w-full flex flex-col md:flex-row mb-8 "
              key={link.title}
            >
              <div className="flex flex-col w-full md:w-[55%] mb-8 ">
                <h1 className="px-4 md:px-0 md:pr-4 py-2 text-2xl sm:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  {link.title}{" "}
                  <span className="text-xl md:text-2xl">{link.subtitle}</span>
                </h1>
                <h1 className="px-4 md:px-0 md:pr-4 py-2 text-sm md:text-base font-light md:font-semibold tracking-wide text-center  md:text-left">
                  {link.role}
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start px-4 md:px-0 md:pr-4 py-2 ">
                  {link.tech.map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text  "
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mb-2 md:mb-4 px-4 md:px-0 md:pr-4 py-2">
                  <p className="leading-loose tracking-wide">{link.body}</p>
                </div>
                <div className="flex mx-auto items-center justify-between mb-3 md:mb-0 ">
                  <Link
                    href={`/project/${link.title}`}
                    className="mr-8 text-sm md:text-base relative -top-1 -left-1 bg-orange-700  py-2.5 px-3 md:px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/project/${link.title}`}
                    className="mr-8 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-3 md:px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Github
                  </Link>
                  <Link
                    target={`_blank`}
                    href={link.gitUrl}
                    className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-3 md:px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Demo
                  </Link>
                </div>
              </div>

              <Link href={link.liveUrl} target="_blank" className=" w-full max-w-xl pb-4 md:py-4 mx-auto my-auto h-full md:w-xl flex items-center ">
                <Image src={link.src} alt="music" className="w-full rounded" />
              </Link >
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Works
