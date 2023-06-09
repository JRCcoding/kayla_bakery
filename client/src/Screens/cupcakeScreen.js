import { MDBCard } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
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
      {!userInfo ? (
        <>
          Please{' '}
          <LinkContainer to='/login'>
            <strong>LOGIN</strong>
          </LinkContainer>
        </>
      ) : (
        <Container>
          <MDBCard className='prod_info_box'>
            <Row>
              <LinkContainer to='/products'>
                <div className='ml-20'>
                  {' '}
                  <Button className='backprod_button'>VIEW ALL PRODUCTS</Button>
                </div>
              </LinkContainer>

              <Col className='mx-auto'>
                <ListGroup variant='flush' className='mr-2'>
                  <ListGroup.Item>
                    <h1 className='text-center font-Pacifico'>
                      Custom Cupcakes
                    </h1>
                  </ListGroup.Item>
                  <ListGroup>
                    <ListGroup.Item>
                      <Form onSubmit={submitHandler}>
                        <Row>
                          <Col>
                            <Card
                              className='my-auto'
                              style={{
                                height: 'auto',
                                width: 'auto',
                              }}
                            >
                              <CupcakeCarousel />
                            </Card>
                          </Col>
                          <Col>
                            <Card
                              style={{ height: '100%' }}
                              className='my-auto'
                            >
                              <div className='my-auto'>
                                <div className='text-center'>
                                  <h3 className='inline'>Size</h3>
                                </div>

                                <Card
                                  onClick={(e) => setSize(12)}
                                  className={
                                    size === 12
                                      ? 'size_card_selected'
                                      : 'size_card clickable'
                                  }
                                >
                                  1 Dozen ($33)
                                </Card>
                                <Card
                                  onClick={(e) => setSize(24)}
                                  className={
                                    size === 24
                                      ? 'size_card_selected'
                                      : 'size_card clickable'
                                  }
                                >
                                  2 Dozen ($66)
                                </Card>
                                <Card
                                  onClick={(e) => setSize(1)}
                                  className={
                                    size === 1
                                      ? 'size_card_selected'
                                      : 'size_card clickable'
                                  }
                                >
                                  Single Cupcake ($2.75)
                                </Card>
                              </div>
                            </Card>
                          </Col>
                        </Row>
                        <p className='text-2xl py-5'>
                          <strong className='text-3xl font-Pacifico'>
                            Note:
                          </strong>{' '}
                          Prices may change due to any additional toppers such
                          as fondant or chocolate decorations. Also, prices may
                          change for cakes depending on how many layers are
                          requested.
                        </p>
                        <FloatingLabel label='Date:'>
                          <Form.Control
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
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
                  </ListGroup>
                </ListGroup>
              </Col>
            </Row>
          </MDBCard>
        </Container>
      )}
    </div>
  )
}

export default CupcakeScreen
