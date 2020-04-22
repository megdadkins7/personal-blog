import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutImage = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "fitnessgirl.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img style={{marginBottom: '20px'}} fluid={data.placeholderImage.childImageSharp.fluid} alt='placeholder-image' />
  }
  
  export default AboutImage