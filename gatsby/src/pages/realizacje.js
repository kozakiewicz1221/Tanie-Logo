import React, { useEffect } from "react"
import "../style/index.scss"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"

import SEO from "../components/seo"

import Counter from "../components/counter"
import Faq from "../components/faq"
import Cta from "../components/cta"
import { motion } from "framer-motion"
import gsap, { Power3 } from "gsap"
import { v4 as uuidv4 } from 'uuid';

const Realizacje = ({data}) => {
  const ease = Power3.easeOut
  useEffect(() => {
    gsap.fromTo(
      [" .cennik-title ", ".dodatkowe-title"],
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        delay: 0.2,
        opacity: 1,
        duration: 1,
        stagger: 0.4,
        ease: ease,
      }
    )
  
  }, [])
console.log(data.allFile.edges)
  return (
    <>
      <Layout>
        <SEO title="Page two" />
        <section className="container flex flex-col items-center mx-auto py-4">
          <h1>Realizacje</h1>
           <div className="w-full flex flex-row flex-wrap">
           {data.allFile.edges.map(logo => (
                <div key={uuidv4()} className="w-1/6">
                  <Img
                className="w-full"
                fluid={logo.node.childImageSharp.fluid}
              /></div>
            ))}
           </div>
        </section>
        <Cta />
        <Faq />

        <Counter />
      </Layout>
    </>
  )
}

export const query = graphql`
  query logosy {
    allFile(filter: { relativeDirectory: { eq: "logasy" } }) {
            edges {
              node {
                id
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
  }
`
export default Realizacje
