import React, { useState } from "react"
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

const FormContainer = styled.div`
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

const Form = styled.form``

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

const ThankyouWrapper = styled.div`
  padding: 80px 0;
`

const ThankyouHeader = styled.h3`
  font-size: 30px;
  color: #474676;
  margin-bottom: 20px;
  text-align: left;

  ${screenSize.minDesktop`
    text-align: center;
  `}
`

const ThankyouMessage = styled.p`
  font-size: 20px;
  color: #474676;
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: left;

  ${screenSize.minDesktop`
    text-align: center;
  `}
`

const ContactPage = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false)

  const handleSubmitForm = e => {
    e.preventDefault()

    // if message contains bad words or spam, don't send email
    const message = e?.target?.message?.value
    const badWords = ["porn", "sex", "xxx"]
    const containsBadWords = badWords.some(word => message.includes(word))
    if (containsBadWords) return

    const formString = `----------------- \n email: ${e?.target?.email?.value} \n name: ${e?.target?.name?.value} \n message: ${e?.target?.message?.value} \n -----------------`

    const messageObject = {
      content: formString,
    }

    fetch(process.env.GATSBY_CONTACT_FORM_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageObject),
    })
      .then(() => {
        console.log("????")
        setSubmissionSuccess(true)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Layout>
      <BasicHeader header={"CONTACT US"} />
      <WidthSetter>
        <Wrapper>
          <FormContainer>
            {submissionSuccess ? (
              <ThankyouWrapper>
                <ThankyouHeader>Thank you for your message!</ThankyouHeader>
                <ThankyouMessage>
                  We will get back to you as soon as possible.
                </ThankyouMessage>
              </ThankyouWrapper>
            ) : (
              <Form onSubmit={handleSubmitForm}>
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
            )}
          </FormContainer>
        </Wrapper>
      </WidthSetter>
    </Layout>
  )
}

export default ContactPage
