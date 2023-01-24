import React, { useState } from "react"
import { motion } from "framer-motion"
import { FcApprove, FcAlarmClock } from "react-icons/fc"

import LineGradient from "./LineGradient"
import Image from "next/image"
import { images } from "../constants"
import Link from "next/link"

function Testimonial() {
  const [readMoreT1, setreadMoreT1] = useState(false)
  const [readMoreT2, setreadMoreT2] = useState(false)
  const [readMoreT3, setreadMoreT3] = useState(false)

  const testimonialLinks = [
    {
      src: images.cyril,
      readMore: readMoreT1,
      setReadmore: setreadMoreT1,
      href: "https://www.linkedin.com/in/emmacyril/",
      name: "Emmanuel Cyril",
      title: " Lead Software Engineer",
      title1: " Lead Software Engineer",
      work: "Worked together in Lyriks Project- Open Source / Remote project",
      work1: "Team Member- Lyriks Project",
      smallContent: `"During my time at The JSM Masterclass Experience, I had the great fortune to work alongside Sethumadhavan. He's ability to think creatively and devise novel approaches to fixing bugs in code is awe-inspiring.`,
      extraContent: ` Sethumadhavan is dogged and thorough when it comes to fixing bugs. Sethumadhavan will be a great addition to any group he joins. In addition to giving Sethumadhavan my highest recommendation, I am also pleased to call him a friend."`,
      style: "md:col-start-1 md:col-span-8",
    },
    {
      src: images.adrian,
      readMore: readMoreT2,
      setReadmore: setreadMoreT2,
      href: "https://www.linkedin.com/in/adrianhajdin/",
      name: "Adrian Hadjin",
      title: " Founder & CEO ",
      title1: " Founder & CEO - JavaScript Mastery",
      work: "Mentor for featured projects-Lyriks, Filmpire and Morent",
      work1: "Mentor- Lyriks, Morent & Hipnode Project",
      smallContent: ` "I am happy to recommend Sethumadhavan Kochukrishnan for his exceptional skills as a Full-Stack software engineer. Throughout my time with him on open-source projects, I was consistently impressed by Sethu's`,
      extraContent: `" passion for code and ability to write clean, stable code. Seth is not only an active learner who is always eager to learn new knowledge but also someone who can find solutions when facing new difficulties. He is an excellent collaborator and communicator and played a vital role in our team. I highly recommend Seth for software engineering opportunities, and I am confident he will be a valuable asset to any team"`,
    },
    {
      src: images.ahsan,
      readMore: readMoreT3,
      setReadmore: setreadMoreT3,
      href: "https://www.linkedin.com/in/ahsan-syed-7b26b41a4/",
      name: "Ahsan Syed",
      title: "Software Developer",
      title1: "Software Developer",
      work: "Worked together in Morent Project- Open Source / Remote project",
      work1: "Team Member- Morent Project",
      smallContent: `"During my time working on CarRental, I had the pleasure of working alongside Sethu. I was impressed by his ability to communicate his problems and in the same breath find the solution to it. Sethu`,
      extraContent: `is more than capable of writing clean and effective code.Sethu has great understanding of Javascript and React hooks and has the trait of a developer who goes beyond. I highly recommend Sethu because I believe he would make a fine addition to anyone's team"`,
    },
  ]

  return (
    <section className={`works w-screen bg-white `}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.0 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0.2, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[85%] mx-auto mt-8 md:mt-12"
      >
        {" "}
        <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
          <div className="relative">
            Testimonials
            <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
          </div>
        </div>
        <div className=" flex flex-col">
          {testimonialLinks.map((link, i) => (
            <div key={i} className="flex flex-col md:flex-row">
              <div
                className={`
                 md:max-w-5xl md:w-3/4  leading-loose tracking-wide font-mulish flex-1  flex flex-col md:flex-row  justify-start items-center px-4 py-4 rounded`}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  className="cursor-pointer justify-center items-center flex flex-col w-52 "
                >
                  <Image
                    src={link.src}
                    alt="profilpictureoftest"
                    className="rounded-full w-36 h-[144px] flex justify-center items-center mb-2"
                  />
                  <h1 className="font-semibold text-xl mt-1 tracking-wide font-mada italic">
                    {link.name}
                  </h1>
                  <h1 className="font-semibold text-xl mt-1 hidden md:block tracking-wide font-mada text-center text-blue">
                    {link.title1}
                  </h1>
                  <h1 className="font-semibold text-xl mt-1 md:hidden tracking-wide font-mada text-center text-blue">
                    {link.title1}
                  </h1>
                </Link>
                <div className="text-center flex md:hidden justify-center items-center mx-auto font-mulish max-w-lg mb-6 md:mb-12 ">
                  <div className="font-semibold font-mulish text-lg italic text-center leading-relaxed tracking-wide max-w-sm ">
                    {link.work1}
                  </div>
                </div>
                <div className="text-center flex justify-center mx-auto font-mulish max-w-lg">
                  <div className="font-light text-lg italic text-center leading-relaxed tracking-wide ">
                    {link.smallContent}

                    <span>{link.readMore && link.extraContent}</span>
                    <div
                      className="cursor-pointer  text-orange-600 text-lg font-semibold "
                      onClick={() => link.setReadmore(!link.readMore)}
                    >
                      {link.readMore ? "Read Less" : "Read More"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center hidden md:flex justify-center items-center mx-auto font-mulish max-w-lg">
                <div className="font-semibold font-mulish text-lg italic text-center leading-relaxed tracking-wide max-w-sm ">
                  {link.work}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonial
