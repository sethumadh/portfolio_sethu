import React from "react"
import { motion } from "framer-motion"
import { Icon } from "react-icons-kit"
import { envelop } from "react-icons-kit/icomoon/envelop"
import { linkedin } from "react-icons-kit/icomoon/linkedin"
import { github } from "react-icons-kit/icomoon/github"
import Link from "next/link"
import Image from "next/image"

import { images } from "../constants"

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <Icon icon={linkedin} size={"100%"} />
        </>
      ),
      href: "https://linkedin.com/in/sethumadh",
      url: "https://linkedin.com/in/sethumadh",
      style: "rounded-tr-md bg-blue",
    },
    {
      id: 2,
      child: (
        <>
          <Icon icon={github} size={"100%"} />
        </>
      ),
      href: "https://github.com/sethumadh",
      url: "https://github.com/sethumadh",
      style: "bg-[#333333]",
    },
    {
      id: 3,
      child: (
        <>
          <Icon icon={envelop} size={"100%"} />
        </>
      ),
      href: "mailto:sethumadh@gmail.com",
      url: "mailto:sethumadh@gmail.co",
      style: "bg-[#6fc2b0]",
    },
  ]

  return (
    <section className={`Aboutme w-screen bg-bgWhite `}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.0 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0.2, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[85%] mx-auto mt-8 md:mt-12 "
      >
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="flex flex-col w-full md:w-[50%] mx-auto">
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
              <div className="mr-3">Get In</div>
              <div className="relative">
                Touch
                <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4 font-mada text-lg">
              Dropping a line to say g’day, ask for my resume or see if we can
              build something amazing together? I’d love to hear from you!
            </div>
            <form
              method="POST"
              target="_blank"
              action="https://formsubmit.co/6f9a7e423a081cf9a5e13b663d5c1dc5 "
              className="flex flex-col items-center max-w-[1050px] w-full mx-auto"
            >
              <input
                className="bg-[#CCCCFF] p-2 w-full h-16 border-r-2 border-b-2 border-orange-600"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="my-4 bg-[#CCCCFF] w-full p-2 h-16 border-r-2 border-b-2 border-orange-600"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <textarea
                className="bg-[#CCCCFF] p-2 w-full h-16 border-r-2 border-b-2 border-orange-600"
                name="message"
                rows={10}
                placeholder="Message"
                required
              ></textarea>
              <button className="mt-4  w-24  text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300">
                Submit
              </button>
            </form>
          </div>
          <div className="w-full md:w-[35%] mx-auto flex flex-row md:flex-col justify-end font-mada text-lg">
            <div className="  flex flex-col justify-center items-center text-base sm:text-lg font-semibold tracking-wide  py-4 md:py-8 ">
             <h1 className="w-[85%] text-center py-4 md:mb-8">Feeling social? Find me on these online spaces!</h1> 
              <div className="flex flex-row justify-center items-center ">
                {links.map((link, i) => (
                  <Link
                    href={link.href}
                    target="_blank"
                    key={i}
                    className="w-8 md:w-12 mx-4 cursor-pointer text-slate-500 hover:text-orange-600 transition-all delay-200"
                  >
                    {link.child}
                  </Link>
                ))}
              </div>
            </div>

            <div className="max-w-[100px] md:max-w-[200px] mx-auto flex items-end">
              <Image
                src={images.coffeemug}
                alt="coffee mug"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
