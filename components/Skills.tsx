import React from "react"
import { motion } from "framer-motion"

const Skills = () => {
  const items = [
    {
      id: 1,
      src: "html.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "css.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "javascript.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "react.png",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "nextjs.png",
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: "graphql.png",
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: "git.png",
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: "redux.png",
      title: "Redux",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: "typescript.png",
      title: "TypeScript",
      style: "shadow-gray-400",
    },
  ]
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      id="Experience"
      className="min-h-screen max-w-screen-lg mx-auto py-32 md:py-28 px-16"
    >
      <div className="flex flex-col  md:justify-center md:items-center border-red ">
        <p className="text-4xl font-bold  border-b-4 p-0 border-deep-blue text-center md:text-start">
          Experience
        </p>
        <p className=" py-4 font-semibold text-center md:text-start max-w-lg">
          Technologies I have worked with.
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {items.map(({ id, src, title }) => {
            return (
              <div
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
                key={id}
              >
                <img src={src} alt={src} className="w-20 mx-auto" />
                <p className="my-4">{title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
