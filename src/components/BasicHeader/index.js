import React from "react"
import styled from "styled-components"
import WidthSetter from "../WidthSetter/index"
import screenSize from "../../styles/screenSize"

const BasicHeaderContainer = styled.div`
  padding: 60px 20px;
  background: #eaf0f5;
  display: flex;

  ${screenSize.minDesktop`
    padding: 100px;
    justify-content: center;
  `}
`

const Header = styled.h1`
  color: #376a8c;
  font-size: 35px;
  font-weight: 600;

  ${screenSize.minDesktop`
    font-size: 45px;
    text-align: center;
  `}
`

const BasicHeader = ({ header }) => {
  return (
    <BasicHeaderContainer>
      <WidthSetter>
        <Header>{header}</Header>
      </WidthSetter>
    </BasicHeaderContainer>
  )
}

export default BasicHeader
