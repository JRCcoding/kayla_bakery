import React from 'react'
import {
  Row,
  Container,
  Card,
  Image,
  CarouselItem,
  Carousel,
  Col,
  Figure,
} from 'react-bootstrap'
import { Fade } from 'react-reveal'
import { LinkContainer } from 'react-router-bootstrap'
import '../Styles/Product.css'
import cake from '../Images/cakes_friends.webp'
import cupcake from '../Images/cupcakes_redpink.webp'

const ProductsScreen = () => {
  return (
    <div className='background_pattern'>
      <Container>
        <Fade>
          <div className='products_box'>
            <Container className='product_list'>
              <Row xs={1} sm={1} md={2} lg={3}>
                <LinkContainer to={`/cakes`}>
                  <Figure>
                    <Card className='product_card md:mb-5 mt-2'>
                      <Card.Header>
                        <Card.Title className='clickable inline'>
                          <h3 className='product_title font-Pacifico scale-150 my-auto'>
                            Cakes
                          </h3>
                        </Card.Title>
                      </Card.Header>
                      <Figure.Image
                        position='top'
                        alt='Kaylala Kakes'
                        // src={product.img}
                        src={cake}
                        className='clickable'
                      />

                      <Card.Body className='clickable'>
                        <Figure.Caption className='text-black mb-5'>
                          <h5>
                            Check out some of my work and place your request!
                          </h5>
                        </Figure.Caption>
                        <Figure.Caption className='text-black card_price'>
                          <h4>
                            Starting Price: <strong>$27</strong>
                          </h4>
                        </Figure.Caption>
                      </Card.Body>
                    </Card>
                  </Figure>
                </LinkContainer>

                <LinkContainer to={`/cupcakes`}>
                  <Figure>
                    <Card className='product_card md:mb-5 mt-2'>
                      <Card.Header>
                        {' '}
                        <Card.Title className='clickable inline'>
                          <h3 className='product_title font-Pacifico scale-150 my-auto'>
                            Cupcakes
                          </h3>
                        </Card.Title>
                      </Card.Header>

                      <Figure.Image
                        position='top'
                        alt='Kaylala Kakes'
                        // src={product.img}
                        src={cupcake}
                        className='clickable'
                      />

                      <Card.Body className='clickable'>
                        <Figure.Caption className='text-black mb-5'>
                          <h4>Custom Cupcakes of all kinds, contact me now!</h4>
                        </Figure.Caption>
                        <Figure.Caption className='text-black card_price'>
                          <h4>
                            Starting Price: <strong>$2.75</strong>
                          </h4>
                        </Figure.Caption>
                      </Card.Body>
                    </Card>
                  </Figure>
                </LinkContainer>
                <Card className='mx-auto'>
                  <Col className='text-center'>
                    <p className='text-2xl py-5'>
                      <strong className='text-3xl font-Pacifico'>Note:</strong>{' '}
                      Prices may change due to any additional toppers such as
                      fondant or chocolate decorations. Also, prices may change
                      for cakes depending on how many layers are requested.
                    </p>
                  </Col>
                </Card>
              </Row>
            </Container>
          </div>
        </Fade>
      </Container>
    </div>
  )
}

export default ProductsScreen
