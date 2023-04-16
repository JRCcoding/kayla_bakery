import { MDBCard } from 'mdb-react-ui-kit'
import React from 'react'
import { Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import cake from '../Images/cakes_friends.webp'
import cupcake from '../Images/cupcakes_redpink.webp'

const CupcakeScreen = () => {
  return (
    <div>
      <MDBCard className='prod_info_box'>
        <Row>
          <Col md={6}>
            <LinkContainer to='/products'>
              <button className='backprod_button absolute top-0 text-white'>
                GO BACK
              </button>
            </LinkContainer>
            <Image
              fluid
              className='prod_img'
              src={cupcake}
              alt='Kaylala Kakes'
              style={{ height: '750px' }}
            />
          </Col>
          <Col md={6}>
            <ListGroup variant='flush' className='mr-2'>
              <ListGroup.Item>
                <h1 className='text-center font-Pacifico'>Custom Cupcakes</h1>
              </ListGroup.Item>
              <ListGroup>
                <ListGroup.Item
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <button type='button' className='btn btn-primary'>
                    SUBMIT REQUEST
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup>
          </Col>
        </Row>
      </MDBCard>
    </div>
  )
}

export default CupcakeScreen
