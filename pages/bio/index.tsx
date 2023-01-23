import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import { images } from "../../constants"
import Image from "next/image"

type Props = {}

function Bio({}: Props) {
  return (
    <section
      className={`works w-screen bg-white h-screen pt-10 md:pt-2 font-mada`}
    >
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.0 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0.2, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[85%] md:w-[70%] mx-auto mt-12 md:mt-12 md:px-8 md:py-12"
      >
        <h1 className="text-4xl md:text-7xl font-light tracking-wide text-center md:text-left font-mada">
          I have always loved tech
        </h1>
        <h2 className="mt-4 py-2 text">
          Looking for my{" "}
          <Link href={"#"} className="text-orange-500 font-bold pt-4">
            CV
          </Link>
          ?
        </h2>
        <h1 className="mt-4 font-bold text-md md:text-lg lg-text-xl ">
          My Quick Story
        </h1>
        <p>
          I have been building web stuff and solving problems since I was 14
          years-old. Back in those days I tinkered endlessly with Basic, C & C++
          and tried to solve data structure algorithms. When social media came
          around <span>I was making static websites </span>which looked stunning (younger me
          thought so) with my sick <span>html / CSS skills </span> and occasionaly build
          sites using Wordpress too and <span> hosted a website</span> called
          bankpanther.com (which is now defunct :)). All this while I was also
          trying to make <span>pro in table tennis</span>  and a percussion artist.
        </p>
      </motion.article>
    </section>
  )
}

export default Bio
