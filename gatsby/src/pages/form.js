import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contactform from "../components/contactform"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <Contactform />

  </Layout>
)

export default SecondPage
