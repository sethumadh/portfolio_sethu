import React, { useState } from "react"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
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
  const words = [
    { w: "an athlete 🏓", src: images.athlete },
    { w: "an optimist 🙌", src: images.optimist },
    { w: "a pluviophile ☔", src: images.rain },
    { w: "loves history 🏛️", src: images.history },
    { w: "an autodidact 🧑🏻‍🔧", src: images.learner },
    { w: "a traveller 🏕️", src: images.travel },
    { w: "an astrophile 🌌", src: images.travel },
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
  const [delay, setDelay] = useState<number>(2500)
  // ON/OFF
  const [isPlaying, setPlaying] = useState<boolean>(true)
  const [item, setItem] = useState("autodidact 🧑🏻‍🔧")
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
    <section className=" min-h-screen flex flex-col justify-center items-center bg-gray-900 bg-no-repeat pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        className=" w-[90%] max-w-7xl mx-auto flex items-center "
      >
        {" "}
        <div className="w-full mx-auto pt-8 text-white font-normal text-[42px]  sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-relaxed tracking-wide ">
          <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-relaxed tracking-wide ">
            Hi, I&apos;m <br /> Sethumadhavan{" "}
          </h1>
          <div>
            {" "}
            <span className=" flex flex-wrap items-center">
              <div className="pr-4 flex justify-center md:justify-start font-normal text-[42px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-normal tracking-wide ">
                <div className="relative">
                  Engineer
                  <div className="h-2/5 w-[100%] bg-orange-500 absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <span className="pr-4 font-normal text-[42px]  sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-relaxed tracking-wide">
                turned
              </span>
              <br />
              <div className="pr-4  flex justify-center md:justify-start font-normaltext-[42px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-normal tracking-wide ">
                <div className="relative">
                  Developer
                  <div className="h-2/5 w-[100%] bg-orange-500 absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <span className=" font-medium ">and</span>
            </span>{" "}
            <div className="flex items-center mt-4 pt-2">
              <span
                className={`animate-words-anim inline-block mr-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
              >
                {item}{" "}
              </span>
              <div className={`animate-words-anim `}>
                {/* <Image src={icon} width={30} alt="icon" /> */}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center mt-4 ">
            {links.map((link, i) => (
              <Link
                href={link.href}
                target="_blank"
                key={i}
                className="w-8 md:w-12 mr-8 cursor-pointer hover:text-orange-600 transition-all delay-200"
              >
                {link.child}
              </Link>
            ))}
          </div>
          <div className="max-w-4xl text-base font-light md:text-2xl lg:text-3l xl:text-4xl leading-loose tracking-wide my-6 ">
            <span>I love exploring and creating </span>
            <span className="text-center inline-block px-2">
              {/* <Image src={images.tech} alt="tech" width={40} />{" "} */}
              🚀
            </span>{" "}
            <div className="inline leading-relaxed tracking-wide  ">
              I am a life long learner and I might have a thing for{" "}
              <Link
                className="text-orange-600 font-semibold italic"
                href={`https://www.google.com/search?q=sadhya&sxsrf=AJOqlzVGp2OxyFqjYfjOZ9kkeBCJZ7fU8A%3A1674473060607&ei=ZG7OY5XcJLaRjuMP9PWxkAs&ved=0ahUKEwiVntqfyt38AhW2iGMGHfR6DLIQ4dUDCA8&oq=sadhya&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDEoECEEYAEoECEYYAFAAWABgAGgAcAF4AIABAIgBAJIBAJgBAA&sclient=gws-wiz-serp`}
              >
                {" "}
                Sadya{" "}
                <span className="inline-block text-center px-2">
                  <Image src={images.sadya} alt="sadya" width={30} />{" "}
                </span>{" "}
              </Link>
              & coffee{"   "}
              <span className="inline-block text-center px-1">
                {/* <Image src={images.coffeemug} alt="coffee" width={40} />{" "} */}
                ☕
              </span>
            </div>
          </div>{" "}
        </div>
      </motion.div>
    </section>
  )
}

export default About
