import React from "react"
import { motion } from "framer-motion"

import { Socialmedia } from "./index"

const Footer = () => {
  return (
    <section className={`works bg-gray-900 text-white `}>
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.0 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0.2, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[95%] max-w-7xl mx-auto   mt-8 md:mt-12"
      >
        <div className="flex flex-col md:flex-row justify-around items-end py-4">
            <p className="font-mulish font-semibold text-xl w-full flex justify-center">
              SethuMadhavan (aka Sethu)
            </p>
            <p className="font-playfair text-xs md:text-lg font-semibold w-full flex justify-center ">
              ©2023 Powered by Next JS, TypeScript & Tailwind.
            </p>
      </div>
    </motion.footer>
    </section>
  )
}

export default Footer
