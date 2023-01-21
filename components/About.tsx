import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Icon } from "react-icons-kit"
import { envelop } from "react-icons-kit/icomoon/envelop"
import { linkedin } from "react-icons-kit/icomoon/linkedin"
import { github } from "react-icons-kit/icomoon/github"
import Link from "next/link"
import Image from "next/image"
import { useInterval } from "usehooks-ts"

import { images } from "../constants"

type AboutProps = {
  setActivePage: Dispatch<SetStateAction<string>>
}

function About({ setActivePage }: AboutProps) {
  const endLine = `I love Exploring and creating  I am a life long learner and I might have a thing for grill and coffee `
  const words = [
    { w: "an athlete", src: images.athlete },
    { w: "an optimist", src: images.optimist },
    { w: "a pluviophile", src: images.rain },
    { w: "loves history", src: images.history },
    { w: "an autodidact", src: images.learner },
    { w: "a traveller", src: images.travel },
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
  const [icon, setIcon] = useState(images.learner)

  useInterval(
    () => {
      // Your custom logic here
      setItem(words[count].w)
      setIcon(words[count].src)
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
    <section className="border-8 w-full min-h-screen flex flex-col justify-center items-center border-orange-800 bg-orange-700 bg-no-repeat pt-24">
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
        <div className="w-full mx-auto pt-8 border-8 border-red text-white font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-relaxed tracking-wide ">
          <h1 className="">Hi, I&apos;m Sethumadhavan | </h1>
          <div>
            {" "}
            <span className="font-black">
              Engineer turned Developer{" "}
              <span className=" font-medium">and</span>
            </span>{" "}
            <div className="flex items-center lg:mt-4 md:pt-2">
              <span
                className={`animate-words-anim inline-block mr-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
              >
                {item}{" "}
              </span>
              <div className={`animate-words-anim inline-block`}>
                <Image src={icon} width={30} alt="icon" />
              </div>
            </div>
          </div>
          <div className="border-8 border-red flex flex-row justify-start items-center ">
            {links.map((link, i) => (
              <Link
                href={link.href}
                target="_blank"
                key={i}
                className="w-8 md:w-12 mr-8 cursor-pointer hover:text-red transition-all delay-200"
              >
                {link.child}
              </Link>
            ))}
          </div>
          <div className="max-w-3xl text-base font-light md:text-lg lg:text-xl xl:text-2xl leading-loose tracking-wide">
            <span>I love exploring and creating </span>
            <span className="text-center inline-block px-2">
              <Image src={images.tech} alt="tech" width={16} />{" "}
            </span>{" "}
            <div className="inline">
              I am a life long learner and I might have a thing for grill{" "}
              <span className="inline-block text-center px-2">
                <Image src={images.grill} alt="grill" width={16} />{" "}
              </span>{" "}
              & coffee{"   "}
              <span className="inline-block text-center px-1">
                <Image src={images.coffee} alt="coffee" width={16} />{" "}
              </span>
            </div>
          </div>{" "}
        </div>
      </motion.div>
    </section>
  )
}

export default About
