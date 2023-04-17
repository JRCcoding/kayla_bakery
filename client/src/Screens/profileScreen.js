import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col, Container, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { getUserDetails, updateUserProfile } from '../Actions/userActions'
import { listMyRequests } from '../Actions/requestActions'
import { USER_UPDATE_PROFILE_RESET } from '../Constants/userConstants'
import { withRouter } from 'react-router-dom'

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const requestListMy = useSelector((state) => state.requestListMy)
  const {
    loading: loadingRequests,
    error: errorRequests,
    requests,
  } = requestListMy

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
        dispatch(listMyRequests())
      } else {
        setName(user.name)
        setEmail(user.email)
        setNumber(user.number)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(
        updateUserProfile({ id: user._id, name, email, number, password })
      )
    }
  }

  return (
    <div className='background_pattern' style={{ height: '100vh' }}>
      <Container>
        <Card>
          <Row>
            <Col md={3}>
              <h2>User Profile</h2>
              {message && <Message variant='danger'>{message}</Message>}
              {}
              {success && <Message variant='success'>Profile Updated</Message>}
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant='danger'>{error}</Message>
              ) : (
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='name'
                      placeholder='Enter name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='number'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Enter phone number'
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Confirm password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Button type='submit' variant='primary'>
                    Update
                  </Button>
                </Form>
              )}
            </Col>
            <Col md={9}>
              <h2>My Requests</h2>
              {loadingRequests ? (
                <Loader />
              ) : errorRequests ? (
                <Message variant='danger'>{errorRequests}</Message>
              ) : (
                <Table striped brequested hover responsive className='table-sm'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                      <th>PAID</th>
                      <th>DELIVERED</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request) => (
                      <tr key={request._id}>
                        <td>{request._id}</td>
                        <td>{request.createdAt.substring(0, 10)}</td>
                        <td>${request.totalPrice}</td>
                        <td>
                          {request.isPaid ? (
                            request.paidAt.substring(0, 10)
                          ) : (
                            <i
                              className='fas fa-times'
                              style={{ color: 'red' }}
                            ></i>
                          )}
                        </td>
                        <td>
                          {request.isDelivered ? (
                            request.deliveredAt.substring(0, 10)
                          ) : (
                            <i
                              className='fas fa-times'
                              style={{ color: 'red' }}
                            ></i>
                          )}
                        </td>
                        <td>
                          <LinkContainer to={`/request/${request._id}`}>
                            <Button className='btn-sm' variant='light'>
                              Details
                            </Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  )
}

export default withRouter(ProfileScreen)
