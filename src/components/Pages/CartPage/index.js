import React from "react"
import Layout from "../../Layout/index"
import WidthSetter from "../../WidthSetter/index"
import SignUpSection from "../SignUpSection"
import * as Styled from "./styles"

const CartPage = props => {
  return (
    <Layout>
      <WidthSetter>Cart</WidthSetter>
      <SignUpSection />
    </Layout>
  )
}

export default CartPage
