import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import Loader from './Loader'
import {
  getRequestDetails,
  payRequest,
  payRequestAdmin,
  deliverRequest,
} from '../Actions/requestActions'
import {
  REQUEST_PAY_RESET,
  REQUEST_DELIVER_RESET,
} from '../Constants/requestConstants'
import { withRouter } from 'react-router-dom'

const Request = ({ match, history }) => {
  const requestId = match.params.id

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()

  const requestDetails = useSelector((state) => state.requestDetails)
  const { request, loading, error } = requestDetails

  const requestPay = useSelector((state) => state.requestPay)
  const { loading: loadingPay, success: successPay } = requestPay

  const requestDeliver = useSelector((state) => state.requestDeliver)
  const { loading: loadingDeliver, success: successDeliver } = requestDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    request.itemsPrice = addDecimals(
      request.requestItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!request || successPay || request._id !== requestId) {
      dispatch({ type: REQUEST_PAY_RESET })
      dispatch({ type: REQUEST_DELIVER_RESET })
      dispatch(getRequestDetails(requestId))
    } else if (!request.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, requestId, successPay, request, userInfo, history])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payRequest(requestId, paymentResult))
  }

  const deliverHandler = () => {
    dispatch(deliverRequest(request))
    window.location.reload(false)
  }
  const paymentHandler = () => {
    dispatch(payRequestAdmin(requestId))
    window.location.reload(false)
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <Container>
        <Card>
          <h1>Request {request._id.substring(19, 24)}</h1>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name: </strong> {request.user.name}
                  </p>
                  <p>
                    <strong>Number: </strong> {request.user.number}
                  </p>
                  <p>
                    <strong>Email: </strong>{' '}
                    <a href={`mailto:${request.user.email}`}>
                      {request.user.email}
                    </a>
                  </p>
                  <p>
                    <strong>Pickup: </strong> {request.shippingAddress.pickup}
                  </p>
                  <p>
                    <strong>Address:</strong>
                    {request.shippingAddress.address},{' '}
                    {request.shippingAddress.city}{' '}
                    {request.shippingAddress.postalCode},{' '}
                    {request.shippingAddress.country}
                  </p>
                  {request.isDelivered ? (
                    <Message variant='success'>
                      Delivered on {request.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant='danger'>Not Delivered</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Payment Method</h2>
                  <p>
                    <strong>Method: </strong>
                    {request.paymentMethod}
                  </p>
                  {request.isPaid ? (
                    <Message variant='success'>
                      Paid on {request.paidAt}
                    </Message>
                  ) : (
                    <Message variant='danger'>Not Paid</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Request Items</h2>
                  {request.requestItems.length === 0 ? (
                    <Message>Request is empty</Message>
                  ) : (
                    <ListGroup variant='flush'>
                      {request.requestItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {item.qty} x ${item.price} = $
                              {item.qty * item.price}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Request Summary</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>${request.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>${request.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>${request.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>${request.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  {!request.isPaid && !userInfo.isAdmin && (
                    <ListGroup.Item>
                      {loadingPay && <Loader />}
                      {!sdkReady ? (
                        <Loader />
                      ) : (
                        <PayPalButton
                          amount={request.totalPrice}
                          onSuccess={successPaymentHandler}
                        />
                      )}
                    </ListGroup.Item>
                  )}

                  {userInfo && userInfo.isAdmin && !request.isDelivered && (
                    <ListGroup.Item>
                      <Button
                        type='button'
                        className='btn btn-block'
                        onClick={deliverHandler}
                      >
                        Mark As Delivered
                      </Button>
                    </ListGroup.Item>
                  )}
                  {userInfo && userInfo.isAdmin && !request.isPaid && (
                    <ListGroup.Item>
                      <Button
                        type='button'
                        className='btn btn-block'
                        onClick={paymentHandler}
                      >
                        Mark As Paid
                      </Button>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  )
}

export default withRouter(Request)
