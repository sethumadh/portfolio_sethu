import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Icon } from "react-icons-kit"
import { envelop } from "react-icons-kit/icomoon/envelop"
import { linkedin } from "react-icons-kit/icomoon/linkedin"
import { github } from "react-icons-kit/icomoon/github"
import { images } from "../../constants"
import Image from "next/image"

type Props = {}

function Bio({}: Props) {
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
    <section className={`works bg-white pt-10 md:pt-2 font-mada`}>
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.0 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0.2, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-[85%] max-w-7xl md:w-[65%] mx-auto mt-12 md:mt-12 md:px-8 md:py-12"
      >
        <h1 className="text-4xl md:text-7xl tracking-wide t font-mada">
          I have always loved tech
        </h1>
        <h2 className="mt-4 py-2 text-lg">
          Looking for my{" "}
          <Link href={"#"} className="text-orange-500 font-bold pt-4">
            CV
          </Link>
          ?
        </h2>
        <h1 className="my-4 font-bold text-2xl md:text-3xl lg-text-xl ">
          My quick story
        </h1>
        <p className="font-mulish text-xl leading-loose tracking-wide font-light">
          <strong className="font-bold text-xl">I have been building web stuff and solving problems</strong> since I was 14
          years-old. Back in those days I tinkered endlessly with Basic, C & C++
          and tried to solve data structure algorithms. When social media came
          around <strong className="font-bold text-xl">I was making static websites </strong>which looked
          stunning (younger me thought so) with my sick{" "}
          <strong className="font-bold text-xl">html / CSS skills </strong> and occasionaly built sites using
          Wordpress.
        </p>
        <br />
        <p className="font-mulish font-light text-xl leading-loose tracking-wide">
          <strong className="font-bold text-xl"> Since then I haven’t stopped learning and creating.</strong>{" "}
          I am involved in, photography, electronic engineering,
          programming, video productiona and short film post-production.
          <br /> <br /> I have been{" "}
          <strong className="font-bold text-xl">increasingly working on software development</strong> in my
          life for that last 2 years. I’ve been lucky to have worked alongside
          awesome developers and designers through open source and bootcamp, who
          have{" "}
          <strong className="font-bold text-xl">taught me what’s expected from a quality product.</strong>{" "}
        </p>
        <br />
        <br />
        <h1 className="my-4 font-bold text-2xl md:text-3xl lg-text-xl ">
          As a developer
        </h1>
        <p className="font-mulish font-light text-lg leading-loose tracking-wide">
          I pay close <strong className="font-bold text-xl">attention to my code’s readability.</strong> Sure,
          I’ll put together something as quickly as possible to make it work,
          but after that I’ll spend a good amount of time commenting and
          organizing everything. <i className="font-medium">Mi casa es tu casa</i>, I
          want you to <strong className="font-bold text-xl">feel welcome around my code.</strong>
          <br />
          <strong className="font-bold text-xl">
            Clean, consistent, readable and maintainable code
          </strong>{" "}
          It’s great when features work, but it’s even greater whenever they can
          stay that way, regardless of who’s working on them.
        </p>
        <br />
        <p className="font-mulish font-light text-xl leading-loose tracking-wide">
          I’m excited to work on new projects, because{" "}
          <strong className="font-bold text-xl">I learn something new every time.</strong> I’m excited for the
          next challenge!
        </p>
        <br />
        <br />
        <h1 className="my-4 font-bold text-2xl md:text-3xl lg-text-xl ">
          As a person
        </h1>
        <p className="font-mulish font-light text-xl leading-loose tracking-wide">
          If I had to describe myself in one word, it would be{" "}
          <strong className="font-bold text-xl">resourceful</strong> . I’ll take a problem, break it into
          smaller bits and find myself a solution. Creativity and humor has
          helped me <strong className="font-bold text-xl">sail around tough obstacles.</strong>
        </p>
        <br />
        <p className="font-mulish font-light text-xl leading-loose tracking-wide">
          <strong className="font-bold text-xl">I’m curious by nature and I love learning.</strong> I’ve
          amassed a wide range of skills and interests that when put together,
          end up feeding my career in one way or another. I’m what they call a{" "}
          <i>T-shaped individual.</i>{" "}
        </p>
        <br />
        <br />
        <h1 className="my-4 font-bold text-2xl md:text-3xl lg-text-xl ">
          As a colleague
        </h1>
        <p className="font-mulish font-light text-xl leading-loose tracking-wide">
          I’m a <strong className="font-bold text-xl">team player</strong>, with my background in engineering
          and video production, I feel comfortable interacting with both the{" "}
          <strong className="font-bold text-xl">technically oriented people </strong> of the team as well as
          the <strong className="font-bold text-xl">artistically oriented ones.</strong>I will always go the
          extra mile to help my team.
        </p>
        <br />
        <p className="font-mulish font-light text-xl leading-loose tracking-wide">
          My <strong className="font-bold text-xl">communication skills </strong> are excellent. I’ve worked
          on the side as a banker for eight years. And an athlete for 9 years.
          This experience has made me feel comfortable at{" "}
          <strong className="font-bold text-xl">conveying ideas in creative ways</strong> so that everyone can understand them.
        </p>
        <p className="font-mulish font-light text-xl leading-loose tracking-wide">
          My experience working for a small startup albeit a brick and mortar
          one , gave me exposure to the business side of a company, while at the
          same time delivering industry standard results on the production side.{" "}
        </p>
        <br />
        <div className="font-mulish font-light text-xl leading-loose tracking-wide">
          I’m always happy to pull an espresso shot for a colleague. I want to
          hear from you!
        </div>
        <div className="w-full  mx-auto flex flex-row  justify-end font-mada text-lg">
          <div className="  flex flex-col justify-center items-center text-base sm:text-lg font-semibold tracking-wide  py-4 md:py-8 ">
            <h1 className="w-[85%] text-center py-4 md:mb-8">
              Feeling social? Find me on these online spaces!
            </h1>
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
            <Image src={images.coffeemug} alt="coffee mug" className="w-full" />
          </div>
        </div>
      </motion.article>
    </section>
  )
}

export default Bio
