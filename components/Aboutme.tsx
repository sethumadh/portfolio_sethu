import React, { useState } from "react"
import { motion } from "framer-motion"
import { FcApprove, FcAlarmClock } from "react-icons/fc"
import Image from "next/image"
import Link from "next/link"

import LineGradient from "./LineGradient"
import { images } from "../constants"

function Aboutme() {
  const items = [
    {
      id: 6,
      src: images.next,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 4,
      src: images.react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: images.typescript,
      title: "TypeScript",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: images.tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: images.redux,
      title: "Redux",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: images.node,
      title: "Node js",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: images.js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: images.graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: images.github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 1,
      src: images.html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: images.css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: images.framer,
      title: "Framer Motion",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: images.mongodb,
      title: "Mongo DB",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: images.sanity,
      title: "Sanity",
      style: "shadow-gray-400",
    },
  ]

  return (
    <section className={`Aboutme w-screen border-8 border-red  bg-slate-100`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[85%] mx-auto border-8 border-red min-h-screen mt-12"
      >
        <h1 className="text-center text-3xl font-semibold text-deep-blue sm:text-5xl leading-loose tracking-wide pt-2 underline">
          About me
        </h1>
        <div className=" flex flex-col md:flex-row border-8 border-red mt-2 py-4">
          <div className="w-full max-w-lg  mx-auto md:w-1/3">
            <Image
              src={images.sethuNewpic}
              alt="sethu"
              className=" object-cover"
            />
          </div>
          <div className="flex flex-col grow border-8 border-blue">
            <div className="flex flex-col">
              <h1 className="text-center text-2xl underline font-semibold">
                {" "}
                My Skills and Toolbox
              </h1>
              <div className="w-full grid grid-cols-4 sm:grid-cols-7 text-center py-4">
                {items.map(({ id, src, title }) => {
                  return (
                    <div
                      className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg flex flex-col justify-between items-center"
                      key={id}
                    >
                      <Image
                        src={src}
                        alt={"tech"}
                        className="w-6 sm:w-8 md:w-12  mx-auto pt-4"
                      />
                      <p className="mt-2 mb-0 text-sm font-semibold flex items-end justify-ccenter">
                        {title}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Aboutme
