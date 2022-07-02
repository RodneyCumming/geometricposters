import React from "react"
import * as Styled from "./styles"
import shadowPng from "../../images/shadow.png"
import { navigate } from "gatsby"

const Product = props => {
  const { product } = props
  return (
    <Styled.Product onClick={() => navigate(product.slug)}>
      <Styled.WallShadow />
      <Styled.Shadow src={shadowPng} />
      {product.image.childImageSharp && (
        <Styled.ProductImage fixed={product.image.childImageSharp.fixed} />
      )}
      <Styled.Overlay>
        <Styled.AddToCartButton>View Product</Styled.AddToCartButton>
      </Styled.Overlay>
    </Styled.Product>
  )
}

export default Product
