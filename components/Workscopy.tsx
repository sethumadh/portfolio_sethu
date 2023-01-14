import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Pagination, Navigation } from "swiper"

import { images } from "../constants"
import LineGradient from "./LineGradient"

function Works() {
  const projectLinks = [
    {
      src: images.musicplayer,
      title: "Modern Music Player",
      subtitle: "A modern music App using",
      tech: " Next Js, Tailwind, Redux Toolkit, Redux Toolkit Query",
      body: "- The goal is to fetch as much APIs and put it into a well-designed web application.",
      liveUrl: "https://bughunters-lyriks.vercel.app/",
      gitUrl: "https://github.com/sethumadh/Modern-Music-Player",
    },
    {
      src: images.filmpire,
      title: "Filmpire- World of Movies",
      subtitle: "A Movie App using",
      tech: " React Js, MUI, Redux Toolkit, Redux Toolkit Query",
      body: "- Movie Application for Movie Lovers to keep up to date withthe latest Movies. This project was built with React,rapidAPI, Redux, styled components and Alan AI. You can browse the latest movies and actors you love and also watch trailers,to get a preview.",
      liveUrl: "https://willowy-nougat-2d34e6.netlify.app/",
      gitUrl: "https://github.com/sethumadh/Filmpire_sethumadh",
    },
    {
      src: images.carrental,
      title: "MORENT Modern Car Rental Application",
      subtitle: "A modern car rental App using",
      tech: " MERN with TypeScript, Stripe for payments, Google Auth,Styled Components",
      body: "- A web-based application that allows users to rent cars from a variety of locations around the world. Users can search forcars based on their desired location and rental dates, viewa vailable options, and book their rental directly through the application.",
      liveUrl: "#",
      gitUrl:
        "https://github.com/sethumadh/MORENT_Modern_Car_Rental_Application",
    },
    {
      src: images.passwordapp,
      title: "Password Creator App",
      subtitle: "An App using",
      tech: " React Js, MUI ",
      body: "- An app for generating secure passwords using cryptographically secure pseudo-random number generators.",
      liveUrl: "https://password-creator-ten.vercel.app/",
      gitUrl: "https://github.com/sethumadh/Password-Creator",
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
        <div className="flex items-center justify-center">
          <div className="font-playfair font-semibold text-base md:text-4xl md:text-start mb-4 md:mb-24">
            <span className="text-gray-500">MY</span>{" "}
            <span className="italic">PROJECTS</span>
            <LineGradient width="w-full" />
          </div>
        </div>
        {images && <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className=" max-w-[1200px]"
        >
          {projectLinks.map((link) => (
            <SwiperSlide
              className=" drop-shadow-2xl flex flex-col justify-between py-12 "
              key={link.title}
            >
              <div className="flex flex-col w-full ">
                <div className="mt-4 flex flex-col ">
                  <Image
                    src={link.src}
                    alt="music"
                    className="w-full  md:h-[680px] md:object-cover object-left-top rounded-2xl "
                  />
                  <h1 className="py-8 mt-2 text-3xl font-semibold text-center md:text-start ">
                    {link.title}
                  </h1>
                  <p className="py-4 text-2xl text-center md:text-start">
                    {link.subtitle}
                    <span className="text-2xl font-bold text-slate-500 italic">
                      {link.tech}{" "}
                    </span>{" "}
                    {link.body}
                  </p>
                </div>
              </div>
              <div className="flex flex-row  items-center justify-center">
                <Link
                  href={link.liveUrl}
                  target="_blank"
                  className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-slate-500 w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
                >
                  Demo
                </Link>
                <Link
                  href={link.gitUrl}
                  target="_blank"
                  className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-white w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
                >
                  Code
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>}
      </motion.nav>
    </section>
  )
}

export default Works