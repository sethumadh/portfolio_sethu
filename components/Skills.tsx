import React from "react"
import { motion } from "framer-motion"
import { images } from "../constants"
import Image from "next/image"
import LineGradient from "./LineGradient"

const Skills = () => {
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
    <section className=" md:min-h-screen max-w-[90%] w-[1800px] mx-auto flex flex-col items-center justify-center border-8 border-orange-400">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="w-full md:min-h-screen border-8 border-blue flex flex-col md:justify-center md:items-center "
    >
        <div className="font-playfair font-semibold text-4xl">
            <span className="text-gray-500">Technologies</span> <span className="italic">I have worked with</span> 
            <LineGradient width="w-full"/>
          </div>
          
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {items.map(({ id, src, title }) => {
            return (
              <div
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
                key={id}
              >
                <Image src={src} alt={"tech"} className="w-20 mx-auto" />
                <p className="my-4">{title}</p>
              </div>
            )
          })}
        </div>
      
    </motion.div>
    </section>
  )
}

export default Skills
