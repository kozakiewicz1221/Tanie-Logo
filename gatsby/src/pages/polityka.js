import React, { useEffect } from "react"
import "../style/index.scss"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Counter from "../components/counter"
import Faq from "../components/faq"
import Cta from "../components/cta"
import gsap, { Power3 } from "gsap"
import { v4 as uuidv4 } from 'uuid';
import {motion} from "framer-motion"

const Polityka = ({data}) => {
  const ease = Power3.easeOut
  useEffect(() => {

    gsap.fromTo(
      [" .realizacje-title "],
      {
        y: 40,
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
  gsap.fromTo(
      ".logo-item ",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        delay: 0.2,
        opacity: 1,
        duration: 1,
        stagger: {
          grid: "auto",
          from: "top",
          amount: 1.5
        }, ease: ease,
      }
    )
  
  }, [])
console.log(data.allFile.edges)
  return (
    <>
      <Layout>
        <SEO title="Page two" />
        <section className="container flex flex-col items-center mx-auto py-4">
         
        <div className=" realizacje-title mt-4">
             <span className=" uppercase text-xs tracking-widest -mb-2 mt-4">
Projektowanie logo - portfolio            </span>
            <h1 className="gradient-text text-3xl md:text-4xl font-black ">
             Nasze realizacje
            </h1>
          </div>
           <div className="w-full flex flex-row flex-wrap">
           {data.allFile.edges.map(logo => (
                <motion.div whileHover={{
                  scale: 1.15,
                }}
                whileTap={{ scale: 1.0 }} key={uuidv4()} className="logo-item overflow-visible  w-1/3 md:w-1/6 flex justify-center items-center">
                  <Img
                className="w-full"
                fluid={logo.node.childImageSharp.fluid}
              /></motion.div>
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

export default Polityka
