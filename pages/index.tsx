import React, { useState, useEffect } from "react"
import Head from "next/head"
import type { NextPage } from "next"

import { Navbar } from "../components"
import { NavigationDots, About, Contact, Skills, Footer } from "../components"
import { images } from '../constants'
import Works from "../components/Works"
import Aboutme from "../components/Aboutme"
import Aboutmecopy from "../components/Aboutmecopy"
import Workscopy from "../components/Workscopy"


const Home: NextPage = () => {
  const [activePage, setActivePage] = useState("Home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setActivePage("Home")
      }
      if (window.scrollY > 75) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="w-full min-h-screen bg-hero bg-repeat   ">
      <Head>
        <title>Sethu&apos;s Portfolio</title>
      </Head>

      <NavigationDots activePage={activePage} setActivePage={setActivePage} />
      <div id="Home" className="">
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          isTopOfPage={isTopOfPage}
        />
        <About setActivePage={setActivePage}  />
      </div>
      <div id="About">
        <Aboutme/>
      </div>
      {/* <div id="Aboutmecopy">
        <Aboutmecopy/>
      </div> */}
      <div id="Works" className="">
        <Works/>
      </div>
      {/* <div id="Works" className="hidden md:flex">
        <Workscopy/>
      </div> */}
      
      <div id="Experience" className="">
        <Skills />
      </div>
      <div id="Contact" className="">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
export default Home
