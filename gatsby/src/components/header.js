import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import "../style/header.scss"
import logo from "../images/logo.png"
import logo2 from "../images/logo2.png"
import logo3 from "../images/logo3.png"


const Header = ({ siteTitle }) => {

  useEffect(() => {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".header-wrapper").classList.add("sticky-navbar")
        document.querySelector(".logos").src = logo3
        document.querySelector(".logos").classList.add("logos-sticky")

      } else {
        document.querySelector(".header-wrapper").classList.remove("sticky-navbar")
        document.querySelector(".logos").classList.remove("logos-sticky")
        document.querySelector(".logos").src = logo

      }
    }

  }, [])




  return (
    <header>
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <img src={logo} className="logos"></img>
        </div>
        <div className="nav-wrapper">
          <ul>
            <li><Link to="/">Cennik</Link></li>
            <li><Link to="/">Jak działamy</Link></li>
            <li><Link to="/">Realizacje</Link></li>
            <li><Link to="/">Kontakt</Link></li>
            <li className="cta"><Link to="/zamowienie">Zamów Logo</Link></li>


          </ul>
        </div>
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
