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

const Cennik = () => {
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
        




          <div className=" cennik-title mt-4">
             <span className=" uppercase text-xs tracking-widest -mb-2 mt-4">
              Tanie logo firmowe
            </span>
            <h1 className="gradient-text text-3xl md:text-4xl font-black ">
              Projekt logo - cennik{" "}
            </h1>
          </div>

        


          <div className="triple grid gap-6 grid-cols-1 md:grid-cols-3 my-4 md:my-4">
            {/* PRICING 1 */}
            <Link to="/zamowienie">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.95 }}
                className="price-item bg-gray-100 px-4 py-6 rounded-lg "
              >
                <div className="flex flex-col items-center">
                  <h2 className="gradient-text text-2xl m-0 mb-2">1 x logo</h2>
                  <span className="bg-gradient text-white p-1 px-2 rounded-lg text-sm   font-black">
                    85 zł netto
                  </span>
                </div>
                <ul className=" mt-4  text-gray-700 list-disc">
                  <b>
                    <li> 1 propozycja logo</li>
                    <li> 2 poprawki (łącznie)</li>
                  </b>
                  <li> Czas realizacji nawet 12h</li>
                  <li> Pliki źródłowe do edycji</li>
                  <li> Pliki wektorowe </li>
                  <li> Formaty: PDF, SVG, EPS, JPG, PNG</li>
                  <li>Licencja na korzystanie</li>
                </ul>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="mx-auto w-full mt-6 p-0"
                >
                  <Link
                    className="text-gray-700 py-1 px-2 rounded-lg  bg-white hover:text-red-500 font-semibold text-base  leading-tight"
                    to="/zamowienie"
                  >
                    Zamów
                  </Link>
                </motion.button>
              </motion.div>
            </Link>

            {/* PRICING 2 */}
            <Link to="/zamowienie">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.95 }}
                className="price-item bg-gradient p-4 rounded-lg shadow-2xl  my-4 md:my-0 px-4 py-6"
              >
                <div className="flex flex-col items-center">
                  <h2 className="text-white text-2xl m-0 mb-2">2 x logo</h2>
                  <span className="bg-white  text-gray-800 p-1 px-2 rounded-lg text-sm   font-black">
                    125 zł netto
                  </span>
                </div>
                <ul className=" mt-4 text-white list-disc">
                  <b>
                    <li> 2 propozycje logo</li>
                    <li> 4 poprawki (łącznie) </li>
                  </b>
                  <li> Czas realizacji nawet 12h</li>
                  <li> Pliki źródłowe do edycji</li>
                  <li> Pliki wektorowe </li>
                  <li> Formaty: PDF, SVG, EPS, JPG, PNG</li>
                  <li>Licencja na korzystanie</li>
                </ul>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="mx-auto w-full mt-6 p-0"
                >
                  <Link
                    className="text-gray-700 py-1 px-2 rounded-lg  bg-white hover:text-red-500 font-semibold text-base  leading-tight"
                    to="/zamowienie"
                  >
                    Zamów
                  </Link>
                </motion.button>
              </motion.div>
            </Link>

            {/* PRICING 3 */}
            <Link to="/zamowienie">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.95 }}
                className="price-item bg-gray-100 px-4 py-6 rounded-lg"
              >
                <div className="flex flex-col items-center">
                  <h2 className="gradient-text text-2xl m-0 mb-2">3 x logo</h2>
                  <span className="bg-gradient text-white p-1 px-2 rounded-lg text-sm   font-black">
                    165 zł netto
                  </span>
                </div>
                <ul className=" mt-4 text-gray-700 list-disc">
                  <b>
                    <li> 3 propozycje logo</li>
                    <li> 6 poprawek (łącznie) </li>
                  </b>
                  <li> Czas realizacji nawet 12h</li>
                  <li> Pliki źródłowe do edycji</li>
                  <li> Pliki wektorowe </li>
                  <li> Formaty: PDF, SVG, EPS, JPG, PNG</li>
                  <li>Licencja na korzystanie</li>
                </ul>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="mx-auto w-full mt-6 p-0"
                >
                  <Link
                    className="text-gray-700 py-1 px-2 rounded-lg  bg-white hover:text-red-500 font-semibold text-base  leading-tight"
                    to="/zamowienie"
                  >
                    Zamów
                  </Link>
                </motion.button>
              </motion.div>
            </Link>
          </div>
          {/* dodatnowe uslugi*/}
          <div className="mt-16  flex flex-col items-center">
            <div className="dodatkowe-title ">
              <span className="uppercase text-xs tracking-widest ">
                Projektowanie graficzne - cennik{" "}
              </span>
              <h1 className="gradient-text text-3xl md:text-4xl font-black ">
                Dodatkowe usługi
              </h1>
            </div>

            <div className="triple grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  my-0 md:my-4 px-4 md:px-0">
              {data.map(item => {
                return (
                  <Link to="/zamowienie">
                    <div className="price-item h-full flex flex-col  flex-auto bg-gray-100 hover:bg-gray-200 transition ease-out duration-300 px-4 py-6 rounded-lg">
                      <div className="flex flex-col items-center  flex-auto">
                        <h3 className=" text-lg m-0  text-gray-800  text-center mb-4">
                          {item.title}
                        </h3>
                        <span className="bg-gradient text-white p-1 px-2 rounded-lg text-sm   font-black">
                          {item.price}
                        </span>
                        <p className="text-center mt-4">{item.content}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
        <Cta />
        <Faq />

        <Counter />
      </Layout>
    </>
  )
}

export default Cennik
