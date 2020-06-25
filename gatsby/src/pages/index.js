import React, { useEffect } from "react"
import "../style/index.scss"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Jaktodziala from "../components/jaktodziala"
import Cootrzymam from "../components/cootrzymam"
import Counter from "../components/counter"
import Faq from "../components/faq"
import Cta from "../components/cta"
import Layout from "../components/layout"
import Preloader from "../components/preloader"

const Home = () => {
  return (
    <>
      <Layout>
        <SEO title="Page two" />
        <Preloader />
        <Hero />
        <Jaktodziala />
        <Cootrzymam />
        <Counter />
        <Faq />
        <Cta />
      </Layout>
    </>
  )
}

export default Home
