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
import CakeCarousel from '../Components/CakeCarousel'

const CakeScreen = ({ history }) => {
  const formType = 'Cake'
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [size, setSize] = useState()
  const [qty, setQty] = useState(1)
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

  // const clickSize = (e, num) => {
  //   setSize(num)
  // }
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
              <Col md={12} lg={12} className='mx-auto'>
                <ListGroup variant='flush' className='mr-2'>
                  <ListGroup.Item>
                    <h1 className='text-center text-5xl font-Pacifico'>
                      Custom Cake
                    </h1>
                  </ListGroup.Item>
                  <ListGroup>
                    <ListGroup.Item>
                      <Form onSubmit={submitHandler}>
                        <Row>
                          <Col>
                            <Card
                              className='my-auto'
                              style={{ height: 'auto', width: 'auto' }}
                            >
                              <CakeCarousel />
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
                                  onClick={(e) => setSize(10)}
                                  className={
                                    size === 10
                                      ? 'size_card_selected'
                                      : 'size_card clickable'
                                  }
                                >
                                  10 " ($87+)
                                </Card>
                                <Card
                                  onClick={(e) => setSize(8)}
                                  className={
                                    size === 8
                                      ? 'size_card_selected'
                                      : 'size_card clickable'
                                  }
                                >
                                  8 " ($67+)
                                </Card>
                                <Card
                                  onClick={(e) => setSize(6)}
                                  className={
                                    size === 6
                                      ? 'size_card_selected'
                                      : 'size_card clickable'
                                  }
                                >
                                  6 " ($57+)
                                </Card>
                                <Card
                                  onClick={(e) => setSize(4)}
                                  className={
                                    size === 4
                                      ? 'size_card_selected'
                                      : 'size_card clickable'
                                  }
                                >
                                  4 " ($27+)
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
                        <FloatingLabel label='Quantity:'>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array.from(Array(10)).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </FloatingLabel>
                        <FloatingLabel label='Date:'>
                          <Form.Control
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            // required
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          label='Themes, customization, cake toppers, anything that defines
                    the cake you want!'
                        >
                          <Form.Control
                            as='textarea'
                            style={{ height: '100px' }}
                            value={additional}
                            onChange={(e) => setAdditional(e.target.value)}
                            required
                            placeholder='Themes, customization, cake toppers, anything that defines
                    the cake you want!'
                          />
                        </FloatingLabel>
                        <ListGroupItem>
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

export default CakeScreen
