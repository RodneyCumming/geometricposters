import React, { useState } from "react"
import * as Styled from "./Nav.styled"
import LogoNameSVG from "../../images/logo.svg"
import WidthSetter from "../WidthSetter"
import { navigate } from "gatsby"
import HamburgerSvg from "../../images/hamburger.svg"
import crossSvg from "../../images/cross.svg"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styled.Nav>
      <WidthSetter>
        <Styled.NavItemsWrapper>
          <div>
            <Styled.LogoContainer onClick={() => navigate("/")}>
              <Styled.Logo img src={LogoNameSVG} />
              <Styled.HeadersContainer>
                <Styled.HeaderOne>Geometric</Styled.HeaderOne>
                <Styled.HeaderTwo>Posters.com</Styled.HeaderTwo>
              </Styled.HeadersContainer>
            </Styled.LogoContainer>
          </div>

          <Styled.RightContainer isOpen={isOpen}>
            <Styled.NavItem to="/">Home</Styled.NavItem>
            <Styled.NavItem to="/about">About</Styled.NavItem>
            <Styled.NavItem to="/contact">Contact</Styled.NavItem>
          </Styled.RightContainer>
          <Styled.Hamburger
            src={HamburgerSvg}
            onClick={() => setIsOpen(true)}
          />
          <Styled.Cross
            src={crossSvg}
            onClick={() => setIsOpen(false)}
            isOpen={isOpen}
          />
        </Styled.NavItemsWrapper>
      </WidthSetter>
    </Styled.Nav>
  )
}

export default Nav
