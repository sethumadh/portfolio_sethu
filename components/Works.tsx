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
        <div className="flex items-center justify-center">
          <div className="font-playfair font-semibold text-4xl text-center md:text-start">
            <span className="text-gray-500">My</span>{" "}
            <span className="italic">Projects</span>
            <LineGradient width="w-full" />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 md:px-4 ">
          <div className=" border-8 border-red drop-shadow-2xl ">
            <Image src={images.musicplayer} alt="music" className="w-full h-[200px] md:h-[480px] object-cover object-top" />
          </div>
          <div className="border-8 border-red drop-shadow-2xl">
            <Image src={images.carrental} alt="music" className=" w-full h-[200px] md:h-[480px] object-cover object-left-top" />
            <div className="absolute bottom-1 left-0 right-0 w-full h-32 backdrop-blur-md bg-white/30 flex flex-row flex-wrap">
                <div className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">React js</div>
                <div className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">TypeScript</div>
                <div className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Node js</div>
                <div className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Express js</div>
                <div className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Mongo DB</div>
                <div className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Styled Components</div>
                <div className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Stripe</div>
                <div className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Google Auth</div>
                <div className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Passport</div>
            </div>
          </div>
          <div className="border-8 border-red  drop-shadow-2xl">
            <Image
              src={images.passwordapp}
              alt="music"
              className=" w-full h-[200px] md:h-[480px] object-cover object-top"
            />
          </div>
          <div className="border-8 border-red  drop-shadow-2xl">
            <Image src={images.filmpire} alt="music" className=" w-full h-[200px] md:h-[480px]  object-cover object-left-top" />
          </div>
        </div>
      </motion.nav>
    </section>
  )
}

export default Works
