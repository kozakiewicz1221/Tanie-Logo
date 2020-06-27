import React from "react"
import {Link} from 'gatsby'
import { motion } from "framer-motion"
import { GoArrowRight } from "react-icons/go"

const Cta = () => {
  return (
    <section className="container bg-gradient  rounded-lg shadow-xl flex flex-col items-center mx-auto  mb-10">
      <Link to="/zamowienie">
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
        href="mailto:kontakt@tanie-logo.pl"
        className=" flex text-white hover:text-black font-black p-2 rounded-lg font-normal text-4xl py-12 leading-tight"
      >
        Przejdź do zamówienia <GoArrowRight className="ml-4 " />
      </motion.button>
      </Link>
    </section>
  )
}

export default Cta
