import React from "react"
import Layout from "../components/Layout/index"
import BasicHeader from "../components/BasicHeader"
import WidthSetter from "../components/WidthSetter"
import styled from "styled-components"
import screenSize from "../styles/screenSize"

const Wrapper = styled.div`
  margin: 40px 0;

  ${screenSize.minDesktop`
    margin: 80px 0;
  `}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  background: #f4f6f8;
  padding: 40px;
  border-radius: 8px;

  ${screenSize.minDesktop`
    padding: 80px;
  `}
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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #376a8c;
  font-family: montserrat, sans-serif;
  font-weight: 600;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 3px;
  border: none;
  padding: 0 10px;
  margin: 10px 0 20px;
  background: #fdfdfd;
  resize: vertical;
`

const Button = styled.button`
  background: #097dce;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  max-width: 100%;

  width: 300px;
  margin: 20px auto 0;

  &:hover {
    background: #2aa0f2;
  }
`

const ContactPage = () => {
  return (
    <Layout>
      <BasicHeader header={"CONTACT US"} />
      <WidthSetter>
        <Wrapper>
          <Form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/contact?success=true"
          >
            <Input type="hidden" name="form-name" value="contact" />
            <Label>
              Name:
              <Input
                type="text"
                name="name"
                required="required"
                minLength="2"
              />
            </Label>
            <Label>
              Email:
              <Input
                type="email"
                name="email"
                required="required"
                minLength="2"
              />
            </Label>
            <Label>
              Message:
              <TextArea name="message" required="required" minLength="2" />
            </Label>
            <Button type="submit">Send</Button>
          </Form>
        </Wrapper>
      </WidthSetter>
    </Layout>
  )
}

export default ContactPage
