import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/tanielogo-logo.svg"
import { motion } from "framer-motion"

const Header = ({ siteTitle }) => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Cennik", link: "/cennik" },
    { title: "Realizacje", link: "/realizacje" },
    { title: "Kontakt", link: "/kontakt" },
  ]
  return (
    <header style={{ zIndex: 1 }} className="navbar shadow-md">
      <div className=" flex flex-row justify-between items-center bg-gray-100 px-4 py-2 ">
        <div className="h-full flex items-center justify-center">
          <img src={logo} style={{ width: "100px", margin: "0 auto" }}></img>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex flex-row">
            {navLinks.map(item => {
              return (
                <li key={item.title}>
                  <Link
                    to={item.link}
                    className="m-2 font-semibold gradient-nav-link text-sm "
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/zamowienie"
            className="bg-gradient py-2 px-3 rounded-full text-white font-black hover:text-black text-md"
          >
            Zamów Logo
          </Link>
        </motion.div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
