import React from "react"
import * as Styled from "./styles"

const WidthSetter = ({ children, className }) => {
  return (
    <Styled.WidthSetter className={className}>{children}</Styled.WidthSetter>
  )
}

export default WidthSetter
