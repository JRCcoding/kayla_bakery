import React from 'react'
import {
  Row,
  Container,
  Card,
  Image,
  CarouselItem,
  Carousel,
  Col,
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
                  <Card className='product_card md:mb-5 mt-2'>
                    <Card.Header>
                      <Card.Title className='clickable inline'>
                        <h3 className='product_title font-Pacifico scale-125 my-auto'>
                          Cakes
                        </h3>
                      </Card.Title>
                    </Card.Header>
                    <Image
                      position='top'
                      alt='Kaylala Kakes'
                      // src={product.img}
                      src={cake}
                      className='clickable'
                    />

                    <Card.Body className='clickable'>
                      <Card.Text className='text-AccentText'>
                        Check out some of my work and place your request!
                      </Card.Text>
                      <Card.Text className='text-AccentText card_price'>
                        <h4>Starting Price: $27</h4>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </LinkContainer>

                <LinkContainer to={`/cupcakes`}>
                  <Card className='product_card md:mb-5 mt-2'>
                    <Card.Header>
                      {' '}
                      <Card.Title className='clickable inline'>
                        <h3 className='product_title font-Pacifico scale-125 my-auto'>
                          Cupcakes
                        </h3>
                      </Card.Title>
                    </Card.Header>

                    <Image
                      position='top'
                      alt='Kaylala Kakes'
                      // src={product.img}
                      src={cupcake}
                      className='clickable'
                    />

                    <Card.Body className='clickable'>
                      <Card.Text className='text-AccentText'>
                        Custom Cupcakes of all kinds, contact me now!
                      </Card.Text>
                      <Card.Text className='text-AccentText card_price'>
                        <h4>Starting Price: $2.75</h4>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </LinkContainer>
                <Card
                  className='product_card md:mb-5 mt-2'
                  style={{ contain: 'paint' }}
                >
                  <Col className=''>
                    <p className=' lg:text-3xl py-5'>
                      Hi I’m Kayla Mikel and I’m a home baker located in Katy,
                      T.X.
                      <br />
                      For as long as I can remember baking has been a love of
                      mine; it’s one of the many things that my mom and I bond
                      over. Watching her decorate was one of my favorite things
                      about it; I stood in awe of her, learning every single
                      detail. She has been my teacher, inspiration, and
                      supporter; because of her I became a cake decorator and
                      started Kaylala Kakes in 2018.
                    </p>
                  </Col>
                  {/* <Carousel
                    controls={false}
                    style={{ scale: '4' }}
                    interval='1000'
                  >
                    <CarouselItem>
                      {' '}
                      <LinkContainer to={`/cakes`}>
                        <Image
                          src={cake}
                          alt='Kaylala Kakes'
                          fluid
                          style={{ scale: '.5' }}
                          className='product_carousel_image rounded-full'
                        />
                      </LinkContainer>
                    </CarouselItem>
                    <CarouselItem>
                      {' '}
                      <LinkContainer to={`/cupcakes`}>
                        <Image
                          src={cupcake}
                          alt='Kaylala Kakes'
                          fluid
                          className='product_carousel_image rounded-full'
                        />
                      </LinkContainer>
                    </CarouselItem>
                  </Carousel> */}
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
