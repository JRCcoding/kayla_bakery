import React from 'react'
import { Container, Carousel, Image } from 'react-bootstrap'
import '../Styles/Carousel.css'
import { cupcakes } from './products'

const CupcakeCarousel = () => {
  return (
    <Container>
      <Carousel controls={false} className='request_carousel'>
        {cupcakes.map((request) => (
          <Carousel.Item key={request.title}>
            {request && request.category === 'cupcake' && (
              <>
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
              </>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default CupcakeCarousel
