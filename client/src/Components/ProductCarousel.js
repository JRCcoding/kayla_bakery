import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import cake from '../Images/cakes_friends.webp'
import cupcake from '../Images/cupcakes_redpink.webp'
import pupcakes from '../Images/pupcakes.png'
import trifles from '../Images/trifles.png'
import '../Styles/Carousel.css'

const ProductCarousel = () => {
  return (
    <Carousel
      controls={false}
      className='product_carousel '
      style={{ marginTop: '30px' }}
    >
      <Carousel.Item>
        <LinkContainer to={`/cakes`}>
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
        <LinkContainer to={`/cupcakes`}>
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
      <Carousel.Item>
        <LinkContainer to={`/pupcakes`}>
          <Image
            src={pupcakes}
            alt='Kaylala pupKakes'
            fluid
            className='product_carousel_image rounded'
          />
        </LinkContainer>

        <Carousel.Caption>
          <h2 className='product_carousel_caption font-Pacifico'>Pupcakes</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <LinkContainer to={`/trifles`}>
          <Image
            src={trifles}
            alt='Kaylala Trifles'
            fluid
            className='product_carousel_image rounded'
          />
        </LinkContainer>

        <Carousel.Caption>
          <h2 className='product_carousel_caption font-Pacifico'>Trifles</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel
