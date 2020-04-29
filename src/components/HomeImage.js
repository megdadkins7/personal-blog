import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HomeImage = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img style={{marginBottom: '20px', height: '400px', width: '900px'}} fluid={data.placeholderImage.childImageSharp.fluid} alt='home-image' />
  }
  
  export default HomeImage