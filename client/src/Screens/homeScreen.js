import React from 'react'
import ProductCarousel from '../Components/ProductCarousel'
// import ValentineCarousel from '../Components/ValentineCarousel'
import Contact from '../Components/Contact'
import { Fade } from 'react-reveal'
import Meta from '../Components/Meta'
import { Card, Col, Row } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='Kaylala Kakes' />
      <ProductCarousel />
      {/* <ValentineCarousel /> */}
      <Card className='product_card mb-10 mx-10 px-4'>
        <Col className='text-center'>
          <p className='text-2xl '>
            Hi, I’m{' '}
            <strong className='font-Pacifico'>
              <h3 className='inline'>Kayla Mikel</h3>
            </strong>{' '}
            and I’m a home baker located in Katy, T.X.
            <br />
            For as long as I can remember baking has been a love of mine; it’s
            one of the many things that my mom and I bond over. Watching her
            decorate was one of my favorite things about it; I stood in awe of
            her, learning every single detail. She has been my teacher,
            inspiration, and supporter; because of her I became a cake decorator
            and started Kaylala Kakes in 2018.
          </p>
        </Col>
      </Card>

      <Fade up>
        <Contact />
      </Fade>
    </div>
  )
}

export default HomeScreen
