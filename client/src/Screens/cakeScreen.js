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
import CakeCarousel from '../Components/CakeCarousel'
import cake from '../Images/cakes_friends.webp'

const CakeScreen = ({ history }) => {
  const formType = 'Cake'
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [size, setSize] = useState('Choose one...')
  const [flavor, setFlavor] = useState('Choose one...')
  // const [edibleImage, setEdibleImage] = useState(false)
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
              {/* <LinkContainer to='/products'>
                <button className='backprod_button absolute top-0 text-white'>
                  GO BACK
                </button>
              </LinkContainer>
              <Image
                fluid
                style={{ height: 'auto', width: '500px' }}
                src={cake}
                alt='Kaylala Kakes'
              /> */}
              <CakeCarousel />
            </Col>
            <Col md={12} lg={5} className='mx-auto'>
              <ListGroup variant='flush' className='mr-2'>
                <ListGroup.Item>
                  <h1 className='text-center font-Pacifico'>Custom Cake</h1>
                </ListGroup.Item>
                <ListGroup>
                  <ListGroup.Item>
                    <Form onSubmit={submitHandler}>
                      <FloatingLabel label='Size (starting price)'>
                        <Form.Control
                          as='select'
                          onChange={(e) => setSize(e.target.value)}
                        >
                          <option value='Choose one...'>
                            Choose one (4 layer)
                          </option>
                          <option value='10'>10 inch ($87+)</option>
                          <option value='8'>8 inch ($67+)</option>
                          <option value='6'>6 inch ($57+)</option>
                          <option value='4'>4 inch ($27+)</option>
                        </Form.Control>{' '}
                      </FloatingLabel>
                      {/* <FloatingLabel label='Flavor'>
                        <Form.Control
                          as='select'
                          onChange={(e) => setFlavor(e.target.value)}
                        >
                          <option value='Choose one...'>Choose one...</option>
                          <option value='Vanilla'>Vanilla</option>
                        </Form.Control>{' '}
                      </FloatingLabel> */}
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
                            // required
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

export default CakeScreen
