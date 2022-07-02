import React from "react"
import Layout from "../components/Layout/index"
import Hero from "../components/Hero/index"
import SignUpSection from "../components/SignUpSection/index"

const HomePage = props => {
  return (
    <Layout>
      <Hero />
      <SignUpSection />
    </Layout>
  )
}

export default HomePage
