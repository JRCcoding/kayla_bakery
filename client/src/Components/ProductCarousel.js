import React from 'react'
import { Container, Carousel, Image } from 'react-bootstrap'
import '../Styles/Carousel.css'
import { LinkContainer } from 'react-router-bootstrap'
import cake from '../Images/cakes_friends.webp'
import cupcake from '../Images/cupcakes_redpink.webp'

const ProductCarousel = () => {
  return (
    <Carousel
      controls={false}
      className='product_carousel w-100 '
      style={{ marginTop: '30px' }}
    >
      <Carousel.Item>
        <LinkContainer to={`/products`}>
          <Image
            src={cake}
            alt='Kaylala Kakes'
            fluid
            className='product_carousel_image rounded'
          />
        </LinkContainer>

        <Carousel.Caption>
          <h2 className='product_carousel_caption font-Pacifico'>Cakes</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <LinkContainer to={`/products`}>
          <Image
            src={cupcake}
            alt='Kaylala cupKakes'
            fluid
            className='product_carousel_image rounded'
          />
        </LinkContainer>

        <Carousel.Caption>
          <h2 className='product_carousel_caption font-Pacifico'>Cupcakes</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel
