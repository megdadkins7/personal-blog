/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Menu from './menu'
import Header from "./header"
import "./layout.css"

import "typeface-raleway"

import GlobalStyles from '../styles/GlobalStyles'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '50px'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          Reach out to me on
          <a href="https://twitter.com/MegDAdkins" target="blank"> Twitter!</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
