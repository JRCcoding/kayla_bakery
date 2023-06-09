import React, { useEffect } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { listRequests } from '../Actions/requestActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

const RequestListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const requestList = useSelector((state) => state.requestList)
  const { loading, error, requests } = requestList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listRequests())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
    <div className='background_pattern' style={{ height: '100vh' }}>
      <Container>
        <Card>
          <h1>Requests</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>USER</th>
                  <th>TYPE</th>

                  <th>PLACED</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                </tr>
              </thead>
              <tbody>
                {requests.reverse().map((request) => (
                  <tr key={request._id}>
                    <td>{request._id.substring(19, 24)}</td>
                    <td>{request.name}</td>
                    <td>{request.formType}</td>
                    <td>
                      {Date(request.createdAt)
                        .toLocaleString('en-US', {
                          timeZone: 'America/Chicago',
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric',
                        })
                        .substring(0, 11)}
                    </td>
                    <td>
                      {request.isPaid ? (
                        <i
                          className='fas fa-check'
                          style={{ color: 'green' }}
                        ></i>
                      ) : (
                        <i
                          className='fas fa-times'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {request.isDelivered ? (
                        <i
                          className='fas fa-check'
                          style={{ color: 'green' }}
                        ></i>
                      ) : (
                        <i
                          className='fas fa-times'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <LinkContainer to={`/request/${request._id}`}>
                        <Button variant='light' className='btn-sm'>
                          Details
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card>
      </Container>
    </div>
  )
}

export default RequestListScreen
