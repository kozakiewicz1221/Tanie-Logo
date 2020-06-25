import React, { useEffect } from "react"
import { Link } from "gatsby"
import "../style/cennik.scss"

import SEO from "../components/seo"

import Counter from "../components/counter"
import Faq from "../components/faq"
import Cta from "../components/cta"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import "../style/index.scss"
import gsap, { Power3 } from "gsap"

const Realizacje = () => {
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
    gsap.fromTo(
      ".price-item",
      {
        y: 50,
        opacity: 0,
      },
      {
        duration: 0.6,
        y: 0,
        opacity: 1,
        delay: 0.3,
        stagger: 0.1,
        ease: ease,
      }
    )
  }, [])

  const data = [
    {
      title: "Ulotka 1-stronna",
      price: "90 zł netto",
      content: "Jednostronna ulotka o dowolnym wymiarze",
    },
    {
      title: "Ulotka 2-stronna",
      price: "135 zł netto",
      content: "Dwustronna ulotka o dowolnym wymiarze",
    },
    {
      title: "Wizytówka",
      price: "65 zł netto",
      content:
        "Dwustronna wizytówka o dowolnym wymiarze. Najczęściej 90x55mm albo 85x50mm",
    },
    {
      title: "Plakat",
      price: "120 zł netto",
      content: "Projekt plakatu o dowolnych wymiarach",
    },
    {
      title: "Projekt opakowania",
      price: "Wycena indywidualna",
      content: "Projekt graficzny dowolnego opakowania",
    },
    {
      title: "Dowolny projekt graficzny",
      price: "125 zł netto",
      content: "Projekt graficzny o dowolnych wymiarach",
    },
    {
      title: "Baner na facebooka",
      price: "60 zł netto",
      content:
        "Projekt graficzny baneru na Facebooka (zdjęcie w tle) o wymiarach dopasowanych do obecnych wymogów Facebooka",
    },
    {
      title: "Favicon",
      price: "19 zł netto",
      content: "Miniatura w karcie na pasku przeglądarki",
    },
    {
      title: "Projekt stopki e-mail",
      price: "85 zł netto",
      content: "Projekt graficzny stopki e-mail w HTML",
    },
    {
      title: "Księga znaku",
      price: "499 zł netto",
      content: "Zaawansowana i rozbudowana księga znaku dla Twojej marki",
    },
    {
      title: "Strona internetowa",
      price: "Indywidualna wycena",
      content:
        "Zbudujemy dla Ciebie responsywną i zoptymalizowaną stronę internetową z najnowszych technologiach",
    },
    {
      title: "Sklep internetowy",
      price: "Indywidualna wycena",
      content:
        "Zbudujemy dla Ciebie szybki i gotowy do sprzedaży sklep w najnowszych technologiach e-commerce",
    },
  ]
  return (
    <>
      <Layout>
        <SEO title="Page two" />
        <section className="container flex flex-col items-center mx-auto py-4">
          <h1>Realizacje</h1>
        </section>
        <Cta />
        <Faq />

        <Counter />
      </Layout>
    </>
  )
}

export default Realizacje
