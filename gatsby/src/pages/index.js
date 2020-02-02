import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import bgvideo from "../data/video/tanie-logo-tlo.mp4"
import "../style/form.scss"

const Home = () => {


  return (
    <div>
      <SEO title="Page two" />
      <div class="fullscreen-bg">
        <video className="fullscreen-bg__video" src={bgvideo} type="video/mp4" autoPlay muted loop >
        </video>

      </div>


      <Link to="/zamowienie">Zamowienie</Link></div>


  )
}

export default Home
