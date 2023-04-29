import React from 'react'
import { Container, Carousel, Image } from 'react-bootstrap'
import '../Styles/Carousel.css'

import { cakes } from './products'

const CakeCarousel = () => {
  return (
    <Container className='my-auto'>
      <Carousel controls={false} className='request_carousel'>
        {cakes.map((request) => (
          <Carousel.Item key={request.title}>
            <Image
              src={request.img}
              alt={request.title}
              fluid
              className='request_carousel_image'
            />

            {/* <Carousel.Caption>
              <h2 className='request_carousel_caption font-Pacifico'>
                {request.title}
              </h2>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default CakeCarousel
