import { MDBCard } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { createRequest } from '../Actions/requestActions'
import CupcakeCarousel from '../Components/CupcakeCarousel'

const CupcakeScreen = ({ history }) => {
  const formType = 'Cupcakes'
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [size, setSize] = useState('cupcake...')
  const [flavor, setFlavor] = useState('cupcake...')
  // const [edibleImage, setEdibleImage] = useState(false)
  const [qty, setQty] = useState(12)
  const [date, setDate] = useState('')
  const [additional, setAdditional] = useState('')
  const [name, setName] = useState(userInfo ? userInfo.name : '')
  const [email, setEmail] = useState(userInfo ? userInfo.email : '')
  const [number, setNumber] = useState(userInfo ? userInfo.number : '')
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createRequest({
        formType,
        size,
        flavor,
        qty,
        date,
        additional,
        name,
        email,
        number,
      })
    )
    history.push('/thankyou')
  }
  return (
    <div className='background_pattern'>
      <Container>
        <MDBCard className='prod_info_box'>
          <Row>
            <Col md={8} lg={5} className='mx-auto'>
              <LinkContainer to='/products'>
                <button className='backprod_button absolute top-0 text-white'>
                  GO BACK
                </button>
              </LinkContainer>
              {/* <Image
                fluid
                style={{ height: 'auto', width: '500px' }}
                src={cupcake}
                alt='Kaylala cupKakes'
              /> */}
              <CupcakeCarousel />
            </Col>
            <Col md={12} lg={5} className='mx-auto'>
              <ListGroup variant='flush' className='mr-2'>
                <ListGroup.Item>
                  <h1 className='text-center font-Pacifico'>Custom Cupcakes</h1>
                </ListGroup.Item>
                <ListGroup>
                  <ListGroup.Item>
                    <Form onSubmit={submitHandler}>
                      <FloatingLabel label='Quantity:'>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          <option value='12'>Dozen</option>
                          <option value='24'>2 Dozen</option>
                          <option value='1'>Single Cupcake</option>
                        </Form.Control>
                      </FloatingLabel>
                      <FloatingLabel label='Date:'>
                        <Form.Control
                          type='date'
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          // required
                        />
                      </FloatingLabel>{' '}
                      <FloatingLabel
                        label='Themes, customization, toppers, anything that defines
                    the cupcakes you want!'
                      >
                        <Form.Control
                          as='textarea'
                          style={{ height: '100px' }}
                          value={additional}
                          onChange={(e) => setAdditional(e.target.value)}
                          required
                          placeholder='Themes, customization,  toppers, anything that defines
                    the cupcakes you want!'
                        />
                      </FloatingLabel>
                      <ListGroupItem>
                        {' '}
                        <FloatingLabel label='Name:'>
                          <Form.Control
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </FloatingLabel>
                        <FloatingLabel label='Email:'>
                          <Form.Control
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // required
                          />
                        </FloatingLabel>
                        <FloatingLabel label='Number:'>
                          <Form.Control
                            type='text'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                          />
                        </FloatingLabel>
                      </ListGroupItem>
                      <button
                        type='submit'
                        className='btn btn-primary btn-block'
                      >
                        SUBMIT REQUEST
                      </button>
                    </Form>
                  </ListGroup.Item>
                  {/* <ListGroup.Item
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                 
                </ListGroup.Item> */}
                </ListGroup>
              </ListGroup>
            </Col>
          </Row>
        </MDBCard>
      </Container>
    </div>
  )
}

export default CupcakeScreen
