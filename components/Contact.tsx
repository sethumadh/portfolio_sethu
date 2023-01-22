import React from "react"
import { motion } from "framer-motion"
import { FcPhone, FcHome } from "react-icons/fc"

import LineGradient from "./LineGradient"
import Socialmedia from "./Socialmedia"

const Contactcopy = () => {
  return (
    <section
      className={`w`}
    >
      <motion.nav
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
       
      </motion.nav>
      {/* <Socialmedia />  */}
    </section>
  )
}

export default Contactcopy
