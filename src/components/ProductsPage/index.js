import React from "react"
import Layout from "../Layout/index"
import WidthSetter from "../WidthSetter/index"
import Product from "../Product"
import Hero from "../Hero"
import SignUpSection from "../SignUpSection"
// import * as Styled from "./styles"
import styled from "styled-components"
import screenSize from "../../styles/screenSize"

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 50px;
  margin: 40px 0;

  ${screenSize.minLargeMobile`
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  `}

  ${screenSize.minDesktop`
    margin: 100px 0;
  `}
`

const ProductsPage = props => {
  const { productData } = props.pageContext
  return (
    <Layout>
      <Hero />
      <WidthSetter>
        <ProductsGrid>
          {productData.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </ProductsGrid>
      </WidthSetter>
      <SignUpSection />
    </Layout>
  )
}

export default ProductsPage
