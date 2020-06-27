import React from "react"
import "../style/form.scss"

import SEO from "../components/seo"
import Contactform from "../components/contactform"
import Header from "../components/header"
import MyFooter from "../components/footer"

const Zamowienie = () => (
  <div>
    <SEO title="Page two" />
    <Header />
    <Contactform />
    <MyFooter/>
  </div>
)

export default Zamowienie
