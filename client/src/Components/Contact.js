import React, { useRef, useState } from 'react'
import 'animate.css'
import { useForm } from '@formspree/react'
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap'
import ThankYou from '../Components/ThankYou.js'
import emailjs from '@emailjs/browser'

import '../Styles/Contact.css'

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
    <Card
      className=' px-0 py-3 center'
      style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <h2 className='contact_title mx-auto'>Contact me!</h2>
      {!isSubmitted ? (
        <Card.Body>
          <Form ref={form} onSubmit={submitContact}>
            <FloatingLabel label='Name:'>
              <Form.Control
                type='text'
                name='user_name'
                placeholder='Name:'
                // style={{ width: '150%' }}
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
                style={{ height: '150px' }}
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
    </Card>
  )
}

export default Contact
