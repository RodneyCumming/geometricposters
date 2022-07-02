import styled from "styled-components"
import screenSize from "../../styles/screenSize"

export const Footer = styled.footer`
  background: #6e6d82;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d8d8e8;
  font-size: 18px;
  flex-direction: column;

  ${screenSize.minDesktop`
    flex-direction: row;
  `}
`
export const Posters = styled.span`
  color: #e5e5f4;
`
export const Geometric = styled.span`
  color: #ffffff;
`
