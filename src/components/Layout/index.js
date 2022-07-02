import React from "react"
import Nav from "../Nav"
import Footer from "../Footer"
import * as Styled from "./styles"
import "../../Styles/globalStyles.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/600.css"
import { Helmet } from "react-helmet"

const SeoComponent = () => {
  // get url
  const url = window.location.href
  // generate page title from url
  let pageTitle = url.split("/").pop()
  if (pageTitle === "") {
    pageTitle = "Home"
  }
  // convert sname case title to title case
  pageTitle = pageTitle.replace(/-/g, " ")
  pageTitle = pageTitle.replace(/\b\w/g, l => l.toUpperCase())

  return <Helmet title={` ${pageTitle} | GeometricPosters.com`}></Helmet>
}

const Layout = ({ children }) => {
  return (
    <Styled.Layout>
      <SeoComponent />
      <Nav />
      {children}
      <Footer />
    </Styled.Layout>
  )
}

export default Layout
