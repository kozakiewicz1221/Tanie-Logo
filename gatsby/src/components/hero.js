import React, { useState } from "react"
import bgvideo from "../data/video/tanie-logo-tlo.mp4"
import "../style/hero.scss"


import { Link } from "gatsby"

const Hero = () => {
  const data = ["Czas realizacji nawet do 12h",
    "Wsparcie techniczne",
    "Prawa autorskie",
    "Różne koncepcje logotypu",
    "Poprawki w cenie",
    "Pliki do druku",
    "Formaty wektorowe",
    "Pliki bitmapowe",

    "Pliki źródłowe do edycji",
    "Formaty: PDF, SVG, EPS, JPG, PNG"]

  return (
    <div class="fullscreen-bg">
      <video className="fullscreen-bg__video" src={bgvideo} type="video/mp4" autoPlay muted loop >
      </video>

      <div className="hero-inner">
        <h1>Tanie Logo Firmowe</h1>
        <span>Profesjonalny branding oraz kompleksowa obsługa graficzna dla Twojej firmy </span>

        <ul>
          {data.map((item) => {
            return (
              <li >{item}</li>
            )
          })}
        </ul>

        <div className="cta-wrapper" >
          <button className="btn3" style={{ color: "white !important" }}>Zobacz Cennik</button>
          <button className="btn2">Zamów Logo</button>

        </div>

      </div>
    </div>
  )
}

export default Hero
