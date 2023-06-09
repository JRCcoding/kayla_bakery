import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  deliverRequest,
  getRequestDetails,
  payRequest,
  payRequestAdmin,
} from '../Actions/requestActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import {
  REQUEST_DELIVER_RESET,
  REQUEST_PAY_RESET,
} from '../Constants/requestConstants'

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

  const [adminPrice, setAdminPrice] = useState()
  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    // request.itemsPrice = addDecimals(
    //   request.requestItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    // )
    request.price = addDecimals(request.price)
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

  const handlePriceChange = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.put(`/api/requests/${request._id}/price`, {
        price: adminPrice,
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
    window.location.reload(false)
  }

  // const handlePriceChange = () => {
  //   dispatch(updatePriceRequest(request, adminPrice))
  // }
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
                  {request.price !== '0' && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Kayla's Price:</Col>
                        <Col>
                          <i>${request.price}</i>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  {!userInfo.isAdmin && request.price !== '0' && (
                    <ListGroup.Item>
                      {loadingPay && <Loader />}
                      {!sdkReady ? (
                        <Loader />
                      ) : (
                        <PayPalButton
                          amount={request.price}
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
                  {userInfo &&
                    userInfo.isAdmin &&
                    !request.isPaid &&
                    request.price !== '0' && (
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
                {userInfo && userInfo.isAdmin && (
                  <div
                    style={{
                      dispaly: 'flex',
                      flexDirection: 'column',
                      width: '75%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    <h3 style={{ display: 'inline' }}>Set price: &nbsp;</h3>
                    <input
                      type='text'
                      value={adminPrice}
                      onChange={(e) => setAdminPrice(e.target.value)}
                      style={{
                        display: 'inline',
                        border: '1px solid gray',
                        borderRadius: '45px',
                        width: '25%',
                      }}
                    />
                    <button type='submit' onClick={handlePriceChange}>
                      Submit
                    </button>
                  </div>
                )}
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  )
}

export default withRouter(RequestScreen)
