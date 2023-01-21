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
      title: "Next",
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
      id: 9,
      src: images.redux,
      title: "Redux",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: images.tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: images.node,
      title: "Node",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: images.js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 13,
      src: images.sanity,
      title: "Sanity",
      style: "shadow-gray-400",
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
  ]

  return (
    <section className={`Aboutme w-screen  bg-white`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[85%] mx-auto  min-h-screen mt-12"
      >
        {" "}
        <div className="flex justify-center md:justify-start text-2xl sm:text-3xl font-semibold tracking-wide mb-4 ">
          <div className="mr-3">Who is </div>
          <div className="relative">
            Sethu?
            <div className="h-[13.5px] w-[98%] bg-orange-600 absolute bottom-0 -z-30"></div>
          </div>
        </div>
        <div className=" flex flex-col items-center md:flex-row  mt-2 py-4 ">
          <div className="w-full max-w-lg min-w-[200px] mx-auto md:w-1/3">
            <Image
              src={images.sethuNewpic}
              alt="sethu"
              className=" object-cover"
            />
          </div>
          <div className="flex flex-col justify-center mt-3 md:ml-3 md:w-2/3 grow ">
            <div className=" w-full mx-auto flex flex-col">
              <p className="leading-relaxed tracking-wide text-lg md:text-xl font-light">
                I am an Engineer Graduate specialized in Electronics and
                communication and my passion for coding started since I was in
                school with JavaScript and C++. I sweat the details. I&apos;m
                happiest when I&apos;m creating, learning, exploring and
                thinking about how to make things better. I&apos;m passionate
                about bringing both the technical and visual aspects of digital
                products to life. User experience, writing clean accessible,
                human code matter to me. And as someone who follows of John
                Maeda&apos;s Laws Of Simplicity, I agree that less is more.
              </p>
              <Link href={`#`} className="text-orange-500 font-bold text-lg pt-4">
                Keep reading my bio
              </Link>
            </div>
          </div>
        </div>
        <div className=" mt-8">
          <div className="flex justify-center md:justify-start text-2xl sm:text-3xl font-semibold tracking-wide mb-4 md:mb-8 ">
            <div className="mr-3">My </div>
            <div className="relative">
              Toolbox
              <div className="h-[13.5px] w-[98%] bg-orange-600 absolute bottom-0 -z-30"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full text-center py-4">
            {items.map(({ id, src, title }) => {
              return (
                <div
                  className=" w-16 sm:w-16 md:w-20 mr-4 px-2 hover:scale-110 duration-500 rounded-lg flex flex-col justify-between items-center"
                  key={id}
                >
                  <Image
                    src={src}
                    alt={"tech"}
                    title={title}
                    className="w-full mx-auto pt-4 "
                  />
                  <p className="mt-2 mb-0 text-sm font-semibold flex items-end justify-center ">
                    {title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Aboutme
