import { Link } from "gatsby";

import PropTypes from "prop-types";
import React, { useEffect } from "react";
import logo from "../images/tanielogo-logo.svg";
import { motion } from "framer-motion";
import { ScrollTo } from "react-scroll-to";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import "../style/header.scss";

import gsap, { TimelineMax, Power3, CSSPlugin } from "gsap";

const Header = ({ siteTitle }) => {
  gsap.registerPlugin(CSSPlugin);

  useEffect(() => {
    const tl5 = new TimelineMax()
      .fromTo(
        ".logo-wrapper",
        1.5,
        { y: -60, opacity: 0, ease: Power3.easeOut },
        { opacity: 1, y: 0 }
      )
      .from(
        ".hamburger",
        1.5,
        { y: -60, opacity: 0, ease: Power3.easeOut },
        "-=1.2"
      )
      .staggerFromTo(
        ".navbar-wrapper ul li",
        1,
        { y: -60, opacity: 0, ease: Power3.easeOut },
        { y: 0, opacity: 1 },
        0.2,
        "-=1.3"
      );
  }, []);

  const openMenu = () => {
    let openTl = new TimelineMax()
      .fromTo(
        ".overlay-wrapper",
        0.5,
        { x: -600, opacity: 0 },
        { x: 0, visibility: "visible", opacity: 1, ease: Power3.easeOut }
      )
      .staggerFromTo(
        ".mobile-link",
        0.9,
        { y: -30, opacity: 0 },
        { opacity: 1, y: 0, ease: Power3.easeOut },
        0.15,
        "-=0.3"
      )
      .to(".close", 0.5, { opacity: 1, rotate: -360 }, "-=0.9");
  };
  const closeMenu = () => {
    let openTl = new TimelineMax()
      .to(".close", 0.5, { opacity: 0, rotate: -540 })

      .staggerTo(
        ".mobile-link",
        0.4,
        { y: -150, opacity: 0, ease: Power3.easeIn },
        0.1,
        "-=0.7"
      )
      .to(".overlay-wrapper", 0.3, {
        x: -1000,
        opacity: 0,
        ease: Power3.easeIn,
      });
  };

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Cennik", link: "/cennik" },
    { title: "Realizacje", link: "/realizacje" },
  ];
  const mobileeNavLinks = [
    { title: "Home", link: "/" },
    { title: "Cennik", link: "/cennik" },
    { title: "Realizacje", link: "/realizacje" },
    { title: "Zamów logo", link: "/zamowienie" },
  ];

  return (
    <header style={{ zIndex: 1 }} className='navbar shadow-md'>
      <div className='overlay-wrapper'>
        <div className='close' onClick={closeMenu}>
          <MdClose />
        </div>

        <div className='navs'>
          {mobileeNavLinks.map((item) => {
            return (
              <Link
                cover
                className='mobile-link '
                style={{ color: "white" }}
                direction='down'
                duration={0.8}
                bg='white'
                to={item.link}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className=' flex flex-row justify-between items-center bg-gray-100 px-4 py-2 '>
        <Link to='/'>
          <div className='h-full flex items-center justify-center'>
            <img src={logo} style={{ width: "140px", margin: "0 auto" }}></img>
          </div>
        </Link>
        <div className='hidden md:flex'>
          <ul className='flex flex-row'>
            {navLinks.map((item) => {
              return (
                <li key={item.title}>
                  <Link
                    to={item.link}
                    className='m-2 font-semibold gradient-nav-link text-sm '
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <ScrollTo>
                {({ scroll }) => (
                  <a
                    onClick={() => scroll({ y: 25000, smooth: true })}
                    style={{ cursor: "pointer" }}
                    className='m-2 font-semibold gradient-nav-link text-sm '
                  >
                    Kontakt
                  </a>
                )}
              </ScrollTo>
            </li>
          </ul>
        </div>
        <div className='flex md:hidden'>
          <FiMenu
            onClick={openMenu}
            style={{ color: "white" }}
            className='bg-gradient text-4xl rounded-full p-2 cursor-pointer'
          />
        </div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to='/zamowienie'
            className='bg-gradient py-2 px-3 rounded-full text-white font-black hover:text-black text-md'
          >
            Zamów Logo
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
