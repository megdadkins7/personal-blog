import React from "react"

import GlobalStyles from '../styles/GlobalStyles'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeImage from '../components/HomeImage'

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="Home" />
    <HomeImage />
    <h1>Hi, I'm Meghan. I'm a future Front-end Developer & current dog mom.</h1>
    <p>I'm on a journey to switch careers and transition into web development. Coding is a perfect match for a creative, perpetual student.</p>
    <footer>
      Reach out to me on
      <a href="https://twitter.com/MegDAdkins" target="blank"> Twitter!</a>
    </footer>
  </Layout>
)

export default IndexPage
