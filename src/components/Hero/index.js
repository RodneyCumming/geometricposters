import React from "react"
import * as Styled from "./styles"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
  const heroImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero-image.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Styled.Hero>
      <Styled.WidthSetter>
        <Styled.LeftBox>
          <Styled.Heading>Welcome to Geometric Posters</Styled.Heading>
        </Styled.LeftBox>
        <Styled.HeroImage
          fluid={heroImage.file.childImageSharp.fluid}
        ></Styled.HeroImage>
      </Styled.WidthSetter>
    </Styled.Hero>
  )
}

export default Hero
