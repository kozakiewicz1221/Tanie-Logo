import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Contactform from "../components/contactform"

import SEO from "../components/seo"

const IndexPage = () => {



  return (


    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

        <Contactform />
        <Image />
      </div>
      <Link to="/form/">Go to page 2</Link>
    </Layout>)
}

export default IndexPage
