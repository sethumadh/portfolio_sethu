import React from "react"
import { motion } from "framer-motion"
import { images } from "../constants"
import Image from "next/image"
import LineGradient from "./LineGradient"
import Link from "next/link"

function Works() {
  return (
    <section
      className={`works md:min-h-screen max-w-[90%] w-[1800px] mx-auto border-8 border-red mt-40`}
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
          <div className="font-playfair font-semibold text-4xl text-center md:text-start mb-12">
            <span className="text-gray-500">My</span>{" "}
            <span className="italic">Projects</span>
            <LineGradient width="w-full" />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 md:px-4 ">
          <div className=" border-8 border-red drop-shadow-2xl flex flex-col justify-between ">
            <div className="flex flex-col w-full ">
              <div className="mt-4 flex flex-col ">
                <Image
                  src={images.musicplayer}
                  alt="music"
                  className="w-full  md:h-[480px] md:object-cover object-left-top rounded-2xl "
                />
                <h1 className="pt-4 text-2xl font-semibold text-center md:text-start ">
                  Modern Music Player
                </h1>
                <p className="py-4 text-2xl text-center md:text-start">
                  A modern music App using{" "}
                  <span className="text-2xl font-bold text-slate-500 italic">
                    Next Js,{" "}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    Tailwind,{" "}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    Redux Toolkit,{" "}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    Redux Toolkit Query{" "}
                  </span>{" "}
                  - The goal is to fetch as much APIs and put it into a
                  well-designed web application.
                </p>
              </div>
            </div>
            <div className="flex flex-row border-8 border-red items-center justify-center">
              <Link
                href={`https://bughunters-lyriks.vercel.app/`}
                target="_blank"
                className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-slate-500 w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
              >
                Demo
              </Link>
              <Link
                href={`https://github.com/sethumadh/Modern-Music-Player`}
                target="_blank"
                className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-slate-500 w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
              >
                Code
              </Link>
            </div>
          </div>

          <div className=" border-8 border-red drop-shadow-2xl flex flex-col justify-between ">
            <div className="flex flex-col w-full">
              <div className="mt-4 flex flex-col ">
                <Image
                  src={images.filmpire}
                  alt="music"
                  className="w-full  md:h-[480px] md:object-cover object-left-top rounded-2xl "
                />
                <h1 className="pt-4 text-2xl font-semibold text-center md:text-start ">
                  Filmpire- World of Movies
                </h1>
                <p className="py-4 text-2xl text-center md:text-start">
                  A Movie App using{" "}
                  <span className="text-2xl font-bold text-slate-500 italic">
                    React Js,{" "}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    MUI,{" "}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    Redux Toolkit,{" "}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    Redux Toolkit Query{" "}
                  </span>{" "}
                  - Movie Application for Movie Lovers to keep up to date with
                  the latest Movies. This project was built with React,
                  rapidAPI, Redux, styled components and Alan AI. You can browse
                  the latest movies and actors you love and also watch trailers,
                  to get a preview.
                </p>

                <div className="flex flex-row "></div>
              </div>
            </div>
            <div className="flex flex-row border-8 border-red items-center justify-center">
              <Link
                href={`https://willowy-nougat-2d34e6.netlify.app/`}
                target="_blank"
                className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-slate-500 w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
              >
                Demo
              </Link>
              <Link
                href={`https://github.com/sethumadh/Filmpire_sethumadh`}
                target="_blank"
                className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-slate-500 w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
              >
                Code
              </Link>
            </div>
          </div>

          <div className=" border-8 border-red drop-shadow-2xl flex flex-col justify-between ">
            <div className="flex flex-col w-full ">
              <div className="mt-4 flex flex-col ">
                <Image
                  src={images.carrental}
                  alt="music"
                  className="w-full  md:h-[480px] md:object-cover object-left-top rounded-2xl "
                />
                <h1 className="pt-4 text-2xl font-semibold text-center md:text-start ">
                  MORENT Modern Car Rental Application
                </h1>
                <p className="py-4 text-2xl text-center md:text-start">
                  A modern car rental App using{" "}
                  <span className="text-2xl font-extrabold text-slate-500 italic">
                    MERN with TypeScript, 
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    Stripe for payments, {" "}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    Google Auth, {" "}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    Styled Components {" "}
                  </span>{" "}
                  - A web-based application that allows users to rent cars from
                  a variety of locations around the world. Users can search for
                  cars based on their desired location and rental dates, view
                  available options, and book their rental directly through the
                  application.
                </p>
              </div>
            </div>
            <div className="flex flex-row border-8 border-red items-center justify-center">
              <Link
                href={`#`}
                target="_blank"
                className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-slate-500 w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
              >
                Demo
              </Link>
              <Link
                href={`https://github.com/sethumadh/MORENT_Modern_Car_Rental_Application`}
                target="_blank"
                className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-slate-500 w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
              >
                Code
              </Link>
            </div>
          </div>

          <div className=" border-8 border-red drop-shadow-2xl flex flex-col justify-between ">
            <div className="flex flex-col w-full ">
              <div className="mt-4 flex flex-col ">
                <Image
                  src={images.passwordapp}
                  alt="music"
                  className="w-full  md:h-[480px] md:object-cover object-left-top rounded-2xl "
                />
                <h1 className="pt-4 text-2xl font-semibold text-center md:text-start ">
                  Password Creator App
                </h1>
                <p className="py-4 text-2xl text-center md:text-start">
                  An App using{" "}
                  <span className="text-2xl font-bold text-slate-500 italic">
                    React Js,{" "}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 italic">
                    MUI,{" "}
                  </span>
                  
                  - An app for generating secure passwords using cryptographically secure pseudo-random number generators. 
                </p>
              </div>
            </div>
            <div className="flex flex-row border-8 border-red items-center justify-center">
              <Link
                href={`https://password-creator-ten.vercel.app/`}
                target="_blank"
                className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-slate-500 w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
              >
                Demo
              </Link>
              <Link
                href={`https://github.com/sethumadh/Password-Creator`}
                target="_blank"
                className="mx-4 text-center font-semibold text-lg bg-gradient-to-r from-slate-500 w-full md:w-1/3 px-4 py-2 rounded-lg hover:bg-blue hover:text-gray-600"
              >
                Code
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>
    </section>
  )
}

export default Works
