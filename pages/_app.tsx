import "../styles/globals.css"
import type { AppProps } from "next/app"
import React from "react"
import { Navbar } from "../components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar {...pageProps} />
      <Component {...pageProps} />
    </>
  )
}
