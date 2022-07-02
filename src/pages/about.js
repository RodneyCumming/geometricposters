import React from "react"
import Layout from "../components/Layout/index"
import BasicHeader from "../components/BasicHeader"
import styled from "styled-components"
import WidthSetter from "../components/WidthSetter"
import SignUpSection from "../components/SignUpSection"
import screenSize from "../styles/screenSize"

const ParagraphText = styled.p`
  font-size: 22px;
  font-family: montserrat, sans-serif;
  font-weight: 300;
  line-height: 2.1;
  color: #333;
  white-space: pre-wrap;
  margin: ${({ margin }) => (margin ? margin : "20px 0")};
`
const Wrapper = styled.div`
  padding: 40px;
  background: #fafbfc;
  margin: 80px 0;
  border-radius: 8px;

  ${screenSize.minDesktop`
    padding: 80px;
  `}
`

const AboutPage = () => {
  return (
    <Layout>
      <BasicHeader header={"ABOUT US"} />
      <div>
        <WidthSetter>
          <Wrapper>
            <ParagraphText
              css={`
                font-size: 25px;
                font-weight: 600;
              `}
            >
              Welcome to Geometric Posters
            </ParagraphText>
            <ParagraphText>
              Your number one source geometic shape inspired posters. We're
              dedicated to giving you the very best posters, with a focus on
              quality and customer service.
            </ParagraphText>
            <ParagraphText>
              We hope you enjoy our products as much as we enjoy offering them
              to you. If you have any questions or comments, please don't
              hesitate to contact us.
            </ParagraphText>
            <ParagraphText margin={"40px 0 0"}>Yours Sincerely,</ParagraphText>
            <ParagraphText margin={"0"}>Rod,</ParagraphText>
            <ParagraphText margin={"0"}>Founder</ParagraphText>
          </Wrapper>
        </WidthSetter>
      </div>
      <SignUpSection />
    </Layout>
  )
}

export default AboutPage
