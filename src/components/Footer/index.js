import React from "react"
import * as Styled from "./Styled.Footer"

const Footer = () => {
  return (
    <Styled.Footer>
      Designed and developed by&nbsp;
      <Styled.Geometric>{` Geometric `}</Styled.Geometric>
      <Styled.Posters>Posters.com</Styled.Posters>
    </Styled.Footer>
  )
}

export default Footer
