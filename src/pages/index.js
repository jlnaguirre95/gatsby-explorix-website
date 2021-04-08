import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Stats from "../components/Stats"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips />
    <Stats />
    <Contact />
  </Layout>
)

export default IndexPage
