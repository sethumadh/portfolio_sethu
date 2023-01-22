import React from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Link from "next/link"

import { images } from "../../constants"
import Image from "next/image"

type Props = {}

function ProjectDetails({}: Props) {
  const router = useRouter()
  console.log(router)
  const projectId = router.query.projectId
  return (
    <section className={`works w-screen bg-white h-screen pt-10 md:pt-2`}>
      {/* Filmpire application */}

      {projectId == "Filmpire" && (
        <motion.nav
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[70%] mx-auto mt-8 md:mt-12 md:px-8 md:py-8"
        >
          <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
            <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
              {projectId}
              <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
            </div>
          </div>
          <div>
            <div className="mb-2">1 minute read</div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              A Solo project to create core features and integrate third party
              APIs. Implemented CI/CD pipeline with code linting and preview
              deploys
            </div>
            <div className=" mb-4">
              <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
                <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  Project Type
                  <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                {[
                  "Educational",
                  "Instructional",
                  "Entertainment",
                  "AI",
                  "Modern Design",
                  "Database",
                  "Movies",
                ].map((item, i) => (
                  <div
                    className="text-white bg-orange-700 px-2 py-1  mr-1 mb-1 text "
                    key={i}
                  >
                    <h2 className="text-center md:text-left italic">{item}</h2>{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.filmpire} className="w-full" alt="filmpire" />
              <p className="text-sm mt-1">Filmpire landing page</p>
            </div>

            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
              <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Project Objective
                <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              This was a solo project I had worked on prior to my bootcamp with
              JSM masterclass. The assigned here was to create an IMDB clone
              where the user can seamlessly fetch as many different movies based
              on genre, countries reviews etc. The state management is designed
              and managed using redux toolkit which and the enpoints were made
              using redux toolkit query. The entire designing of the website to
              be done using MUI. The project was to be done within a span of 2
              weeks. It was also required to make use of Alan AI , an AI tool
              for movie fetching.
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
              <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Web Stack - Explanation
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-4 md:mb-4">
              This project was set to be done using React, Redux and MUI. This
              project acted as a stepping stone for the future projects that
              were to be done by me. MUI was chosen since it very well aligns
              with React in terms of usablity even though MUI is opinionated.
              Redux toolkit is a go to state management tool for developers so
              it is imperative that we get skilled in this state management
              tool.
            </div>
            <div className="flex flex-col md:flex-row justify-around  h-[250px] md:h-auto">
              <div>
                <h1 className="text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-2">
                  Stack
                </h1>
                <ul className="flex flex-wrap">
                  {[
                    "React Js",
                    "MUI",
                    "Redux Toolkit",
                    "Redux Toolkit Query",
                    "eslint",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text "
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>

              <div className="">
                <h1 className="text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-2">
                  Status
                </h1>
                <div className="flex mx-auto items-center justify-between mb-3 md:mb-0">
                  <Link
                    href={"https://github.com/sethumadh/Filmpire_sethumadh"}
                    className="mr-8 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Github Code
                  </Link>
                  <Link
                    target={`_blank`}
                    href={"https://willowy-nougat-2d34e6.netlify.app/"}
                    className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
              <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Problems and Learnings
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              Understanding overall architecture - the core features and design
              aspects and the file structure- of the project was a big learning
              point and a milestone. It made me realised that it is very
              important to understood the project in a macro level. Also it was
              my first foray in terms of ustilizing the prowess of Redux toolkit
              in a project and evn though it has a big learning curve , it
              became of my favaourite and go to tools.
            </div>
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.fp} className="w-full" alt="filmpire" />
              <p className="text-sm mt-1">
                Godfather movie fetched using search functionality
              </p>
            </div>
          </div>
        </motion.nav>
      )}

      {/*  Lyriks application */}

      {projectId == "Lyriks" && (
        <motion.nav
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[70%] mx-auto mt-8 md:mt-12 md:px-8 md:py-8"
        >
          <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
            <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
              {projectId}
              <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
            </div>
          </div>
          <div>
            <div className="mb-2">1 minute read</div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              Assembled and lead a team of 3 to create the core functionalities
              of the Music Player App and integrate third part APIs called Bug
              Hunter Lyriks app. The goal is to fetch as much APIs and put it
              into a well-designed web application.Implemented CI/CD pipeline
              with code linting and preview deploys.
            </div>
            <div className=" mb-4">
              <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
                <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  Project Type
                  <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                {[
                  "Open Source",
                  "Educational",
                  "Instructional",
                  "Entertainment",
                  "Modern Design",
                  "Database",
                  "Music",
                ].map((item, i) => (
                  <div
                    className="text-white bg-orange-700 px-2 py-1  mr-1 mb-1 text "
                    key={i}
                  >
                    <h2 className="text-center md:text-left italic">{item}</h2>{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image
                src={images.musicplayer}
                className="w-full"
                alt="filmpire"
              />
              <p className="text-sm mt-1">{projectId} landing page</p>
            </div>

            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
              <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Project Objective
                <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              The objective is to code a beautifully designed Modern Music
              player dubbed &quot;Lyriks&quot; App. This Application has to be
              delivered in one month time. The team consisting of 4 members and were
              given free hand to choose the tech stack. The app should have
              search functionality , a music player which can be a react-library npm package or
              custom made and should render songs related to the current on
              playing. The app should have displayed different genre listed in
              the front page
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
              <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Web Stack - Explanation
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-4 md:mb-4">
              This project was set to be done using Next Js, Redux and Tailwind.
              Next Js because it offered powerful SSR and SSG features. They are
              highly useful in SEO. Redux toolkit was an obvious choice for
              state management. The choice of Tailwind was a huge milstone for
              me and it provided such a an intuitive experience in designing.
              The third part API we chose is Shazam Core API and it provided
              flexible and easy option for endpoints. Neverthless We also used
              Redux Toolkit Query for custom made endpoint to use in the app.
            </div>
            <div className="flex flex-col md:flex-row justify-around  h-[250px] md:h-auto">
              <div>
                <h1 className="text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-2">
                  Stack
                </h1>
                <ul className="flex flex-wrap">
                  {[
                    "Next Js",
                    "Tailwind",
                    "Redux Toolkit",
                    "Redux Toolkit Query",
                    "eslint",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text "
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>

              <div className="">
                <h1 className="text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-2">
                  Status
                </h1>
                <div className="flex mx-auto items-center justify-between mb-3 md:mb-0">
                  <Link
                    href={"https://github.com/sethumadh/Modern-Music-Player"}
                    className="mr-8 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Github Code
                  </Link>
                  <Link
                    target={`_blank`}
                    href={"https://bughunters-lyriks.vercel.app/"}
                    className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
              <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Problems and Learnings
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              We as a team worked remotely on the project as open source using
              Github. For the first time we wireframed the design using figma
              and the overall application architecture and file folder. I had my
              <Link
                href={`/project/Filmpire`}
                className="text-base font-medium text-orange-500 px-2"
              >
                Fimlpire Project
              </Link>
              as experience. We as a team also assigned tasks to each member and
              I was assigned with coding the state management using redux
              Toolkit and creating custom end points using redux toolkit query.
              We decided to work on our tasks and come back to discuss the
              progress in 10 days. But unfortunately as 2 weeks went by from the
              start, for personal and other reasons 3 of our members had to
              leave project. Which meant I was the only member left in the team.
              And it was only 12 days left for showcasing the project.
              Neveretheless I decided to showcase the project and went back to
              the drawing board and regrouped myself and took tough decisions in
              axing some of the functionalities we had planned on doing. This
              was to ensure to create a minimum viabale project - MVP and to
              showcase to our mentors. I had a temporary design made which I
              made and was using to code and test the state management and
              custom endpoints using redux toolkit query. I made some face-lifts
              in the design and worked on other functionalities initially
              assigned to other memebrs and coded for the next 8 days through
              and through. I was able to showcase the music app albiet with some
              design flaws but a great working music app with search functions,
              genres and related songs displayed and also a custom made music player. I took this challenge as an
              opportunity where I could learn and code those core concepts which
              were otherwise assigned to other memebers.
            </div>
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.lk} className="w-full" alt="lyriks" />
              <p className="text-sm mt-1">
                Hip Hop genre fetched using search functionality
              </p>
            </div>
          </div>
        </motion.nav>
      )}
      {/*  Car rent application */}

      {projectId == "MORENT" && (
        <motion.nav
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[70%] mx-auto mt-8 md:mt-12 md:px-8 md:py-8"
        >
          <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
            <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
              {projectId}
              <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
            </div>
          </div>
          <div>
            <div className="mb-2">1 minute read</div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              A Core Member of a 3 member team responsible for creating core
              functionalities implemented on a custom designed schemausing Mongo
              DB with back-end created upon Node and Express and using React
              with tailwind on fron end. Implemented CI/CD pipeline with
              Typescript type-checking, database migration and code linting
            </div>
            <div className=" mb-4">
              <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
                <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  Project Type
                  <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                {[
                  "Open Source",
                  "Full Stack",
                  "Instructional",
                  "E Commerce",
                  "Modern Design",
                  "Database",
                  "Rent",
                ].map((item, i) => (
                  <div
                    className="text-white bg-orange-700 px-2 py-1  mr-1 mb-1 text "
                    key={i}
                  >
                    <h2 className="text-center md:text-left italic">{item}</h2>{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image
                src={images.musicplayer}
                className="w-full"
                alt="filmpire"
              />
              <p className="text-sm mt-1">{projectId} landing page</p>
            </div>

            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
              <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Project Objective
                <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              The objective is to code a beautifully designed Car Rental application dubbed &quot;MORENT&quot; App. This Application has to be
              delivered in one month time. The team consisting of 3 members were &
              given free hand to choose the tech stack. The app should have
               car search functionality , filter , search and should have pagination. The user needs to log in and must be able to favourite a car using the local storage of the user&apos;s browser. The user should be able to 
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
              <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Web Stack - Explanation
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-4 md:mb-4">
              This project was set to be done using Next Js, Redux and Tailwind.
              Next Js because it offered powerful SSR and SSG features. They are
              highly useful in SEO. Redux toolkit was an obvious choice for
              state management. The choice of Tailwind was a huge milstone for
              me and it provided such a an intuitive experience in designing.
              The third part API we chose is Shazam Core API and it provided
              flexible and easy option for endpoints. Neverthless We also used
              Redux Toolkit Query for custom made endpoint to use in the app.
            </div>
            <div className="flex flex-col md:flex-row justify-around  h-[250px] md:h-auto">
              <div>
                <h1 className="text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-2">
                  Stack
                </h1>
                <ul className="flex flex-wrap">
                  {[
                    "Next Js",
                    "Tailwind",
                    "Redux Toolkit",
                    "Redux Toolkit Query",
                    "eslint",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text "
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>

              <div className="">
                <h1 className="text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-2">
                  Status
                </h1>
                <div className="flex mx-auto items-center justify-between mb-3 md:mb-0">
                  <Link
                    href={"https://github.com/sethumadh/Modern-Music-Player"}
                    className="mr-8 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Github Code
                  </Link>
                  <Link
                    target={`_blank`}
                    href={"https://bughunters-lyriks.vercel.app/"}
                    className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 py-2 md:py-4">
              <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Problems and Learnings
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              We as a team worked remotely on the project as open source using
              Github. For the first time we wireframed the design using figma
              and the overall application architecture and file folder. I had my
              <Link
                href={`/project/Filmpire`}
                className="text-base font-medium text-orange-500 px-2"
              >
                Fimlpire Project
              </Link>
              as experience. We as a team also assigned tasks to each member and
              I chose to do the most interesting one of coding the state
              management using redux Toolkit and cretaing custom end points
              using redux toolkit query. We decided we will work on our tasks
              and come back to discuss in 10 days. But unfortunately as 2 weeks
              went by , for perosnal and other reasons 3 of our members had to
              leave project. Which meant I was the only member left in the team.
              And it was only 8 days left for showcasing the project .
              Neveretheless I had decided to showcase the project and went back
              to the drawing board and had to make tough decisions in axing some
              of the functionalities we had planned on. This was to ensure
              create a minimum viabale project - MVP to showcase to our mentors.
              I had a temporary design made which I was using to code and test
              the state management and custom endpoints using redux toolkit
              query. I made some facelifts in the design and worked on other
              functionalities initially assigned to other memebrs and coded for
              the next 8 days through and through. I was able to showcase the
              music app albiet with some design flaws but a working music app
              with search functions, genres and related songs displayed. I took
              this challenge as an opportunityto learn whereby I was also able
              to learn and code those core concepts which were otherwise
              assigned to other memebers.
            </div>
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.lk} className="w-full" alt="lyriks" />
              <p className="text-sm mt-1">
                Hip Hop genre fetched using search functionality
              </p>
            </div>
          </div>
        </motion.nav>
      )}
    </section>
  )
}

export default ProjectDetails
