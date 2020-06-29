import React, { useState } from "react";
import { Accordion, AccordionPanel, Box } from "grommet";
import logo from "../images/tanielogo-logo.svg";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const Footer = () => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Cennik", link: "/cennik" },
    { title: "Zamów Logo", link: "/zamowienie" },

    { title: "Realizacje", link: "/realizacje" },
  ];
  return (
    <section className=' bg-gray-100  rounded-lg flex flex-col items-center mx-auto py-16 '>
      <img src={logo} style={{ width: "250px", margin: "0 auto" }}></img>
      <motion.a
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
        className='bg-gradient text-white  hover:text-black p-2 rounded-lg font-normal text-xl mb-3 mt-10'
        href='tel:+48450021100'
      >
        +48 450 021 100
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
        href='mailto:kontakt@tanie-logo.pl'
        className='bg-gradient text-white hover:text-black p-2 rounded-lg font-normal text-xl '
      >
        kontakt@tanie-logo.pl
      </motion.a>
      <ul className='flex flex-col  px-4 py-8 gradient-text text-md -ml-1 font-semibold '>
        <li className='flex mb-2'>
          <AiFillCheckCircle
            className='bg-gradient text-white rounded-full mr-1'
            style={{ padding: "2px", fontSize: "18px" }}
          />
          Najtańsze logo w internecie.
        </li>
        <li className='flex mb-2'>
          <AiFillCheckCircle
            className='bg-gradient text-white rounded-full mr-1'
            style={{ padding: "2px", fontSize: "18px" }}
          />
          Projekt nawet w 12h
        </li>
        <li className='flex mb-2'>
          <AiFillCheckCircle
            className='bg-gradient text-white rounded-full mr-1'
            style={{ padding: "2px", fontSize: "18px" }}
          />
          Prawa autorskie + poprawki gratis.
        </li>
        <li className='flex mb-2'>
          <AiFillCheckCircle
            className='bg-gradient text-white rounded-full mr-1'
            style={{ padding: "2px", fontSize: "18px" }}
          />
          Ulotki, wizytówki, plakaty, banery, grafiki...
        </li>
      </ul>
      <ul className='flex flex-row'>
        {navLinks.map((item) => {
          return (
            <motion.li
              key={item.title}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={item.link}
                className='m-1 md:m-3 font-normal  bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-white p-1 rounded-md  md:tracking-wider  '
              >
                {item.title}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Footer;
