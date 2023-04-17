import React, { useRef, useState } from 'react'
import 'animate.css'
import { useForm } from '@formspree/react'
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap'
import ThankYou from '../Components/ThankYou.js'
import emailjs from '@emailjs/browser'

import '../Styles/Contact.css'
import FormContainer from './FormContainer.js'

const Contact = () => {
  const form = useRef()
  const [isSubmitted, setIsSubmitted] = useState()

  const submitContact = (e) => {
    e.preventDefault()

    // emailjs.sendForm('SERVICE ID', 'TEMPLATE ID', form.current, 'PUB KEY').then(
    //   (result) => {
    //     console.log(result.text)
    //   },
    //   (error) => {
    //     console.log(error.text)
    //   }
    // )
    setIsSubmitted(true)
  }
  // const [state, handleSubmit] = useForm('maykyddr')
  // if (state.succeeded) {
  //   return <ThankYou className='thank_you_card' />
  // }
  return (
    <Card className='contact_container  lg:mx-80 px-0 py-3'>
      <FormContainer>
        <h2 className='contact_title'>Contact me!</h2>
        {!isSubmitted ? (
          <Card.Body className='contact_form'>
            <Form ref={form} onSubmit={submitContact}>
              <FloatingLabel label='Name:'>
                <Form.Control
                  type='text'
                  name='user_name'
                  placeholder='Name:'
                />
              </FloatingLabel>

              <br />
              <FloatingLabel label='Email:'>
                <Form.Control
                  type='email'
                  name='user_email'
                  placeholder='Email:'
                />
              </FloatingLabel>

              <br />
              <FloatingLabel label='Message:'>
                <Form.Control
                  type='textarea'
                  name='message'
                  placeholder='Message, inqueries, etc...:'
                />
              </FloatingLabel>
              <br />
              <div className='submit_div'>
                <Button type='submit'>Send</Button>
              </div>
            </Form>
          </Card.Body>
        ) : (
          <>
            <h3>Thank You!</h3>
            <p>
              I will get back to you as soon as possible, thank you so much for
              contacting me!
            </p>
          </>
        )}
      </FormContainer>
    </Card>
  )
}

export default Contact
