import React, { useEffect } from "react"
import "./layout.css"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import MyFooter from "./footer"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Layout = ({ children }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const reviews = [
        "Bardzo szybka realizacja i profesjonalna obsługa klienta",
        "Porządna firma, zleciłem im już kilka projektów. Zawsze zadowolony",
        "Bardzo ładne logo dostałam. Wielkie dzięki",
        "Good job!",
        "W takiej cenie nie spodziewalem się dobrej jakości, ale się myliłem. Nieźle",
      ]
      const random = Math.floor(Math.random() * reviews.length)
      toast(<p className="p-2">{reviews[random]}</p>)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div>
        <Header />

        <main>{children}</main>
        <footer>
          <MyFooter />
        </footer>
      </div>
      <ToastContainer position="bottom-left" closeOnClick pauseOnHover />
    </>
  )
}

export default Layout
