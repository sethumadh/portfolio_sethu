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
      <footer className="border-t-4 border-gray-500 mb-4 py-4 ">
        <div className="max-w-screen-lg mx-auto">
          <div className="md:flex justify-center md:justify-between text-center ">
            <p className="font-playfair font-semibold text-2xl ">
              Sethu Madhavan
            </p>
            <p className="font-playfair text-md font-semibold">
              ©2022 Powered by Next JS, TypeScript and Tailwind.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Footer
