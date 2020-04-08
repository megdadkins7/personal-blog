import React from "react"

import GlobalStyles from '../styles/GlobalStyles'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="Home" />
    <h1>Hi, I'm Meghan. I'm a future Front-end Developer, Designer, & dog mom.</h1>
    <p>I'm on a journey to switch careers and transition into web development. Coding is a perfect match for a creative, perpetual student.</p>
  </Layout>
)

export default IndexPage
