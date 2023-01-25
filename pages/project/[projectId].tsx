import React from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Link from "next/link"

import { images } from "../../constants"
import Image from "next/image"

type Props = {}

function ProjectDetails({}: Props) {
  const Filmpire = [
    {
      summary:
        "A Solo project to create core features and integrate third party APIs. Implemented CI/CD pipeline with code linting and preview deploys",
      type: [
        "Educational",
        "Instructional",
        "Entertainment",
        "AI",
        "Modern Design",
        "Database",
        "Movies",
      ],
      landingImage: images.filmpire,
      objective: `This was a solo project I had worked on prior to my bootcamp with
        JSM masterclass. The project is to create an IMDB clone
        where the user can seamlessly fetch as many different movies based
        on genre, countries, reviews etc. The state management is designed
        and managed using redux toolkit and the enpoints were made
        using redux toolkit query. The entire designing of the website done using MUI. The project was to be done within a span of 2
        weeks. It was also required to make use of Alan AI, an AI tool
        for movie fetching.`,
      webStack: `This project was set to be done using React, Redux and MUI. This
        project acted as a stepping stone for the future projects that
        were to be done by me in future. MUI was chosen since it aligns
        with React in terms of usablity even though MUI is slightly opinionated.
        Redux toolkit is a go to state management tool for developers so
        it is imperative that we get skilled in this state management
        tool.`,
      stack: [
        "React Js",
        "MUI",
        "Redux Toolkit",
        "Redux Toolkit Query",
        "eslint",
      ],
      gitUrl: "https://github.com/sethumadh/Filmpire_sethumadh",
      liveUrl: "https://willowy-nougat-2d34e6.netlify.app/",
      learnings: ` Understanding overall architecture - the core features and design
        aspects and the file structure- of the project was a big learning
        point and a milestone. It made me realised that it is very
        important to understood the project in a macro level. Also it was
        my first foray in terms of utilizing the prowess of Redux toolkit
        in a project and even though it has a big learning curve , it
        became of my favaourite and go-to tools.`,
      bottomImage: images.fp,
      imageDesc: `Godfather movie fetched using search functionality`,
    },
  ]
  const Lyriks = [
    {
      summary: `Assembled and lead a team of 3 to create the core functionalities
        of the Music Player App and integrate third part APIs called Bug
        Hunter Lyriks app. The goal is to fetch as much APIs and put it
        into a well-designed web application.Implemented CI/CD pipeline
        with code linting and preview deploys.`,
      type: [
        "Open Source",
        "Educational",
        "Instructional",
        "Entertainment",
        "Modern Design",
        "Database",
        "Music",
      ],
      landingImage: images.musicplayer,
      objective: ` The objective is to code a beautifully designed Modern Music
      player dubbed 'Lyriks' App. This Application has to be
      delivered in one month time. The team consisted of 4 members and
      were given free hand to choose the tech stack. The app should have
      search functionality , a music player which can be a react-library
      npm package or custom made and should render songs related to the
      current on playing. The app should have displayed different genre
      listed in the front page`,
      webStack: `This project was set to be done using Next Js, Redux and Tailwind.
      Next Js because it offered powerful SSR and SSG features. They are
      highly useful in SEO. Redux toolkit was an obvious choice for
      state management. The choice of Tailwind was a huge milstone for
      me and it provided such a an intuitive experience in designing.
      The third party API we chose is Shazam Core API and it provided
      flexible and easy option for endpoints. Neverthless We also used
      Redux Toolkit Query for custom made endpoints to use in the app.`,
      stack: [
        "Next Js",
        "Tailwind",
        "Redux Toolkit",
        "Redux Toolkit Query",
        "eslint",
      ],
      gitUrl: "https://github.com/sethumadh/Modern-Music-Player",
      liveUrl: "https://bughunters-lyriks.vercel.app/",
      learnings: ` We as a team worked remotely on the project as open source using
      Github. We wire framed the design using figma
      and the overall application architecture and file folder. I had my
     ${(
       <Link
         href={"/project/Filmpire"}
         className="text-base font-medium text-orange-500 px-2"
       >
         Filmpire Project
       </Link>
     )}
      as experience. As a team assigned tasks to each member and
      I was assigned with coding the state management using Redux
      Toolkit and creating custom end points using redux toolkit query.
      We decided to work on our tasks and come back to discuss the
      progress in 10 days. But unfortunately as 2 weeks went by from the
      start, for personal and other reasons 3 of our members had to
      leave project. Which meant I was the only member left in the team.
      And it was only 12 days left for showcasing the project.
      Neveretheless I decided to showcase the project and went back to
      the drawing board and regrouped myself and took some tough decisions in
      axing some of the functionalities we had planned on doing. This
      was to ensure to create a minimum viabale project - MVP and to
      showcase to our mentors within deadline. I had a temporary design made which I
       was using to code and test the state management and
      custom endpoints using redux toolkit query. I made some face-lifts
      on this design and worked on other functionalities which were initially
      assigned to other members like creating the music player, genres listing search function and
       overall design and coded for the next 8 days through
      and through. I was able to showcase the music app albeit with some
      design flaws but a great working music app with search functions,
      genres and related songs displayed and also a custom made music
      player. I took this challenge as an opportunity where I could
      learn and code those core concepts which were otherwise assigned
      to other memebers.`,
      bottomImage: images.lk,
      imageDesc: ` Hip Hop genre fetched using search functionality`,
    },
  ]
  const Morent = [
    {
      summary: `A Core Member of a 3 member team responsible for creating core
      functionalities implemented on a custom designed schema using Mongo
      DB with back-end created upon Node and Express and using React
      with tStyled Component on front end. Implemented CI/CD pipeline with
      Typescript type-checking, database migration and code linting`,
      type: [
        "Open Source",
        "Full Stack",
        "Instructional",
        "E Commerce",
        "Modern Design",
        "Database",
        "Rent",
      ],
      landingImage: images.carrental,
      objective: `  The objective is to code a beautifully designed Car Rental
      application dubbed 'MORENT' App. This Application has to
      be delivered in one month time. The team consisting of 3 members
      were & given free hand to choose the tech stack. The app should
      have search, filter pagination. The user needs to sign up and log
      in and must be able to favourite a car using the local storage of
      the user's browser. The user should be able to upload a car
      of his choice with an image and description for renting out. User
      should have his own profile which should list all the cars he has
      uploaded and his favourite cars. The user must be able to make
      payment for renting out. There should be an option to search a car
      based on place/cities and must be able to check out cars between flexible
      dates.`,
      webStack: `This project was set to be done using React Js, Context API with
      useReducer and Styled Components. TypeScript was used for the first
      time and despite it's huge learning curve , We experienced the
      benefits of type checking and helped us fix bugs as we progressed.
      Context API was coupled with useReducer to help us achieve a
      minimalistic but a comprehensive and powerful state management tool. For back
      end We used Express with Node and MongoDB for database. In essence
      MERN stack helped us achieve customised schema. Payements and
      checkout were implemented using stripe payments. Authentication was achieved through Google Auth.`,
      stack: [
        "React Js",
        "TypeScript",
        "Node",
        "Express",
        "MongoDB",
        "Stripe",
        "eslint",
        "GoogleAuth",
        "Styled Components",
      ],
      gitUrl: "https://github.com/sethumadh/Modern-Music-Player",
      liveUrl: "https://bughunters-lyriks.vercel.app/",
      learnings: `We used our first week to get familiarize with TypeScript. We
      divided our tasks and I took on designing and managing the state
      management using Context API. I used this tool to enable filter ,
      search from the back-end and also the function to favourite a car or product using
      local storage of client's browser. I made use of multiple Contexts APIs to achieve this. I
      decided to couple Context API with useReducer which made it a
      powerful tool. I co-designed and coded the schemas, controllers
      and routers in the back-end with my team mate. Cross functional team management is one of the
      highlight of this project. Frequent cross functional inputs
      and coding and bug fixes made me realise the importance of having team members
      on the same thought process as well as importance of maintaining a
      sustainable and easy to read code.`,
      bottomImage: images.mr,
      imageDesc: ` Car search and filter functionality`,
    },
  ]
  const router = useRouter()
  console.log(router)
  const projectId = router.query.projectId
  return (
    <section
      className={`works  bg-white pt-10 md:pt-2 font-muli text-xl font-light`}
    >
      {/* Filmpire application */}

      {projectId == "Filmpire" && (
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.0 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0.2, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[85%] max-w-7xl md:w-[70%] mx-auto mt-8 md:mt-12 md:px-8 md:py-8"
        >
          <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
            <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
              {projectId}
              <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
            </div>
          </div>
          <div>
            <div className="mb-2">1 minute read</div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              {/* summary*/}
              {Filmpire[0].summary}
            </div>
            <div className=" mb-4">
              <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
                <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  Project Type
                  <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap">
                {/* Project Type */}
                {Filmpire[0].type.map((item, i) => (
                  <div
                    className="text-white bg-orange-700 px-2 py-1  mr-1 mb-1 text "
                    key={i}
                  >
                    <h2 className="text-center md:text-left italic text-sm md:text-md">
                      {item}
                    </h2>{" "}
                  </div>
                ))}
              </div>
            </div>
            {/* landing image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.filmpire} className="w-full" alt="filmpire" />
              <p className="text-sm mt-1">{projectId} landing page</p>
            </div>

            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Project Objective
                <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/*  Project Objective */}
              {Filmpire[0].objective}
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-widemb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl  font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Web Stack - Explanation
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-4 md:mb-4">
              {/*  Web Stack - Explanation */}
              {Filmpire[0].webStack}
            </div>
            <div className="flex flex-col md:flex-row justify-around  h-[250px] md:h-auto">
              <div className="w-full md:w-1/3">
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Stack
                </h1>
                {/*  Stack */}
                <ul className="flex flex-wrap">
                  {Filmpire[0].stack.map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text "
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/3">
                {/* status */}
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Status
                </h1>
                <div className="flex mx-auto items-center justify-center mb-3 md:mb-0">
                  <Link
                    href={Filmpire[0].gitUrl}
                    className="mr-12 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Github Code
                  </Link>
                  <Link
                    target={`_blank`}
                    href={Filmpire[0].liveUrl}
                    className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Problems & Learnings
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/* Problems and Learnings */}
              {Filmpire[0].learnings}
            </div>
            {/* image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.fp} className="w-full" alt="filmpire" />
              <p className="text-sm mt-1">{Filmpire[0].imageDesc}</p>
            </div>
          </div>
        </motion.article>
      )}

      {/*  Lyriks application */}

      {projectId == "Lyriks" && (
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.0 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0.2, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[85%] md:w-[70%] mx-auto mt-8 md:mt-12 md:px-8 md:py-8"
        >
          <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
            <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
              {projectId}
              <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
            </div>
          </div>
          <div>
            <div className="mb-2">1 minute read</div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              {/* summary*/}
              {Lyriks[0].summary}
            </div>
            <div className=" mb-4">
              <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
                <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  Project Type
                  <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap">
                {/* Project Type */}
                {Lyriks[0].type.map((item, i) => (
                  <div
                    className="text-white bg-orange-700 px-2 py-1  mr-1 mb-1 text "
                    key={i}
                  >
                    <h2 className="text-center md:text-left italic text-sm md:text-md">
                      {item}
                    </h2>{" "}
                  </div>
                ))}
              </div>
            </div>
            {/* landing image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image
                src={images.musicplayer}
                className="w-full"
                alt="filmpire"
              />
              <p className="text-sm mt-1">{projectId} landing page</p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center mx-auto">
              {/* status */}
              <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center italic py-4">
                Status
              </h1>
              <div className="flex mx-auto items-center justify-center mb-3 md:mb-0">
                <Link
                  href={Lyriks[0].gitUrl}
                  className="mr-12 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                >
                  Github Code
                </Link>
                <Link
                  target={`_blank`}
                  href={Lyriks[0].liveUrl}
                  className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                >
                  Live
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Project Objective
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/*  Project Objective */}
              {Lyriks[0].objective}
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-widemb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl  font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Web Stack - Explanation
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-4 md:mb-4">
              {/*  Web Stack - Explanation */}
              {Lyriks[0].webStack}
            </div>
            <div className="flex flex-col md:flex-row justify-around my-4  h-[250px] md:h-auto">
              <div className="w-full ">
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Stack
                </h1>
                {/*  Stack */}
                <ul className="flex flex-wrap">
                  {Lyriks[0].stack.map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text "
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Problems & Learnings
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/* Problems and Learnings */}
              {Lyriks[0].learnings}
            </div>
            {/* image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.lk} className="w-full" alt="filmpire" />
              <p className="text-sm mt-1">{Lyriks[0].imageDesc}</p>
            </div>
          </div>
        </motion.article>
      )}

      {/*  Car rent application */}

      {projectId == "Morent" && (
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.0 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0.2, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[85%] md:w-[70%] mx-auto mt-8 md:mt-12 md:px-8 md:py-8"
        >
          <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-4 pt-8 pb-4">
            <div className="relative  text-2xl md:text-4xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
              {projectId}
              <div className="h-[13.5px] w-[100%] bg-orange-600 absolute right-0 bottom-0 -z-30"></div>
            </div>
          </div>
          <div>
            <div className="mb-2">1 minute read</div>
            <div className="leading-loose tracking-wide mb-2 md:mb-4">
              {/* summary*/}
              {Morent[0].summary}
            </div>
            <div className=" mb-4">
              <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
                <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                  Project Type
                  <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start flex-wrap">
                {/* Project Type */}
                {Morent[0].type.map((item, i) => (
                  <div
                    className="text-white bg-orange-700 px-2 py-1  mr-1 mb-1 text "
                    key={i}
                  >
                    <h2 className="text-center md:text-left italic text-sm md:text-md">
                      {item}
                    </h2>{" "}
                  </div>
                ))}
              </div>
            </div>
            {/* landing image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.carrental} className="w-full" alt="filmpire" />
              <p className="text-sm mt-1">{projectId} landing page</p>
            </div>

            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Project Objective
                <div className="h-[8.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/*  Project Objective */}
              {Morent[0].objective}
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-widemb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl  font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Web Stack - Explanation
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-8 md:mb-4">
              {/*  Web Stack - Explanation */}
              {Morent[0].webStack}
            </div>
            {/* stack
             */}
            <div className="flex flex-col items-center md:flex-row justify-center my-4">
              <div className="w-full md:w-1/2">
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Stack
                </h1>
                <ul className="flex flex-wrap  ">
                  {Morent[0].stack.map((item, i) => (
                    <div
                      key={i}
                      className="text-white bg-black px-2 py-1  mr-1 mb-1 text "
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h1 className="text-lg md:text-xl font-semibold md:font-bold tracking-wide text-center md:text-left italic py-4">
                  Status
                </h1>
                <div className="flex mx-auto items-center justify-center mb-3 md:mb-0 w-full md:w-1/2 ">
                  <Link
                    href={Morent[0].gitUrl}
                    className="mr-12 text-sm md:text-base relative -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Github Code
                  </Link>
                  <Link
                    target={`_blank`}
                    href={`#`}
                    className="relative text-sm md:text-base -top-1 -left-1 bg-orange-700 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 duration-300"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start text-2xl sm:text-4xl font-semibold tracking-wide mb-1 md:mb-4 pt-8 pb-4">
              <div className="relative  text-xl md:text-2xl font-semibold md:font-bold tracking-wide text-center md:text-left italic">
                Problems & Learnings
                <div className="h-[13.5px] w-[100%] bg-blue absolute right-0 bottom-0 -z-30"></div>
              </div>
            </div>
            <div className="leading-relaxed tracking-wide mb-2 md:mb-4">
              {/* Problems and Learnings */}
              {Morent[0].learnings}
            </div>
            {/* image */}
            <div className="max-w-[100%] md:max-w-[80%] border border-none rounded mx-auto mb-2 md:mb-6">
              <Image src={images.mr} className="w-full" alt="filmpire" />
              <p className="text-sm mt-1">{Morent[0].imageDesc}</p>
            </div>
          </div>
        </motion.article>
      )}
    </section>
  )
}

export default ProjectDetails
