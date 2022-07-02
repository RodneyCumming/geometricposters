import styled from "styled-components"
import DefaultWidthSetter from "../WidthSetter/index"
import Img from "gatsby-image"
import screenSize from "../../styles/screenSize"

export const Hero = styled.section`
  background: #eaf0f5;
  padding: 50px 0;

  ${screenSize.minDesktop`
    padding: 100px 0;
  `}
`

export const WidthSetter = styled(DefaultWidthSetter)`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 6%;

  ${screenSize.minDesktop`
    grid-template-columns: 47% 47%;
  `}
`

export const LeftBox = styled.div`
  flex-grow: 3;
  flex-basis: 120px;
  font-family: montserrat;
  color: #376a8c;
  align-items: center;
  display: flex;
`

export const RightBox = styled.div`
  background: #d0dce0;
  height: 300px;
  flex-grow: 4;
  flex-basis: 4;
`

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;

  ${screenSize.minDesktop`
    font-size: 60px;
    margin-bottom: 0px;
  `}
`

export const HeroImage = styled(Img)``
