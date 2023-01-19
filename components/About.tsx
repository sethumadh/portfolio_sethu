import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Icon } from "react-icons-kit"
import { SocialIcon } from "react-social-icons"
import { envelop } from "react-icons-kit/icomoon/envelop"
import { linkedin } from "react-icons-kit/icomoon/linkedin"
import { github } from "react-icons-kit/icomoon/github"


import Link from "next/link"

import { images } from "../constants"
import { useInterval } from "usehooks-ts"
import Socialmedia from "./Socialmedia"

type AboutProps = {
  setActivePage: Dispatch<SetStateAction<string>>
}

function About({ setActivePage }: AboutProps) {
  const words = [
    // { w: "autodidact", style: "delay-300" },
    { w: "build things", style: "delay-600" },
    { w: "an optimist", style: "delay-900" },
    { w: "an athlete", style: "delay-1200" },
    { w: "a pluviophile", style: "delay-1500" },
    { w: "loves history", style: "delay-1800" },
    { w: "an autodidact", style: "delay-2100" },
    { w: "a traveller", style: "delay-2400" },
  ]

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

  // The counter
  const [count, setCount] = useState<number>(0)
  // Dynamic delay
  const [delay, setDelay] = useState<number>(3500)
  // ON/OFF
  const [isPlaying, setPlaying] = useState<boolean>(true)
  const [item, setItem] = useState("autodidact")

  useInterval(
    () => {
      // Your custom logic here
      setItem(words[count].w)
      // console.log(item,count)
      setCount(count + 1)

      if (count > 4) {
        setCount(0)
      }
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null
  )

  return (
    <section className="border-8 w-full min-h-screen flex flex-col justify-center items-center border-orange-800 bg-slate-700 bg-no-repeat pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className=" w-[90%] mx-auto  border-8 border-blue flex items-center "
      >
        {" "}
        <div className="w-[90%] mx-auto pt-4 border-8 border-red text-white font-semibold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-normal ">
          <h1 className="pb-8">G&apos; day! I&apos;m Sethu!</h1>
          <div>
            I am an{" "}
            <span className="font-black text-white text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-normal">
              Engineer turned Developer
            </span>{" "}
            <div className="pt-8">
              and {/* {words.map((word, i) => ( */}
              <span className={`animate-words-anim inline-block`}>{item}</span>
              {/* ))} */}
            </div>
          </div>
          <div className="border-8 border-red flex flex-row justify-start items-center mt-4 md:mt-8">
            {links.map((link, i) => (
              <Link
                href={link.href}
                target="_blank"
                key={i}
                className="w-8 h- md:w-12 mr-8 cursor-pointer hover:text-red transition-all delay-200"
              >
                {link.child}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
