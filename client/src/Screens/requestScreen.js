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
import Message from '../Components/Message'
import Loader from '../Components/Loader'
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

const RequestScreen = ({ match, history }) => {
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

    // request.itemsPrice = addDecimals(
    //   request.requestItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    // )
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
    <div className='background_pattern'>
      <Container>
        <Card>
          <h1>Request {request._id.substring(19, 24)}</h1>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Contact Info</h2>
                  <br />
                  <p>
                    <strong>Name: </strong>
                    {request.name}
                  </p>
                  <p>
                    <strong>Number: </strong>
                    {request.number}
                  </p>
                  <p>
                    <strong>Email: </strong>{' '}
                    <a href={`mailto:${request.email}`}>{request.email}</a>
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
                  <h2>Payment Information</h2>

                  {request.isPaid ? (
                    <Message variant='success'>
                      Paid on {request.paidAt}
                    </Message>
                  ) : (
                    <Message variant='danger'>Not Paid</Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Type:</Col>
                      <Col>{request.formType}</Col>
                    </Row>
                  </ListGroup.Item>
                  {request.formType === 'Cupcakes' ? (
                    <></>
                  ) : (
                    <ListGroup.Item>
                      <Row>
                        <Col>Size:</Col>
                        <Col>{request.size}</Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Row>
                      <Col>Date:</Col>
                      <Col>{request.date}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity:</Col>
                      <Col>{request.qty}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Customizations:</Col>
                      <Col>
                        <i>"{request.additional}"</i>
                      </Col>
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
    </div>
  )
}

export default withRouter(RequestScreen)
