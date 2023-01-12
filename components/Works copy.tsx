import React from "react"
import { motion } from "framer-motion"
import { images } from "../constants"
import Image from "next/image"
import LineGradient from "./LineGradient"

function Works() {
  return (
    <section
      className={`works md:min-h-screen max-w-[90%] w-[1800px] mx-auto border-8 border-red `}
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
     
      </motion.nav>
    </section>
  )
}

export default Works
