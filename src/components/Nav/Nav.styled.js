import styled from "styled-components"
import { Link } from "gatsby"
import screenSize from "../../styles/screenSize"

export const Nav = styled.header`
  background: #c8d4de;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #fff;

  ${screenSize.minDesktop`
    height: 80px;
  `}
`

export const Logo = styled.img`
  height: 35px;
  width: auto;
  cursor: pointer;

  ${screenSize.minDesktop`
    height: 35px;
  `}
`

export const HeadersContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${screenSize.minDesktop`
    flex-direction: row;
  `}
`

export const HeaderOne = styled.h1`
  display: inline;
  font-family: "Montserrat";
  color: #302f5a;
  font-weight: 700;
  margin-left: 10px;

  height: 20px;
  font-size: 20px;

  ${screenSize.minDesktop`
    font-size: 25px;
    margin-left: 15px;
    position: relative;
    top: -5px;
  `}
`

export const HeaderTwo = styled.h1`
  display: inline;
  font-family: "Montserrat";
  color: #6d6bc7;
  font-weight: 700;
  margin-left: 10px;

  height: 20px;
  font-size: 20px;

  ${screenSize.minDesktop`
    font-size: 25px;
    margin-left: 5px;
    position: relative;
    top: -5px;
  `}
`

export const LogoContainer = styled.div`
  display: inline-block;

  border-radius: 20px;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ${screenSize.minDesktop`
    padding: 10px 30px;

    :hover {
      background: #f0f0fe;
    }
  `}
`
export const NavItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`
export const RightContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #eaf0f5;
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;

  ${screenSize.minDesktop`
    display: flex;
    height: unset;
    width: unset;
    position: unset;
    flex-direction: row;
    z-index: unset;
    background: unset;
  `}
`
export const NavItem = styled(Link)`
  padding: 20px 30px;
  font-weight: 700;
  color: #376a8c;
  cursor: pointer;
  font-size: 35px;
  text-decoration: none;

  :hover {
    color: #097dce;
  }

  ${screenSize.minDesktop`
    font-size: 20px;
  `}
`

export const Hamburger = styled.img`
  display: inline-block;
  width: 35px;
  height: 35px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;

  ${screenSize.minDesktop`
    display: none;
  `}
`

export const Cross = styled.img`
  width: 35px;
  height: 35px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 100;
  display: ${({ isOpen }) => (isOpen ? "inline-block" : "none")};

  ${screenSize.minDesktop`
    display: none;
  `}
`
