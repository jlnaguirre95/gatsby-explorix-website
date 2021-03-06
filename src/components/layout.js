import * as React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from './GlobalStyle';

import Navbar from "./Navbar"
import Footer from "./Footer";

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
