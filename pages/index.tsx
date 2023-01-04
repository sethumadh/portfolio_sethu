import Head from "next/head"
import type { NextPage } from "next"
import { useState, useEffect } from "react"

import { Navbar } from "../components"
import { NavigationDots, About, Contact, Skills, Footer } from "../components"

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
    <div className="w-full min-h-screen bg-hero bg-repeat ">
      <Head>
        <title>Sethu&apos;s Portfolio</title>
      </Head>

      <NavigationDots activePage={activePage} setActivePage={setActivePage} />
      <div id="Home" className=" min-h-screen">
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          isTopOfPage={isTopOfPage}
        />
        <About setActivePage={setActivePage} />
      </div>
      <div id="Experience" className="min-h-screen">
        <Skills />
      </div>
      <div id="Contact" className="min-h-screen">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
export default Home
