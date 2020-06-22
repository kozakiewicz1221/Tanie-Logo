import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Header from "../components/header"
import Preloader from "../components/preloader"
import Jaktodziala from "../components/jaktodziala"
import Cootrzymam from "../components/cootrzymam"
import Counter from "../components/counter"
import Logasy from "../components/logasy"

import Faq from "../components/faq"

const Home = () => {


  return (
    <>
      <SEO title="Page two" />
      <Preloader />
      <Header />
      <Hero />

      <Jaktodziala />
      <Cootrzymam />
      <Counter />
      <Logasy />
      <Faq />
      <Link to="/zamowienie">Zamowienie</Link>

    </>
  )
}

export default Home
