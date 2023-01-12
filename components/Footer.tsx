import React from "react"
import { motion } from "framer-motion"

import { Socialmedia } from "./index"

const Footer = () => {
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
    >
      <footer className="border-8 border-red w-[90%] max-w-[1800px] mx-auto flex flex-row justify-around items-center py-4">
            <p className="font-playfair font-semibold text-2xl w-1/2 flex justify-center ">
              Sethu Madhavan
            </p>
            <p className="font-playfair text-md font-semibold w-1/2 flex justify-center ">
              ©2022 Powered by Next JS, TypeScript and Tailwind.
            </p>
      </footer>
    </motion.div>
  )
}

export default Footer
