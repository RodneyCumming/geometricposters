import styled from "styled-components"
import DefaultWidthSetter from "../WidthSetter/index"
import screenSize from "../../styles/screenSize"

export const SignUpSection = styled.section`
  background: ${({ background }) => (background ? background : "#eaf0f5")};
  padding: 1rem;
  padding: 50px 1rem;

  ${screenSize.minDesktop`
    padding: 100px 1rem;
  `}
`

export const WidthSetter = styled(DefaultWidthSetter)``

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 31px -10px rgb(0 0 0 / 20%);
  border-radius: 8px;

  ${screenSize.minDesktop`
    flex-direction: row;
  `}
`

export const LeftBox = styled.div`
  background: #eaf0f5;
  height: 300px;
  flex-grow: 2;
  flex-basis: 2;
  border-radius: 8px 0 0 8px;
  background: #ecedf6;
  padding: 20px;

  ${screenSize.minDesktop`
    max-width: 400px;
    padding: 40px;
  `}
`

export const PatternBackground = styled.div`
  background: #ecedf6;
  padding: 20px;
  border-radius: 8px;
  height: 100%;

  ${screenSize.minDesktop`
    padding: 40px;
  `}
`

export const Pattern = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='122.75' height='125.8' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(233, 27%, 94%, 1)'/><path d='M33.13 0l14.12 28.5L61.37 0zm28.24 0L75.5 28.5 89.63 0zM0 .06V28.5h14.06zM14.06 28.5h28.25L28.19.06zM94.56.06L80.44 28.5h28.19zm14.07 28.44h28.25L122.75.06zM61.37 10l-9.18 18.5h18.37zM0 34.44v28.5l14.06-28.5zm14.06 0l14.13 28.5 14.12-28.5zm14.13 28.5H0l14.06 28.43zm19.06-28.5l-14.12 28.5h28.24zm14.12 28.5h28.26L75.5 34.44zm0 0L47.25 91.37H75.5zM75.5 91.37h28.2L89.64 62.94zm-28.25 0L33.13 62.94 19 91.37zm4.94-56.93L61.37 53l9.2-18.56zm28.25 0l14.06 28.5 14.13-28.5zm28.19 0l14.12 28.5 14.13-28.5zm14.12 28.5H94.5l14.13 28.43zM0 72.87v18.5h9.19zm122.75 0l-9.19 18.5h18.38zM0 97.31v18.57l9.19-18.57zm14.06 0L0 125.81h28.19zm4.94 0l14.13 28.5 14.12-28.5zm28.25 0l14.12 28.5 14.13-28.5zm28.25 0l14.13 28.5 14.06-28.5zm33.13 0l-14.07 28.5h28.19zm4.93 0l9.19 18.57 9.19-18.57z'  stroke-width='1' stroke='none' fill='hsla(242, 46%, 60%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
`

export const RightBox = styled.div`
  background: #fafaff;
  height: 300px;
  flex-grow: 4;
  flex-basis: 4;
  border-radius: 0 8px 8px 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${screenSize.minDesktop`
    padding: 60px;
  `}
`

export const Header = styled.h2`
  font-size: 40px;
  font-family: montserrat, sans-serif;
  font-weight: 700;
  color: #525386;
`

export const Underline = styled.div`
  height: 6px;
  background: #525386;
  margin: 10px 0;
  width: 160px;
`

export const Button = styled.button`
  background: #097dce;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.2s;
  width: 200px;
  margin: 20px 0 0;
  max-width: 100%;

  &:hover {
    background: #2aa0f2;
  }
`
