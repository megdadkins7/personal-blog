import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutImage = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img style={{marginBottom: '20px', height: '400px', width: '900px'}} fluid={data.placeholderImage.childImageSharp.fluid} alt='placeholder-image' />
  }
  
  export default AboutImage