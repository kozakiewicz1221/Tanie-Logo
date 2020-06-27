import React, { useState } from "react"

import { Link } from "gatsby"
import { motion } from "framer-motion"
import Logasy from "../components/logasy"
const Hero = () => {
  const data = [
    "Czas realizacji nawet do 12h",
    "Wsparcie techniczne",
    "Prawa autorskie",
    "Różne koncepcje logotypu",
    "Poprawki w cenie",
    "Pliki do druku",
    "Formaty wektorowe",
    "Pliki bitmapowe",

    "Pliki źródłowe do edycji",
    "Formaty: PDF, SVG, EPS, JPG, PNG",
  ]

  return (
    <motion.section className="flex flex-col lg:flex-row flex-no-wrap text-white text-center">
      <div className="bg-gradient w-full lg:w-1/2 px-2 py-6 md:p-6 lg:p-12 flex flex-col justify-center items-center">
        <span className="text-xs  tracking-widest">
          już od 42zł netto za projekt logotypu
        </span>
        <h1 className="font-black ">Tanie Logo firmowe</h1>
        <span className="text-white text-md font-semibold -mt-2 mb-4 tracking-widest  ">
          Profesjonalny branding oraz kreacje graficzne dla Twojej firmy
        </span>
        <div>
          <ul className="flex flex-row flex-wrap justify-center ml-0 ">
            {data.map(item => {
              return (
                <li
                  key={item}
                  className="border rounded-full mx-1 my-2  px-2 text-xs lg:text-sm"
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex flex-row mt-8 mb-4 ">
          <Link to="zamowienie">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-black hover:bg-white px-6 py-3 rounded-full mr-4 "
            >
              <span className="gradient-text font-black uppercase tracking-widest text-lg">
                Zamów Logo
              </span>
            </motion.button>
          </Link>
          <Link to="/cennik">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-white text-black mt-3"
            >
              <span className="text-sm uppercase tracking-widest font-bold hover:text-white">
                Zobacz cennik
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-8">
        <Logasy />
      </div>
    </motion.section>
  )
}

export default Hero
