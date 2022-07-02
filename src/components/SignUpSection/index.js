import React from "react"
import * as Styled from "./styles"
import { navigate } from "gatsby"

const SignUpSection = ({ background }) => {
  return (
    <Styled.SignUpSection background={background}>
      <Styled.WidthSetter>
        <Styled.FlexWrapper>
          <Styled.LeftBox>
            <Styled.PatternBackground>
              <Styled.Pattern />
            </Styled.PatternBackground>
          </Styled.LeftBox>
          <Styled.RightBox>
            <Styled.Header>Get in touch</Styled.Header>
            <Styled.Underline />
            <Styled.Button onClick={() => navigate("/contact")}>
              Contact
            </Styled.Button>
          </Styled.RightBox>
        </Styled.FlexWrapper>
      </Styled.WidthSetter>
    </Styled.SignUpSection>
  )
}

export default SignUpSection
