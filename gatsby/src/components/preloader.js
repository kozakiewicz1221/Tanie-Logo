import React, { useState, useEffect } from "react"
import "../style/preloader.scss"
import { gsap, TweenMax, TimelineMax, Power3, Expo } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'


const Preloader = () => {
  gsap.registerPlugin(CSSPlugin)
  useEffect(() => {

    const tl = new TimelineMax()
      .fromTo(".preloader-logo", 0.8, { y: -80, opacity: 0 }, { opacity: 1, y: 0, ease: Power3.easeInOut })
      .to(".preloader-logo", .8, { y: 100, opacity: 0, ease: Power3.easeIn }, "-=0.2")
      .to(".preloader", 0.4, { scaleY: 0, transformOrigin: "50% 100%", display: "none", ease: Power3.easeInOut }, "-=0.20")
  }, [])

  return (
    <div class="preloader">
      <h1 class="preloader-logo">preloader</h1>
    </div>

  )
}

export default Preloader
