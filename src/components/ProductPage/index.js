import React, { useState } from "react"
import Img from "gatsby-image"
import Layout from "../Layout/index"
import WidthSetter from "../WidthSetter/index"
import SignUpSection from "../SignUpSection"
import styled from "styled-components"
import screenSize from "../../styles/screenSize"

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 20px;

  ${screenSize.minDesktop`
    grid-template-columns: 50% 50%;
    grid-gap: 0;
  `}
`

const Container = styled.div`
  width: 350px;
  height: fit-content;
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.1);
`
const RightContainer = styled.div`
  padding: 40px;
  background: #dce5eb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Hero = styled.section`
  background: #eaf0f5;
  padding: 50px 0;
`
const ImageWrapper = styled.section`
  display: flex;
  justify-content: center;
`

const ProductName = styled.h3`
  font-size: 30px;
  color: #474676;
  margin-bottom: 20px;
`

const ProductDescription = styled.p`
  font-size: 20px;
  color: #474676;
  margin-bottom: 20px;
  line-height: 1.5;
`

const ProductPrice = styled.p`
  font-size: 20px;
  color: #474676;
  margin-bottom: 20px;
  line-height: 1.5;
`

const Label = styled.span`
  font-weight: 600;
  color: #5d5ba9;
`

const BuyButton = styled.button`
  background: #097dce;
  color: white;
  font-weight: 500;
  font-size: 20px;
  padding: 15px 20px;
  margin: 15px 0;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  :hover {
    background: #2aa0f2;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: none;
  padding: 0 10px;
  margin: 10px 0 20px;
  background: #fdfdfd;
`

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #474676;
  font-family: montserrat, sans-serif;
  font-weight: 600;
`

const StyledImage = styled(Img)``

const ProductPage = props => {
  const { productData } = props.pageContext

  const [progress, setProgress] = useState(0)

  return (
    <Layout>
      <Hero>
        <WidthSetter>
          <ProductContainer>
            <ImageWrapper>
              <Container>
                <StyledImage
                  fluid={productData.image.childImageSharp.fluid}
                  width={50}
                />
              </Container>
            </ImageWrapper>

            <RightContainer>
              {progress === 0 && (
                <>
                  <div>
                    <ProductName>{productData.name}</ProductName>
                    <ProductDescription>
                      <Label>Description:&nbsp;</Label>
                      {productData.description}
                    </ProductDescription>
                    <ProductPrice>
                      <Label>Price:&nbsp;</Label> ${productData.price}.00 USD
                    </ProductPrice>
                    <ProductPrice>
                      <Label>Size:&nbsp;</Label>
                      {productData.size}
                    </ProductPrice>
                  </div>

                  <BuyButton onClick={() => setProgress(1)}>Purchase</BuyButton>
                </>
              )}
              {progress === 1 && (
                <>
                  <div
                    css={`
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      height: 100%;
                      width: 100%;
                    `}
                  >
                    <ProductName>Please enter you details</ProductName>

                    <Form
                      name="product-purchase-form"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      action={`?success=true`}
                    >
                      <Input type="hidden" name="form-name" value="contact" />
                      <FormLabel>
                        Name:
                        <Input
                          type="text"
                          name="name"
                          minLength="2"
                          required="required"
                        />
                      </FormLabel>
                      <FormLabel>
                        Email:
                        <Input
                          type="email"
                          name="email"
                          required="required"
                          minLength="3"
                        />
                      </FormLabel>
                      <FormLabel>
                        Address:
                        <Input
                          type="address"
                          name="address"
                          required="required"
                          minLength="5"
                        />
                      </FormLabel>
                      <BuyButton>Next</BuyButton>
                    </Form>
                  </div>
                </>
              )}
              {progress === 2 && (
                <>
                  <div
                    css={`
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      height: 100%;
                    `}
                  >
                    <ProductName>Thank you for your intest</ProductName>
                    <ProductDescription>
                      Someone will be in touch to arrange payment and shipping
                    </ProductDescription>
                  </div>
                </>
              )}
            </RightContainer>
          </ProductContainer>
        </WidthSetter>
      </Hero>
      <SignUpSection background={"white"} />
    </Layout>
  )
}

export default ProductPage
